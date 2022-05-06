//+build wireinject

package app

import (
	"github.com/Web-tree/d-compute/network/connectivity"
	"github.com/Web-tree/d-compute/network/local"
	"github.com/google/wire"
)

var dbProvider = func() local.Db { return local.GetInstance() }

func New() *App {
	wire.Build(
		newApp,
		local.GetInstance,
		connectivity.Initialize,
	)
	return nil
}
