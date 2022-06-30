package relaynode

import (
	"github.com/Web-tree/d-compute/network/testutils"
	"testing"
)

func Test(t *testing.T) {
	host := "127.0.0.1"
	testutils.FindFreePort(t, "")
	NewRelayNode(host)
}
