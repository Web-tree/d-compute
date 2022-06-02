package wtprotocol

import (
	"github.com/libp2p/go-libp2p-core/network"
)

func NewConnectOwnDevice() *connectOwnDevice {
	return &connectOwnDevice{}
}

var _ WebTreeProtocol = &connectOwnDevice{}

type connectOwnDevice struct {
}

func (c *connectOwnDevice) BaseId() string {
	return "connect-device"
}

func (c *connectOwnDevice) Handlers() map[string]func(network.Stream) {
	return map[string]func(network.Stream){
		"connect": c.connect,
	}
}

func (c *connectOwnDevice) connect(stream network.Stream) {

}
