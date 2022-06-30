package main

import (
	"github.com/Web-tree/d-compute/network/core/wtprotocol"
	"syscall/js"
)

var webtree = map[string]map[string]func(js.Value, []js.Value) interface{}{
	"wtprotocol": {
		"connectionStatus": connectionStatus,
	},
}

func main() {
	wt := WebTree{}
	js.Global().Set("WebTree", js.Global().Get("Object").New())
	js.Global().Get("WebTree").Set("add", js.FuncOf(wt.addFunction))
	js.Global().Get("WebTree").Set("connectionStatus", js.FuncOf(connectionStatus))
	wtprotocol.NewConnectOwnDevice()

	run := make(chan bool)
	<-run
}

type WebTree struct {
}

func (*WebTree) addFunction(this js.Value, p []js.Value) interface{} {
	sum := p[0].Int() + p[1].Int()
	return js.ValueOf(sum)
}

func connectionStatus(this js.Value, p []js.Value) interface{} {
	status, err := wtprotocol.GetConnectionStatus()
	if err != nil {
		return err
	}
	return status
}
