package local

import (
	"github.com/syndtr/goleveldb/leveldb"
	"github.com/syndtr/goleveldb/leveldb/errors"
)

var (
	ErrNotFound = errors.ErrNotFound
)

type Db interface {
	Get(key []byte) ([]byte, error)
	Put(key []byte, value []byte) error
	Has(key []byte) (bool, error)
	Delete(key []byte) error
}

var connections = make(map[string]Db)

func NewDb(config *DbConfig) Db {
	if db, exists := connections[config.path]; exists {
		return db
	}
	levelDb, err := leveldb.OpenFile(config.path, nil)
	if err == nil {
		db := &dbImpl{
			levelDb: levelDb,
		}
		connections[config.path] = db
		return db
	} else {
		panic(err)
	}
}

type DbConfig struct {
	path string
}

func DbConf() *DbConfig {
	return &DbConfig{
		path: "./_localdb",
	}
}

var _ Db = &dbImpl{}

type dbImpl struct {
	levelDb *leveldb.DB
}

func (d *dbImpl) Delete(key []byte) error {
	return d.levelDb.Delete(key, nil)
}

func (d *dbImpl) Has(key []byte) (bool, error) {
	has, err := d.levelDb.Has(key, nil)
	if err != nil {
		return false, err
	}
	return has, nil
}

func (d *dbImpl) Put(key []byte, value []byte) error {
	return d.levelDb.Put(key, value, nil)
}

func (d *dbImpl) Get(key []byte) ([]byte, error) {
	return d.levelDb.Get(key, nil)
}
