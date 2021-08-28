package keys

import "github.com/libp2p/go-libp2p-core/crypto"

type KeyPair struct {
	PubKey  crypto.PubKey
	PrivKey crypto.PrivKey
}
