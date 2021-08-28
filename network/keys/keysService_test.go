package keys

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestKeysServiceTest(t *testing.T) {
	keysService := NewKeysService(Conf())

	t.Run("should have keys after generation", func(t *testing.T) {
		_ = keysService.ResetKeys()
		keyPair, err := keysService.GenerateNew()
		assert.NoError(t, err)
		existing, err := keysService.GetExisting()
		assert.NoError(t, err)
		assert.Equal(t, existing, keyPair)
	})
	t.Run("KeysExists", func(t *testing.T) {
		_ = keysService.ResetKeys()
		exists, err := keysService.KeysExists()
		assert.NoError(t, err)
		assert.False(t, exists)
	})
}
