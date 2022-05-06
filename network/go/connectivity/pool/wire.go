//+build wireinject

package pool

import "github.com/google/wire"

func GetInstance() ConnectionPool {
	wire.Build(
		newConnectionPool,
	)
	return nil
}
