package core

import (
	"github.com/Web-tree/d-compute/network/core/connection"
	"github.com/Web-tree/d-compute/network/core/store"
)

type Config struct {
	connection.Connection
	store.PersistentKVS
}
