package main

import (
	"context"
	"errors"
	"fmt"
	"github.com/libp2p/go-libp2p"
	"github.com/libp2p/go-libp2p-core/host"
	"github.com/libp2p/go-libp2p-core/network"
	"github.com/libp2p/go-libp2p-core/peer"
	"github.com/libp2p/go-libp2p-core/peerstore"
	ws "github.com/libp2p/go-ws-transport"
	ma "github.com/multiformats/go-multiaddr"
	"io/ioutil"
	"sync"

	//ws "github.com/libp2p/go-ws-transport"
	"log"
)

func main() {
	//ctx := context.Background()

	transport := libp2p.ChainOptions(
		libp2p.Transport(ws.New),
	)
	//listenAddrs := libp2p.ListenAddrStrings(
	//	"/ip4/0.0.0.0/tcp/0/ws",
	//)

	relay, err := peer.AddrInfoFromString("/ip4/127.0.0.1/tcp/11111/ws/p2p/QmbJkYSiMFKPPLTLr9C5Jwoq3Z2k4CQSHwpFygVSzMibxJ")
	if err != nil {
		panic(err)
	}

	h, err := libp2p.New(
		transport,
		//listenAddrs,
		//libp2p.ListenAddrs(),
		libp2p.EnableRelay(),
		//libp2p.EnableAutoRelay(),
	)
	if err != nil {
		panic(err)
	}
	if err := h.Connect(context.Background(), *relay); err != nil {
		log.Printf("Failed to connect h1 and h2: %v", err)
		return
	}
	log.Println(h.ID())
	log.Println(h.Addrs())

	h.SetStreamHandler("/echo/1.0.0", func(s network.Stream) {
		log.Println("listener received new stream")
		if err := doEcho(s); err != nil {
			log.Println(err)
			s.Reset()
		} else {
			s.Close()
		}
	})

	//h.SetStreamHandler("/webtree/connect-own-device/get-connection-info", func(s network.Stream) {
	//
	//})

	h.SetStreamHandler("/webtree/connect-own-device/connect-to", func(s network.Stream) {

	})

	//target := ""
	target := "QmPfG3a9A7sD7iP67DHbg5TK2NTzfVbV4h6gdiurNAgjmE"
	relayAddr := "QmbJkYSiMFKPPLTLr9C5Jwoq3Z2k4CQSHwpFygVSzMibxJ"

	if target == "" {
		//startListener(h, *listenF, *insecureF)
		// Run until canceled.
		//<-ctx.Done()

	} else {
		relayaddr, err := ma.NewMultiaddr("/p2p/" + relayAddr + "/p2p-circuit/ipfs/" + target)
		if err != nil {
			log.Println(err)
			return
		}

		peerid, err := peer.Decode(target)
		if err != nil {
			log.Fatalln(err)
		}

		targetAddr := peer.AddrInfo{
			ID:    peerid,
			Addrs: []ma.Multiaddr{relayaddr},
		}

		if err := h.Connect(context.Background(), targetAddr); err != nil {
			log.Printf("Failed to connect to target: %v", err)
			return
		}
		s, err := h.NewStream(context.Background(), peerid, "/echo/1.0.0")
		if err != nil {
			log.Println("huh, this should have worked: ", err)
			return
		}
		_, err = s.Write([]byte("Hello, world!\n"))
		if err != nil {
			log.Println(err)
			return
		}

		out, err := ioutil.ReadAll(s)
		if err != nil {
			log.Println(err)
			return
		}

		log.Printf("read reply: %q\n", out)

		//runSender(h, targetF)
	}

	//dstore := dsync.MutexWrap(ds.NewMapDatastore())
	//dht := dht.NewDHT(ctx, h, dstore)
	//// connect to the chosen ipfs nodes
	//routedHost := rhost.Wrap(h, dht)
	//err = bootstrapConnect(ctx, routedHost, IpfsPeers)
	//if err != nil {
	//	panic(err)
	//}
	//log.Printf("Hello World, my hosts ID is %s\n", h.ID())
	//log.Printf("Hello World, my addresses is %s\n", h.Addrs())
	//
	//target := "QmTWm5Lp2SmasdGFRChWiXLCLJ52bR4dmdUbUgEiguPAFE"
	//peerid, err := peer.Decode(target)
	//if err != nil {
	//	log.Fatalln(err)
	//}
	//
	//// peerinfo := peer.AddrInfo{ID: peerid}
	//log.Println("opening stream")
	//// make a new stream from host B to host A
	//// it should be handled on host A by the handler we set above because
	//// we use the same /echo/1.0.0 protocol
	//s, err := routedHost.NewStream(context.Background(), peerid, "/echo/1.0.0")
	//
	//if err != nil {
	//	log.Fatalln(err)
	//}
	//
	//_, err = s.Write([]byte("Hello, world!\n"))
	//if err != nil {
	//	log.Fatalln(err)
	//}
	//
	//out, err := ioutil.ReadAll(s)
	//if err != nil {
	//	log.Fatalln(err)
	//}
	//
	//log.Printf("read reply: %q\n", out)

	run := make(chan bool)
	<-run
}

func bootstrapConnect(ctx context.Context, ph host.Host, peers []peer.AddrInfo) error {
	if len(peers) < 1 {
		return errors.New("not enough bootstrap peers")
	}

	errs := make(chan error, len(peers))
	var wg sync.WaitGroup
	for _, p := range peers {

		// performed asynchronously because when performed synchronously, if
		// one `Connect` call hangs, subsequent calls are more likely to
		// fail/abort due to an expiring context.
		// Also, performed asynchronously for dial speed.

		wg.Add(1)
		go func(p peer.AddrInfo) {
			defer wg.Done()
			defer log.Println(ctx, "bootstrapDial", ph.ID(), p.ID)
			log.Printf("%s bootstrapping to %s", ph.ID(), p.ID)

			ph.Peerstore().AddAddrs(p.ID, p.Addrs, peerstore.PermanentAddrTTL)
			if err := ph.Connect(ctx, p); err != nil {
				log.Println(ctx, "bootstrapDialFailed", p.ID)
				log.Printf("failed to bootstrap with %v: %s", p.ID, err)
				errs <- err
				return
			}
			log.Println(ctx, "bootstrapDialSuccess", p.ID)
			log.Printf("bootstrapped with %v", p.ID)
		}(p)
	}
	wg.Wait()

	// our failure condition is when no connection attempt succeeded.
	// So drain the errs channel, counting the results.
	close(errs)
	count := 0
	var err error
	for err = range errs {
		if err != nil {
			count++
		}
	}
	if count == len(peers) {
		return fmt.Errorf("failed to bootstrap. %s", err)
	}
	return nil
}
