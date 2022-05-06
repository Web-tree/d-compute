//+build wireinject

package local

import (
	"github.com/google/wire"
)

func GetInstance() Db {
	wire.Build(newDb, DbPath)
	return nil
}
