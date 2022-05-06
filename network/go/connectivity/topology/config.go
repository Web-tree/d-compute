package topology

import "github.com/Web-tree/d-compute/network/local"

type config struct {
	Db local.Db
}

func Conf() *config {
	return &config{
		Db: local.GetInstance(),
	}
}

type MinConnectedNodes int
type MaxConnectedNodes int
