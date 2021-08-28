package connectivity

import (
	"github.com/Web-tree/d-compute/network/connectivity/pool"
	"github.com/Web-tree/d-compute/network/keys"
	"github.com/Web-tree/d-compute/network/local"
)

type Config struct {
	minConnectedNodes int
	maxConnectedNodes int
	db                local.Db
	pool              pool.ConnectionPool
	watcher           connectionWatcher
	keys              keys.Service
}

func Conf() *Config {
	return &Config{
		minConnectedNodes: 1,
		maxConnectedNodes: 100,
		db:                local.NewDb(local.DbConf()),
		pool:              pool.NewConnectionPool(pool.Conf()),
		keys:              keys.NewKeysService(keys.Conf()),
	}
}
