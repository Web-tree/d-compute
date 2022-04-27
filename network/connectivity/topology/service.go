package topology

import (
	"bytes"
	"encoding/gob"
	"github.com/Web-tree/d-compute/network/connectivity/wtnode"
)

func init() {
	gob.Register(Topology{})
}

type Service interface {
	GetTopology() (*Topology, error)
	GetDirectConnections() []*wtnode.WebtreeNode
	IsDirectConnectTo(node *wtnode.WebtreeNode) bool
	HasConnectionTo(node *wtnode.WebtreeNode) bool
	GetBestMatchNodes(min MinConnectedNodes, max MaxConnectedNodes) []*wtnode.WebtreeNode
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
	err = s.conf.Db.Put(s.topologyKey, b.Bytes())
	if err != nil {
		return err
	}
	return nil
}

func (s *service) GetDirectConnections() []*wtnode.WebtreeNode {
	panic("implement me")
}

func (s *service) IsDirectConnectTo(node *wtnode.WebtreeNode) bool {
	panic("implement me")
}

func (s *service) HasConnectionTo(node *wtnode.WebtreeNode) bool {
	panic("implement me")
}

func (s *service) GetBestMatchNodes(min MinConnectedNodes, max MaxConnectedNodes) []*wtnode.WebtreeNode {
	panic("implement me")
}
func (s *service) GetTopology() (*Topology, error) {
	tpBytes, err := s.conf.Db.Get(s.topologyKey)
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
