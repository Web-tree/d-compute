package keys

import (
	"crypto/rand"
	"encoding/gob"
	"github.com/libp2p/go-libp2p-core/crypto"
)

type Service interface {
	KeysExists() (bool, error)
	GenerateNew() (*KeyPair, error)
	GetExisting() (*KeyPair, error)
	ResetKeys() error
	AddPrivateKeyAsString(key string)
	ConnectByInvitationLink(invitationLink string) error
}

func NewKeysService(config *Config) Service {
	gob.Register(crypto.RsaPublicKey{})
	return &service{
		conf: config,
	}
}

type service struct {
	conf *Config
}

func (s *service) ConnectByInvitationLink(link string) error {
	panic("implement me")
}

func (s *service) AddPrivateKeyAsString(key string) {
	panic("implement me")
}

func (s *service) ResetKeys() error {
	return s.conf.db.Delete(s.conf.dbKey)
}

func (s *service) KeysExists() (bool, error) {
	return s.conf.db.Has(s.conf.dbKey)
}

func (s *service) GenerateNew() (*KeyPair, error) {
	priv, pub, err := crypto.GenerateKeyPairWithReader(crypto.RSA, 2048, rand.Reader)
	if err != nil {
		return nil, err
	}
	pair := &KeyPair{
		PubKey:  pub,
		PrivKey: priv,
	}
	err = s.persist(pair)
	if err != nil {
		return nil, err
	}

	return pair, nil
}

func (s *service) GetExisting() (*KeyPair, error) {
	b, err := s.conf.db.Get(s.conf.dbKey)
	if err != nil {
		return nil, err
	}
	key, err := crypto.UnmarshalPrivateKey(b)
	if err != nil {
		return nil, err
	}
	return &KeyPair{
		PubKey:  key.GetPublic(),
		PrivKey: key,
	}, nil
}

func (s *service) persist(pair *KeyPair) error {
	raw, err := pair.PrivKey.Bytes()
	if err != nil {
		return err
	}
	err = s.conf.db.Put(s.conf.dbKey, raw)
	if err != nil {
		return err
	}
	return nil
}
