package invitation

import (
	"github.com/Web-tree/d-compute/network/connectivity"
	"github.com/Web-tree/d-compute/network/local"
)

type config struct {
	db                local.Db
	connectionService connectivity.ConnectionService
}

func Conf() *config {
	return &config{
		db:                local.NewDb(local.DbConf()),
		connectionService: connectivity.GetConnectionService(connectivity.Conf()),
	}
}
