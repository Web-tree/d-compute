package main

import (
	"github.com/Web-tree/d-compute/network/connectivity"
	"github.com/Web-tree/d-compute/network/interaction"
	"github.com/Web-tree/d-compute/network/interaction/requests/initconnectivity"
	"github.com/Web-tree/d-compute/network/interaction/requests/maininteraction"
	"github.com/Web-tree/d-compute/network/interaction/ui"
	"github.com/Web-tree/d-compute/network/runner"
	"log"
)

func main() {
	conf := interaction.Conf()
	conf.UiConf.UiType = ui.UiCli
	interaction.RunInterface(conf)
	connectionService := connectivity.GetConnectionService(connectivity.Conf())

	if !connectionService.IsRegistered() {
		initConnectivityRequest := initconnectivity.NewInitConnectivityRequest()
		interaction.Inst.ShowRequest(initConnectivityRequest)
		err := initConnectivityRequest.WaitForFulfil()
		if err != nil {
			return
		}
	}

	r := runner.NewRunner(runner.Conf())
	err := r.Run()
	if err != nil {
		log.Panic(err)
	}
	interaction.Inst.ShowRequest(maininteraction.NewMainInteractionRequest(maininteraction.Conf()))

	err = r.WaitTillExit()
	if err != nil {
		return
	}
}
