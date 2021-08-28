package node

import "net"

const (
	ConnectionTypeDirect = iota
	ConnectionTypeStun   = iota
	ConnectionTypeTurn   = iota
)

type KnownNode struct {
	Id                string
	ConnectionType    int
	ConnectionAddress net.Addr
}
