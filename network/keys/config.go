package keys

import "github.com/Web-tree/d-compute/network/local"

type Config struct {
	db    local.Db
	dbKey []byte
}

func Conf() *Config {
	return &Config{
		db:    initDb(),
		dbKey: []byte("cryptoKey"),
	}
}

func initDb() local.Db {
	return local.NewDb(local.DbConf())
}
