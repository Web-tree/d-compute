package maininteraction

import (
	"github.com/Web-tree/d-compute/network/interaction/requests"
	"github.com/Web-tree/d-compute/network/interaction/ui"
	"sync"
)

func NewMainInteractionRequest(conf *Config) *Request {
	return &Request{
		conf: conf,
	}
}

var _ requests.Request = &Request{}

type Request struct {
	conf *Config
	wg   sync.WaitGroup
	stop bool
}

func (m *Request) WaitForFulfil() error {
	m.wg.Wait()
	return nil
}

func (m *Request) Run(u ui.Ui) {
	for {
		i, _ := u.AskUserInput().Select("Available actions", actionLabels)
		actions[i].callback(m.conf, u)
	}
}

func (m *Request) GetWaitGroup() *sync.WaitGroup {
	return &m.wg
}
