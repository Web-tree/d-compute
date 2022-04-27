package connectivity

import (
	"github.com/Web-tree/d-compute/network/connectivity/invitation"
	"github.com/Web-tree/d-compute/network/connectivity/pool"
	"github.com/Web-tree/d-compute/network/connectivity/topology"
	"github.com/Web-tree/d-compute/network/keys"
	"github.com/Web-tree/d-compute/network/local"
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
			err := service.Stop()
			assert.NoError(t, err)
			err = service.Run()
			assert.NoError(t, err)
			status := service.Status()
			assert.NotNil(t, status)
			assert.True(t, status.Run)
			assert.Empty(t, status.ConnectedNodes)
			assert.NotNil(t, status.Host)
			assert.NotEmpty(t, status.GetHostId())
		})
	})

	t.Run("Invitations", func(t *testing.T) {
		inviter := Initialize()
		assert.NoError(t, inviter.InitOwnNetwork())
		dbConf := local.DbConf()
		dbConf.Path = dbConf.Path + "-invitee"
		db := local.NewDb(dbConf)
		keysConf := keys.Conf()
		keysConf.Db = db
		invitationConf := invitation.Conf()
		invitationConf.Db = db
		topologyConf := topology.Conf()
		topologyConf.Db = db
		invitee := newConnectionService(
			1, 1,
			db,
			pool.GetInstance(),
			keys.NewKeysService(keysConf), invitation.NewService(invitationConf), topology.NewService(topologyConf),
		)
		print(invitee)

	})
}
