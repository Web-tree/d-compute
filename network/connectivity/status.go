package connectivity

import (
	core "github.com/libp2p/go-libp2p-core"
	"github.com/multiformats/go-multiaddr"
	"github.com/onsi/gomega/matchers/support/goraph/node"
)

type Status struct {
	Run            bool
	Host           core.Host
	ConnectedNodes []node.Node
}

func (s Status) GetHostId() string {
	return s.Host.ID().Pretty()
}

func (s Status) GetHostAddresses() []multiaddr.Multiaddr {
	return s.Host.Addrs()
}
