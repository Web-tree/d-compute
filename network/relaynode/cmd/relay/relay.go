package main

import "github.com/Web-tree/d-compute/network/relaynode"

func main() {
	// Tell the host to relaynode connections for other peers (The ability to *use*
	// a relaynode vs the ability to *be* a relaynode)
	//transport := libp2p.ChainOptions(
	//	libp2p.Transport(ws.New),
	//)
	relaynode.RunRelayNode("127.0.0.1", 11111)
}
