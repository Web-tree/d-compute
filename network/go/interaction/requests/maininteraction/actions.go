package maininteraction

import (
	"encoding/base64"
	"fmt"
	"github.com/Web-tree/d-compute/network/interaction/ui"
)

type action struct {
	name     string
	callback func(config *Config, u ui.Ui)
}

var (
	actionLabels []string
	actions      = []action{
		{
			name: "Invite a friend",
			callback: func(config *Config, u ui.Ui) {
				for {
					key := u.AskUserInput().String(ui.Request("Your friend had to send you a public key. Paste it here."))
					invitation, err := config.invitationService.CreateNewInvitation(key, config.connectionService.Status().GetHostAddresses())
					if err == nil {
						u.ShowMessage("Invitation created. Send this invitation link to your friend.")
						u.ShowMessage(base64.StdEncoding.EncodeToString(invitation))
						break
					} else {
						u.ShowMessage("Error with invitation creation")
						u.ShowMessage(err.Error())
						if !u.AskUserInput().Bool(ui.Request("Do you want to try again?")) {
							break
						}
					}
				}
			},
		},
		{
			name: "Show connection addresses",
			callback: func(config *Config, u ui.Ui) {
				status := config.connectionService.Status()
				hostId := status.GetHostId()
				for _, multiaddr := range status.GetHostAddresses() {
					u.ShowMessage(fmt.Sprintf("%s/%s", multiaddr.String(), hostId))
				}
			},
		},
	}
)

func init() {
	for _, a := range actions {
		actionLabels = append(actionLabels, a.name)
	}
}
