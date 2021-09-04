package topology

import "github.com/Web-tree/d-compute/network/local"

type config struct {
	db local.Db
}

func Conf() *config {
	return &config{
		db: local.GetInstance(),
	}
}

type MinConnectedNodes int
type MaxConnectedNodes int
