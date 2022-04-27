package invitation

import (
	"github.com/Web-tree/d-compute/network/keys"
	"github.com/Web-tree/d-compute/network/local"
)

type config struct {
	Db         local.Db
	KeyService keys.Service
}

func Conf() *config {
	return &config{
		Db:         local.NewDb(local.DbConf()),
		KeyService: keys.NewKeysService(keys.Conf()),
	}
}
