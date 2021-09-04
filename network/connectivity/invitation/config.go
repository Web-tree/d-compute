package invitation

import (
	"github.com/Web-tree/d-compute/network/keys"
	"github.com/Web-tree/d-compute/network/local"
)

type config struct {
	db         local.Db
	keyService keys.Service
}

func Conf() *config {
	return &config{
		db:         local.NewDb(local.DbConf()),
		keyService: keys.NewKeysService(keys.Conf()),
	}
}
