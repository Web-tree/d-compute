package wtprotocol

import "github.com/libp2p/go-libp2p-core/network"

type WebTreeProtocol interface {
	BaseId() string
	Handlers() map[string]func(network.Stream)
}
