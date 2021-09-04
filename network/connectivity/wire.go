//+build wireinject

package connectivity

import (
	"github.com/Web-tree/d-compute/network/connectivity/invitation"
	"github.com/Web-tree/d-compute/network/connectivity/pool"
	"github.com/Web-tree/d-compute/network/connectivity/topology"
	"github.com/Web-tree/d-compute/network/keys"
	"github.com/Web-tree/d-compute/network/local"
	"github.com/google/wire"
)

func Initialize() ConnectionService {
	wire.Build(
		newConnectionService,
		defaultMinConnectedNodes,
		defaultMaxConnectedNodes,
		local.GetInstance,
		pool.GetInstance,

		keys.NewKeysService,
		keys.Conf,

		invitation.NewService,
		invitation.Conf,

		topology.NewService,
		topology.Conf,
	)
	return nil
}

func defaultMaxConnectedNodes() topology.MaxConnectedNodes {
	return 1000
}
func defaultMinConnectedNodes() topology.MinConnectedNodes {
	return 50
}
