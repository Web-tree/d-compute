package connectivity

import (
	"context"
	"github.com/Web-tree/d-compute/network/connectivity/topology"
	"github.com/Web-tree/d-compute/network/keys"
	"github.com/libp2p/go-libp2p"
	core "github.com/libp2p/go-libp2p-core"
	"github.com/onsi/gomega/matchers/support/goraph/node"
	"reflect"
	"sync"
)

type ConnectionService interface {
	IsRegistered() bool
	Connect() error
	Status() *Status
	StartOwnNetwork() error
	InitOwnNetwork() error
	GetConnectionAddress() string
	Disconnect() error
}

var service *connectionService
var serviceInitLock sync.Mutex

func GetConnectionService(config *Config) ConnectionService {
	serviceInitLock.Lock()
	if service == nil {
		service = &connectionService{
			conf: config,
			status: &Status{
				Run:            false,
				Host:           nil,
				ConnectedNodes: []node.Node{},
			},
			topologyService: topology.NewService(topology.Conf()),
		}
	}
	serviceInitLock.Unlock()
	if !reflect.DeepEqual(service.conf, config) {
		panic("You can't init service with another config. Probably there is a error in logic.")
	}
	return service
}

var _ ConnectionService = &connectionService{}

type connectionService struct {
	conf            *Config
	host            core.Host
	status          *Status
	topologyService topology.Service
}

func (c *connectionService) Disconnect() error {
	panic("implement me")
}

func (c *connectionService) InitOwnNetwork() error {
	tp := topology.Topology{}
	return c.topologyService.SaveTopology(&tp)
}

func (c *connectionService) GetConnectionAddress() string {
	panic("implement me")
}

func (c *connectionService) StartOwnNetwork() error {
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
	return nil
}

func (c *connectionService) getKeys() (*keys.KeyPair, error) {
	exists, err := c.conf.keys.KeysExists()
	if err != nil {
		return nil, err
	}
	if exists {
		return c.conf.keys.GetExisting()
	} else {
		return c.conf.keys.GenerateNew()
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
		err := c.StartOwnNetwork()
		if err != nil {
			return err
		}
	} else {
		c.topologyService.GetBestMatchNodes(c.conf.minConnectedNodes, c.conf.maxConnectedNodes)
		nodes := c.topologyService.GetBestMatchNodes(c.conf.minConnectedNodes, c.conf.maxConnectedNodes)
		c.conf.pool.ConnectToNodes(nodes)
	}
	c.conf.watcher.watch(c)
	return nil
}

func (c *connectionService) IsRegistered() bool {
	_, err := c.topologyService.GetTopology()
	return err == nil
}
