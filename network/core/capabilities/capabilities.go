package capabilities

type Capabilities interface {
	HasCapability(capability string)
}
