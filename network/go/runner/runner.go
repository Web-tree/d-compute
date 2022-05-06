package runner

import (
	"github.com/Web-tree/d-compute/network/connectivity"
	"sync"
)

type Runner interface {
	Run() error
	WaitTillExit() error
	Stop()
}

func newRunner(connSvc connectivity.ConnectionService) Runner {
	return &runner{
		connectionService: connSvc,
	}
}

type runner struct {
	connectionService connectivity.ConnectionService
	wg                sync.WaitGroup
	err               error
}

func (r *runner) WaitTillExit() error {
	r.wg.Wait()
	return r.err
}

func (r *runner) Stop() {
	r.err = r.connectionService.Disconnect()
	r.wg.Done()
}

func (r *runner) Run() error {
	if err := r.connectionService.Connect(); err != nil {
		return err
	}
	r.wg.Add(1)
	return nil
}
