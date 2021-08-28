package topology

import (
	"bytes"
	"encoding/gob"
	"github.com/onsi/gomega/matchers/support/goraph/node"
)

func init() {
	gob.Register(Topology{})
}

type Service interface {
	GetTopology() (*Topology, error)
	GetDirectConnections() []*node.Node
	IsDirectConnectTo(node *node.Node) bool
	HasConnectionTo(node *node.Node) bool
	GetBestMatchNodes(min int, max int) []*node.Node
	SaveTopology(t *Topology) error
}

func NewService(conf *config) Service {
	return &service{
		conf: conf,
	}
}

var _ Service = &service{}

type service struct {
	conf        *config
	topologyKey []byte
}

func (s *service) SaveTopology(tp *Topology) error {
	b := bytes.Buffer{}
	err := gob.NewEncoder(&b).Encode(tp)
	if err != nil {
		return err
	}
	err = s.conf.db.Put(s.topologyKey, b.Bytes())
	if err != nil {
		return err
	}
	return nil
}

func (s *service) GetDirectConnections() []*node.Node {
	panic("implement me")
}

func (s *service) IsDirectConnectTo(node *node.Node) bool {
	panic("implement me")
}

func (s *service) HasConnectionTo(node *node.Node) bool {
	panic("implement me")
}

func (s *service) GetBestMatchNodes(min int, max int) []*node.Node {
	panic("implement me")
}
func (s *service) GetTopology() (*Topology, error) {
	tpBytes, err := s.conf.db.Get(s.topologyKey)
	if err != nil {
		return nil, err
	}
	var t Topology
	err = gob.NewDecoder(bytes.NewReader(tpBytes)).Decode(&t)
	if err != nil {
		return nil, err
	}
	return &t, nil
}
