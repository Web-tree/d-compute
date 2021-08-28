package topology

import "github.com/onsi/gomega/matchers/support/goraph/node"

type Topology struct {
	Inited          bool
	ParentNode      *node.Node
	KnownNodes      []*node.Node
	DirectConnected []*node.Node
}
