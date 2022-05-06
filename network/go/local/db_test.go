package local

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestDb(t *testing.T) {
	db := NewDb(DbConf())

	existingKey := []byte("tst")
	notExistingKey := []byte("unknown key")
	content := []byte("some content")

	t.Run("Put and Get", func(t *testing.T) {
		t.Run("when put data in db should be able to get them back", func(t *testing.T) {
			assert.NoError(t, db.Put(existingKey, content))
			bytes, err := db.Get(existingKey)
			assert.NoError(t, err)
			assert.Equal(t, content, bytes)
		})
		t.Run("when key not exists should return ErrNotFound error", func(t *testing.T) {
			bytes, err := db.Get(notExistingKey)
			assert.Nil(t, bytes)
			assert.Equal(t, err, ErrNotFound)
		})
	})
	t.Run("Has", func(t *testing.T) {
		t.Run("should return true when key exists", func(t *testing.T) {
			_ = db.Put(existingKey, content)

			has, err := db.Has(existingKey)
			assert.NoError(t, err)
			assert.True(t, has)
		})
		t.Run("should return false when key not exists", func(t *testing.T) {
			has, err := db.Has(notExistingKey)
			assert.NoError(t, err)
			assert.False(t, has)
		})
	})
	t.Run("Delete", func(t *testing.T) {
		_ = db.Put(existingKey, content)
		assert.NoError(t, db.Delete(existingKey))
		has, _ := db.Has(existingKey)
		assert.False(t, has)
	})
}
