package testBrowserLib

import (
	"github.com/Web-tree/d-compute/network/core"
	"github.com/Web-tree/d-compute/network/integTests/testutils"
	"github.com/Web-tree/d-compute/network/relaynode"
	ma "github.com/multiformats/go-multiaddr"
	"github.com/stretchr/testify/assert"
	"testing"
)

func Test(t *testing.T) {
	port, err := testutils.FindFreePort(t, "", 5)
	assert.NoError(t, err)
	host := "127.0.0.1"
	go relaynode.RunRelayNode(host, port)

	t.Run("should open port relay node port", func(t *testing.T) {
		t.Logf("port: %d", port)
		assert.True(t, testutils.WaitForPort(host, port))
	})

	t.Run("App", func(t *testing.T) {
		app1 := core.NewApp(core.Config{})
		app2 := core.NewApp(core.Config{})
		t.Run("should be not connected when just created app", func(t *testing.T) {
			status1, err := app1.GetConnectionStatus()
			status2, err := app2.GetConnectionStatus()
			assert.NoError(t, err)
			assert.False(t, status1.Connected)
			assert.False(t, status2.Connected)
		})
		t.Run("should be able to connect to relay node", func(t *testing.T) {

			//app1.ConnectToRelay()
		})
	})

}
