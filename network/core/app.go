package core

import (
	"github.com/Web-tree/d-compute/network/core/connection"
	"github.com/Web-tree/d-compute/network/core/store"
	"github.com/Web-tree/d-compute/network/core/wtprotocol"
)

type App interface {
	GetConnectionStatus() (wtprotocol.ConnectionStatus, error)
}

type app struct {
	connection.Connection
	store.PersistentKVS
}

func (a *app) GetConnectionStatus() (wtprotocol.ConnectionStatus, error) {
	return wtprotocol.ConnectionStatus{}, nil
}

func NewApp(config Config) App {
	return &app{
		Connection:    config.Connection,
		PersistentKVS: config.PersistentKVS,
	}
}
