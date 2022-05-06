package initconnectivity

import (
	"encoding/base64"
	"fmt"
	"github.com/Web-tree/d-compute/network/connectivity"
	"github.com/Web-tree/d-compute/network/interaction/requests"
	"github.com/Web-tree/d-compute/network/interaction/ui"
	"github.com/Web-tree/d-compute/network/keys"
	"sync"
)

func NewInitConnectivityRequest() *InitConnectivityRequest {
	return &InitConnectivityRequest{
		wg:             sync.WaitGroup{},
		keysService:    keys.NewKeysService(keys.Conf()),
		connectService: connectivity.Initialize(),
	}
}

var _ requests.Request = &InitConnectivityRequest{}

type InitConnectivityRequest struct {
	wg             sync.WaitGroup
	keysService    keys.Service
	err            error
	connectService connectivity.ConnectionService
}

func (i *InitConnectivityRequest) GetWaitGroup() *sync.WaitGroup {
	return &i.wg
}

func (i *InitConnectivityRequest) Run(u ui.Ui) {
	if u.AskUserInput().Bool(ui.Request("Do you have a friend who can invite you? (WARNING: Don't accept invitations from people you don't know good, it can be scam!)")) {
		var keyPair *keys.KeyPair
		exists, err := i.keysService.KeysExists()
		if err != nil {
			i.handleError(u, err)
			return
		}
		if !exists {
			if u.AskUserInput().Bool(ui.Request("You don't have keys yet. Do you want to generate one? (or enter existing key)")) {
				keyPair, err = i.keysService.GenerateNew()
				if err != nil {
					i.handleError(u, err)
					return
				}
			} else {
				s := u.AskUserInput().String(ui.Request("Enter existing private key:"))
				i.keysService.AddPrivateKeyAsString(s)
			}
		} else {
			keyPair, err = i.keysService.GetExisting()
			if err != nil {
				i.handleError(u, err)
				return
			}
		}
		pubKeyBytes, err := keyPair.PubKey.Bytes()
		if err != nil {
			i.handleError(u, err)
			return
		}
		u.ShowMessage(fmt.Sprintf("Send your public key to your friend: %s", base64.StdEncoding.EncodeToString(pubKeyBytes)))
		s := u.AskUserInput().String(ui.Request("Paste invitation string your friend send you"))
		err = i.connectService.ConnectByInvitationLink(s)
		if err != nil {
			i.handleError(u, err)
			return
		}
	} else if u.AskUserInput().Bool(ui.Request("Do you want to run your own test network?")) {
		err := i.connectService.InitOwnNetwork()
		if err != nil {
			i.handleError(u, err)
			return
		}
	} else {
		u.ShowMessage("There is no way to join the network without an invitation. Please wait until anyone from your friends will invite you.")
	}
}

func (i *InitConnectivityRequest) WaitForFulfil() error {
	i.wg.Wait()
	return i.err
}

func (i *InitConnectivityRequest) handleError(u ui.Ui, err error) {
	i.err = err
	u.ShowMessage(err.Error())
}
