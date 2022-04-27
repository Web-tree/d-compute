package keys

import "github.com/Web-tree/d-compute/network/local"

type Config struct {
	Db    local.Db
	DbKey []byte
}

func Conf() *Config {
	return &Config{
		Db:    initDb(),
		DbKey: []byte("cryptoKey"),
	}
}

func initDb() local.Db {
	return local.NewDb(local.DbConf())
}
