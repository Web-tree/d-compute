package keys

import (
	"crypto/rand"
	"crypto/rsa"
	"crypto/sha512"
	"encoding/gob"
	"github.com/libp2p/go-libp2p-core/crypto"
	"github.com/syndtr/goleveldb/leveldb/errors"
)

type Service interface {
	KeysExists() (bool, error)
	GenerateNew() (*KeyPair, error)
	GetExisting() (*KeyPair, error)
	ResetKeys() error
	AddPrivateKeyAsString(key string)
	EncodeWithPublicKey(content []byte, pub crypto.PubKey) ([]byte, error)
	DecodeWithPrivateKey(content []byte, priv crypto.PrivKey) ([]byte, error)
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

func (s *service) DecodeWithPrivateKey(content []byte, priv crypto.PrivKey) ([]byte, error) {
	stdPrivKey, err := crypto.PrivKeyToStdKey(priv)
	if err != nil {
		return nil, err
	}

	if key, ok := stdPrivKey.(*rsa.PrivateKey); ok {
		return s.decryptWithRsaPrivateKey(content, key)
	} else {
		return nil, errors.New("RSA keys supported only")
	}
}

func (s *service) EncodeWithPublicKey(content []byte, pub crypto.PubKey) ([]byte, error) {
	rsaPubKey, err := crypto.PubKeyToStdKey(pub)
	if err != nil {
		return nil, err
	}

	if key, ok := rsaPubKey.(*rsa.PublicKey); ok {
		return s.encryptWithRsaPublicKey(content, key)
	} else {
		return nil, errors.New("RSA keys supported only")
	}
}

func (s *service) encryptWithRsaPublicKey(msg []byte, pub *rsa.PublicKey) ([]byte, error) {
	hash := sha512.New()
	ciphertext, err := rsa.EncryptOAEP(hash, rand.Reader, pub, msg, nil)
	if err != nil {
		return nil, err
	}
	return ciphertext, nil
}

func (s *service) decryptWithRsaPrivateKey(ciphertext []byte, priv *rsa.PrivateKey) ([]byte, error) {
	hash := sha512.New()
	decrypted, err := rsa.DecryptOAEP(hash, rand.Reader, priv, ciphertext, nil)
	if err != nil {
		return nil, err
	}
	return decrypted, nil
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
