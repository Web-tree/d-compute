package app

import (
	"github.com/Web-tree/d-compute/network/connectivity"
	"github.com/Web-tree/d-compute/network/connectivity/invitation"
)

type App struct {
	invitation.Service
	connectivity.ConnectionService
}

func newApp(inv invitation.Service, conn connectivity.ConnectionService) *App {
	return &App{
		Service:           inv,
		ConnectionService: conn,
	}
}
