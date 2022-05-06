package invitation

import (
	"bytes"
	"encoding/gob"
	"github.com/Web-tree/d-compute/network/connectivity/wtnode"
)

func init() {
	gob.Register(sendingInvitation{})
	gob.Register(persistInvitation{})
	gob.Register(Accept{})
}

type Invitation interface {
	GetInvitationId() string
	GetConnectionAddresses() []string
}

type invite struct {
	InviteId string
}

func (i *invite) toBytes() ([]byte, error) {
	b := bytes.Buffer{}
	err := gob.NewEncoder(&b).Encode(i)
	if err != nil {
		return nil, err
	}
	return b.Bytes(), nil
}

var _ Invitation = &sendingInvitation{}

type sendingInvitation struct {
	invite
	ConnectAddresses []string
}

func (s *sendingInvitation) GetInvitationId() string {
	return s.InviteId
}

func (s *sendingInvitation) GetConnectionAddresses() []string {
	return s.ConnectAddresses
}

type persistInvitation struct {
	invite
	invitedNode *wtnode.WebtreeNode
}

type Accept struct {
}

func (a Accept) Reset() {
	panic("implement me")
}

func (a Accept) String() string {
	panic("implement me")
}

func (a Accept) ProtoMessage() {

}
