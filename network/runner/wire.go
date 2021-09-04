//+build wireinject

package runner

import (
	"github.com/Web-tree/d-compute/network/connectivity"
	"github.com/google/wire"
)

func InitializeRunner() Runner {
	wire.Build(newRunner, connectivity.Initialize)
	return nil
}
