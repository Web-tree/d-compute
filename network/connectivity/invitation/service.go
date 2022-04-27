package invitation

import (
	"bytes"
	"encoding/base64"
	"encoding/gob"
	"github.com/google/uuid"
	"github.com/libp2p/go-libp2p-core/crypto"
	"github.com/multiformats/go-multiaddr"
	"github.com/syndtr/goleveldb/leveldb/errors"
)

var AlreadyExistsError = errors.New("Invitation for this key already exists")

type Service interface {
	CreateNewInvitation(publicKey string, addresses []multiaddr.Multiaddr) ([]byte, error)
	DecodeInvitation(invitation string) (Invitation, error)
	GetInvitationByPublicKey(key []byte) (Invitation, error)
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

func (s *service) GetInvitationByPublicKey(key []byte) (Invitation, error) {
	invitationKey := s.getInvitationKey(key)
	invitationBytes, err := s.conf.Db.Get(invitationKey)
	if err != nil {
		return nil, err
	}
	var inv Invitation
	err = gob.NewDecoder(bytes.NewReader(invitationBytes)).Decode(&inv)
	if err != nil {
		return nil, err
	}

	return inv, nil
}

func (s *service) CreateNewInvitation(publicKey string, addresses []multiaddr.Multiaddr) ([]byte, error) {
	key, err := base64.StdEncoding.DecodeString(publicKey)
	if err != nil {
		return nil, err
	}
	pubKey, err := crypto.UnmarshalPublicKey([]byte(publicKey))
	if err != nil {
		return nil, err
	}

	invitationKey := s.getInvitationKey(key)
	has, err := s.conf.Db.Has(invitationKey)
	if err != nil {
		return nil, err
	}
	if has {
		return nil, AlreadyExistsError
	}

	var stringAddresses []string
	for _, address := range addresses {
		stringAddresses = append(stringAddresses, address.String())
	}
	inv := &sendingInvitation{
		invite:           invite{InviteId: uuid.NewString()},
		ConnectAddresses: stringAddresses,
	}

	b := bytes.Buffer{}
	err = gob.NewEncoder(&b).Encode(inv)
	if err != nil {
		return nil, err
	}
	err = s.conf.Db.Put(invitationKey, b.Bytes())
	if err != nil {
		return nil, err
	}
	return s.encryptInvitation(inv, pubKey)
}

func (s *service) DecodeInvitation(invStr string) (Invitation, error) {
	keyPair, err := s.conf.KeyService.GetExisting()
	if err != nil {
		return nil, err
	}
	invitation, err := s.decryptInvitation(invStr, keyPair.PrivKey)
	if err != nil {
		return nil, err
	}
	return invitation, nil
}

func (s *service) getInvitationKey(key []byte) []byte {
	return append(s.keyPrefix, key...)
}

func (s *service) encryptInvitation(inv *sendingInvitation, key crypto.PubKey) ([]byte, error) {
	b := &bytes.Buffer{}
	err := gob.NewEncoder(b).Encode(inv)
	if err != nil {
		return nil, err
	}
	return s.conf.KeyService.EncodeWithPublicKey(b.Bytes(), key)
}

func (s service) decryptInvitation(invStr string, privKey crypto.PrivKey) (inv *sendingInvitation, err error) {
	decodedInvitation, err := s.conf.KeyService.DecodeWithPrivateKey([]byte(invStr), privKey)
	if err != nil {
		return
	}
	err = gob.NewDecoder(bytes.NewReader(decodedInvitation)).Decode(inv)
	return
}
