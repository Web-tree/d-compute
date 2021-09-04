package connectivity

import (
	"github.com/Web-tree/d-compute/network/keys"
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestConnectivityService(t *testing.T) {
	service := Initialize()
	keysService := keys.NewKeysService(keys.Conf())

	t.Run("IsRegistered", func(t *testing.T) {
		t.Run("should return false when keyPair is empty", func(t *testing.T) {
			assert.False(t, service.IsRegistered())
		})
	})
	t.Run("Run", func(t *testing.T) {
		t.Run("should create keys if empty", func(t *testing.T) {
			_ = keysService.ResetKeys()
			err := service.Run()
			assert.NoError(t, err)
			exists, err := keysService.KeysExists()
			assert.NoError(t, err)
			assert.True(t, exists)
		})
		t.Run("should have no connected hosts", func(t *testing.T) {
			err := service.Run()
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
