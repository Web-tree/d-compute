package pool

import "github.com/onsi/gomega/matchers/support/goraph/node"

type ConnectionPool interface {
	ConnectToNodes(n []*node.Node)
	OnDisconnect(func())
}

func NewConnectionPool(c *config) ConnectionPool {
	return &connectionPool{
		config: c,
	}
}

type connectionPool struct {
	config *config
}

func (c *connectionPool) OnDisconnect(f func()) {
	panic("implement me")
}

func (c *connectionPool) ConnectToNodes(n []*node.Node) {
	panic("implement me")
}
