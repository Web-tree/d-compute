package connectivity

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestConnectivityService(t *testing.T) {
	conf := Conf()
	service := GetConnectionService(conf)

	t.Run("IsRegistered", func(t *testing.T) {
		t.Run("should return false when keyPair is empty", func(t *testing.T) {
			assert.False(t, service.IsRegistered())
		})
	})
	t.Run("StartOwnNetwork", func(t *testing.T) {
		t.Run("should create keys if empty", func(t *testing.T) {
			_ = conf.keys.ResetKeys()
			err := service.StartOwnNetwork()
			assert.NoError(t, err)
			exists, err := conf.keys.KeysExists()
			assert.NoError(t, err)
			assert.True(t, exists)
		})
		t.Run("should have no connected hosts", func(t *testing.T) {
			err := service.StartOwnNetwork()
			assert.NoError(t, err)
			status := service.Status()
			assert.NotNil(t, status)
			assert.True(t, status.Run)
			assert.Empty(t, status.ConnectedNodes)
			assert.NotNil(t, status.Host)
			assert.NotEmpty(t, status.GetHostId())
		})
	})
}
