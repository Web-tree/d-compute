package invitation

import (
	"bytes"
	"encoding/gob"
)

func init() {
	gob.Register(invitation{})
}

type invitation struct {
	NodeId           string
	ConnectAddresses []string
}

func (i *invitation) toBytes() ([]byte, error) {
	b := bytes.Buffer{}
	err := gob.NewEncoder(&b).Encode(i)
	if err != nil {
		return nil, err
	}
	return b.Bytes(), nil
}
