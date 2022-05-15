package main

import (
	"github.com/libp2p/go-libp2p"
	relayv1 "github.com/libp2p/go-libp2p/p2p/protocol/circuitv1/relay"
	"log"
)

func main() {
	// Tell the host to relay connections for other peers (The ability to *use*
	// a relay vs the ability to *be* a relay)
	//transport := libp2p.ChainOptions(
	//	libp2p.Transport(ws.New),
	//)
	h2, err := libp2p.New(
		libp2p.ListenAddrStrings("/ip4/127.0.0.1/tcp/11111/ws"),
		libp2p.DisableRelay(),
		//transport,
	)
	if err != nil {
		log.Printf("Failed to create h2: %v", err)
		return
	}
	_, err = relayv1.NewRelay(h2)
	if err != nil {
		log.Printf("Failed to instantiate h2 relay: %v", err)
		return
	}

	log.Println(h2.ID())
	log.Println(h2.Addrs())
	c := make(chan bool)
	<-c
}
