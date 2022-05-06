package requests

import (
	"github.com/Web-tree/d-compute/network/interaction/ui"
	"sync"
)

type Request interface {
	WaitForFulfil() error
	Run(u ui.Ui)
	GetWaitGroup() *sync.WaitGroup
}
