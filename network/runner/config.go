package runner

import "github.com/Web-tree/d-compute/network/connectivity"

type Config struct {
	connectionService connectivity.ConnectionService
}

func Conf() *Config {
	return &Config{
		connectionService: connectivity.GetConnectionService(connectivity.Conf()),
	}
}
