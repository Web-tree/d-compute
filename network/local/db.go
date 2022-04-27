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

func DbPath() string {
	return "./_localdb"
}
func newDb(dbPath string) Db {
	return NewDb(&DbConfig{Path: dbPath})
}

// Deprecated
func NewDb(config *DbConfig) Db {
	if db, exists := connections[config.Path]; exists {
		return db
	}
	levelDb, err := leveldb.OpenFile(config.Path, nil)
	if err == nil {
		db := &dbImpl{
			levelDb: levelDb,
		}
		connections[config.Path] = db
		return db
	} else {
		panic(err)
	}
}

type DbConfig struct {
	Path string
}

func DbConf() *DbConfig {
	return &DbConfig{
		Path: "./_localdb",
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
