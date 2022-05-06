package pool

import (
	"github.com/Web-tree/d-compute/network/connectivity/wtnode"
)

type ConnectionPool interface {
	ConnectToNodes(n []*wtnode.WebtreeNode)
	OnDisconnect(func())
}

func newConnectionPool() ConnectionPool {
	return &connectionPool{}
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

func (c *connectionPool) ConnectToNodes(n []*wtnode.WebtreeNode) {
	panic("implement me")
}
