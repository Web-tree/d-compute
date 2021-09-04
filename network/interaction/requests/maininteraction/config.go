package maininteraction

import (
	"github.com/Web-tree/d-compute/network/connectivity"
	"github.com/Web-tree/d-compute/network/connectivity/invitation"
)

type Config struct {
	connectionService connectivity.ConnectionService
	invitationService invitation.Service
}

func Conf() *Config {
	return &Config{
		connectionService: connectivity.Initialize(),
		invitationService: invitation.NewService(invitation.Conf()),
	}
}
