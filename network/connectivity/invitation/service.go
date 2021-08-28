package invitation

import (
	"crypto/x509"
	"encoding/base64"
	"github.com/syndtr/goleveldb/leveldb/errors"
)

var AlreadyExistsError = errors.New("Invitation for this key already exists")

type Service interface {
	CreateNewInvitation(publicKey string) ([]byte, error)
}

func NewService(conf *config) Service {
	return &service{
		conf:      conf,
		keyPrefix: []byte("invitations/"),
	}
}

var _ Service = &service{}

type service struct {
	conf      *config
	keyPrefix []byte
}

func (s *service) CreateNewInvitation(publicKey string) ([]byte, error) {
	key, err := base64.StdEncoding.DecodeString(publicKey)
	if err != nil {
		return nil, err
	}
	_, err = x509.ParsePKIXPublicKey(key)
	if err != nil {
		return nil, err
	}

	invitationKey := s.getInvitationKey(key)
	has, err := s.conf.db.Has(invitationKey)
	if err != nil {
		return nil, err
	}
	if has {
		return nil, AlreadyExistsError
	}

	addresses := s.conf.connectionService.Status().GetHostAddresses()
	var stringAddresses []string
	for _, address := range addresses {
		stringAddresses = append(stringAddresses, address.String())
	}
	inv := &invitation{
		NodeId:           s.conf.connectionService.Status().GetHostId(),
		ConnectAddresses: stringAddresses,
	}

	bytes, err := inv.toBytes()
	if err != nil {
		return nil, err
	}
	return bytes, nil
}

func (s *service) getInvitationKey(key []byte) []byte {
	return append(s.keyPrefix, key...)
}
