package runner

import "sync"

type Runner interface {
	Run() error
	WaitTillExit() error
	Stop()
}

func NewRunner(config *Config) Runner {
	return &runner{conf: config}
}

type runner struct {
	conf *Config
	wg   sync.WaitGroup
	err  error
}

func (r *runner) WaitTillExit() error {
	r.wg.Wait()
	return r.err
}

func (r *runner) Stop() {
	r.err = r.conf.connectionService.Disconnect()
	r.wg.Done()
}

func (r *runner) Run() error {
	if err := r.conf.connectionService.Connect(); err != nil {
		return err
	}
	r.wg.Add(1)
	return nil
}
