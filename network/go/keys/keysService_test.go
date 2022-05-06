package keys

import (
	"crypto/rand"
	"github.com/libp2p/go-libp2p-core/crypto"
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

	t.Run("Encode public, decode private", func(t *testing.T) {
		privKey, pubKey, err := crypto.GenerateKeyPairWithReader(crypto.RSA, 2048, rand.Reader)
		assert.NoError(t, err)
		c := []byte("some content")
		encoded, err := keysService.EncodeWithPublicKey(c, pubKey)
		assert.NoError(t, err)
		decoded, err := keysService.DecodeWithPrivateKey(encoded, privKey)
		assert.NoError(t, err)
		assert.Equal(t, c, decoded)
	})
}
