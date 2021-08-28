package interaction

import (
	"github.com/Web-tree/d-compute/network/interaction/requests"
	"github.com/Web-tree/d-compute/network/interaction/ui"
)

type ClientInteraction interface {
	ShowRequest(request requests.Request)
}

type clientInteraction struct {
	conf *Config
	ui   ui.Ui
}

func (c *clientInteraction) ShowRequest(request requests.Request) {
	request.GetWaitGroup().Add(1)
	go func() {
		request.Run(c.ui)
		request.GetWaitGroup().Done()
	}()
}
