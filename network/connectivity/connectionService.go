package connectivity

import (
	"context"
	"fmt"
	"github.com/Web-tree/d-compute/network/connectivity/_localdb"
	"github.com/Web-tree/d-compute/network/connectivity/invitation"
	"github.com/Web-tree/d-compute/network/connectivity/pool"
	"github.com/Web-tree/d-compute/network/connectivity/topology"
	"github.com/Web-tree/d-compute/network/connectivity/wtnode"
	"github.com/Web-tree/d-compute/network/keys"
	"github.com/Web-tree/d-compute/network/local"
	"github.com/gogo/protobuf/io"
	"github.com/golang/protobuf/proto"
	"github.com/libp2p/go-libp2p"
	core "github.com/libp2p/go-libp2p-core"
	"github.com/libp2p/go-libp2p-core/host"
	"github.com/libp2p/go-libp2p-core/network"
	"github.com/libp2p/go-libp2p-core/peer"
	"github.com/libp2p/go-libp2p-core/peerstore"
	"github.com/multiformats/go-multiaddr"
	"github.com/onsi/gomega/matchers/support/goraph/node"
	"github.com/rs/zerolog/log"
	"github.com/syndtr/goleveldb/leveldb/errors"
	"io/ioutil"
	"sync"
)

type ConnectionService interface {
	IsRegistered() bool
	Connect() error
	Status() *Status
	Run() error
	InitOwnNetwork() error
	Disconnect() error
	ConnectByInvitationLink(invitation string) error
	PutWtNode(webtreeNode *wtnode.WebtreeNode) error
}

var service *connectionService
var serviceInitLock sync.Mutex

func newConnectionService(
	min topology.MinConnectedNodes,
	max topology.MaxConnectedNodes,
	db local.Db,
	pool pool.ConnectionPool,
	keys keys.Service,
	invitationService invitation.Service,
	topologyService topology.Service,
) ConnectionService {
	if service == nil {
		serviceInitLock.Lock()
		service = &connectionService{
			db:                db,
			pool:              pool,
			keys:              keys,
			invitationService: invitationService,
			topologyService:   topologyService,
			min:               min,
			max:               max,

			status: &Status{
				Run:            false,
				Host:           nil,
				ConnectedNodes: []node.Node{},
			},
		}
		serviceInitLock.Unlock()
	}
	return service
}

var _ ConnectionService = &connectionService{}

type connectionService struct {
	min               topology.MinConnectedNodes
	max               topology.MaxConnectedNodes
	db                local.Db
	pool              pool.ConnectionPool
	keys              keys.Service
	invitationService invitation.Service
	status            *Status
	topologyService   topology.Service
	watcher           connectionWatcher
}

func (c *connectionService) PutWtNode(n *wtnode.WebtreeNode) error {
	for _, address := range n.ConnectionAddresses {
		a, err := multiaddr.NewMultiaddrBytes(address)
		if err != nil {
			return err
		}
		c.status.Host.Peerstore().AddAddr(peer.ID(n.Id), a, peerstore.PermanentAddrTTL)
	}
	return nil
}

func (c *connectionService) ConnectByInvitationLink(invStr string) error {
	inv, err := c.invitationService.DecodeInvitation(invStr)
	if err != nil {
		return err
	}

	for _, addr := range inv.GetConnectionAddresses() {
		ipfsaddr, err := multiaddr.NewMultiaddr(addr)
		if err != nil {
			log.Warn().Err(err).Send()
		}
		pid, err := ipfsaddr.ValueForProtocol(multiaddr.P_IPFS)
		if err != nil {
			log.Warn().Err(err).Send()
		}
		peerId, err := peer.Decode(pid)
		if err != nil {
			log.Warn().Err(err).Send()
		}
		targetPeerAddr, err := multiaddr.NewMultiaddr(fmt.Sprintf("/ipfs/%s", pid))
		if err != nil {
			log.Warn().Err(err).Send()
		}
		targetAddr := ipfsaddr.Decapsulate(targetPeerAddr)
		h := c.status.Host
		h.Peerstore().AddAddr(peerId, targetAddr, peerstore.PermanentAddrTTL)

		err = c.sendAcceptInvitationMessage(err, h, peerId, inv)
		if err != nil {
			continue
		}
		return nil
	}
	return errors.New("Can't establish connection to any connection addresses given in the invitation. Check if you and your friend device has an internet connection.")
}

func (c *connectionService) sendAcceptInvitationMessage(err error, h core.Host, peerId peer.ID, inv invitation.Invitation) error {
	stream, err := h.NewStream(context.Background(), peerId, runner.AcceptInvitationHandlerPath)
	if err != nil {
		log.Warn().Err(err).Send()
		return err
	}
	defer stream.Close()

	writer := io.NewFullWriter(stream)
	kPair, err := c.getKeys()
	if err != nil {
		return err
	}
	pubKeyBytes, err := kPair.PubKey.Bytes()
	if err != nil {
		return err
	}
	acceptInvitation := invitation.AcceptInvitation{
		InvitationId: inv.GetInvitationId(),
		HostId:       c.status.Host.ID().String(),
		PublicKey:    pubKeyBytes,
	}
	err = writer.WriteMsg(&acceptInvitation)
	if err != nil {
		return err
	}
	respBytes, err := ioutil.ReadAll(stream)
	if err != nil {
		return err
	}
	n := &wtnode.WebtreeNode{}
	err = proto.Unmarshal(respBytes, n)
	if err != nil {
		return err
	}
	err = c.PutWtNode(n)
	return nil
}

func (c *connectionService) Disconnect() error {
	panic("implement me")
}

func (c *connectionService) InitOwnNetwork() error {
	tp := topology.Topology{}
	return c.topologyService.SaveTopology(&tp)
}

func (c *connectionService) Run() error {
	if c.status.Run {
		return errors.New("Already running")
	}
	k, err := c.getKeys()
	if err != nil {
		return err
	}
	ctx := context.Background()
	opts := []libp2p.Option{
		libp2p.Identity(k.PrivKey),
	}
	host, err := libp2p.New(ctx, opts...)
	if err != nil {
		return err
	}
	c.status = &Status{
		Run:            true,
		Host:           host,
		ConnectedNodes: []node.Node{},
	}
	c.addHandlers(host)
	return nil
}

func (c *connectionService) getKeys() (*keys.KeyPair, error) {
	exists, err := c.keys.KeysExists()
	if err != nil {
		return nil, err
	}
	if exists {
		return c.keys.GetExisting()
	} else {
		return c.keys.GenerateNew()
	}
}

func (c *connectionService) Status() *Status {
	return c.status
}

func (c *connectionService) Connect() error {
	t, err := c.topologyService.GetTopology()
	if err != nil {
		return err
	}
	if t.ParentNode == nil {
		err := c.Run()
		if err != nil {
			return err
		}
	} else {
		nodes := c.topologyService.GetBestMatchNodes(c.min, c.max)
		c.pool.ConnectToNodes(nodes)
	}
	c.watcher.watch(c)
	return nil
}

func (c *connectionService) IsRegistered() bool {
	_, err := c.topologyService.GetTopology()
	return err == nil
}

func (c *connectionService) addHandlers(host host.Host) {
	host.SetStreamHandler(runner.AcceptInvitationHandlerPath, func(stream network.Stream) {
		defer stream.Close()
		b, err := ioutil.ReadAll(stream)
		if err != nil {
			c.processHandlerError(stream, err)
		}

		var accept invitation.AcceptInvitation
		err = proto.Unmarshal(b, &accept)
		if err != nil {
			c.processHandlerError(stream, err)
			return
		}
		key, err := c.invitationService.GetInvitationByPublicKey(accept.PublicKey)
		if err != nil {
			c.processHandlerError(stream, err)
			return
		}
		if accept.GetInvitationId() != key.GetInvitationId() {
			c.processHandlerError(stream, errors.New("There are different invitation IDs your get and saved by inviter node"))
			return
		}
		err = c.PutWtNode(&wtnode.WebtreeNode{
			Id:                  accept.HostId,
			PubKey:              accept.PublicKey,
			ConnectionAddresses: [][]byte{stream.Conn().RemoteMultiaddr().Bytes()},
			Trust:               0.5,
		})

		if err != nil {
			c.processHandlerError(stream, err)
			return
		}
	})
}
func (c connectionService) processHandlerError(stream network.Stream, err error) {
	if e := stream.Reset(); e != nil {
		log.Err(e)
	}
	_, err = stream.Write([]byte(err.Error()))
	if err != nil {
		log.Err(err).Send()
	}
}
