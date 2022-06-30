package relaynode

import (
	"fmt"
	"github.com/libp2p/go-libp2p"
	"github.com/libp2p/go-libp2p-core/host"
	relayv1 "github.com/libp2p/go-libp2p/p2p/protocol/circuitv1/relay"
	"github.com/multiformats/go-multiaddr"
	"log"
)

type RelayNode interface {
	Run() error
	Stop()
	IsRunning() bool
	GetMultiaddresses() []multiaddr.Multiaddr
}

var _ RelayNode = &relayNode{}

type relayNode struct {
	ip       string
	port     int
	stopChan chan bool
}

func (r *relayNode) Stop() {
	r.stopChan <- true
}

func (r *relayNode) Run() error {
	go func() {
		RunRelayNode(r.ip, r.port)
		r.stopChan = make(chan bool)
		<-r.stopChan
	}()
	return nil
}

func (r *relayNode) IsRunning() bool {
	//TODO implement me
	panic("implement me")
}

func (r *relayNode) GetMultiaddresses() []multiaddr.Multiaddr {
	//TODO implement me
	panic("implement me")
}

func NewRelayNode(ip string, port int) RelayNode {
	return &relayNode{}
}
func RunRelayNode(ip string, port int) (host.Host, error) {
	host, err := libp2p.New(
		libp2p.ListenAddrStrings(fmt.Sprintf("/ip4/%s/tcp/%d/ws", ip, port)),
		libp2p.DisableRelay(),
		//transport,
	)
	if err != nil {
		return nil, err
	}
	_, err = relayv1.NewRelay(host)
	if err != nil {
		return nil, err
	}

	log.Println(host.ID())
	log.Println(host.Addrs())
	return host, nil

}
