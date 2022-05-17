package core

import (
	"github.com/Web-tree/d-compute/network/core/connection"
	"github.com/Web-tree/d-compute/network/core/store"
)

type App interface {
}

type app struct {
	connection.Connection
	store.PersistentKVS
}

func NewApp(config Config) App {
	return app{
		Connection:    config.Connection,
		PersistentKVS: config.PersistentKVS,
	}
}
