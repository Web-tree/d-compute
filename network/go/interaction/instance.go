package interaction

import "github.com/Web-tree/d-compute/network/interaction/ui"

var Inst ClientInteraction

func RunInterface(config *Config) {
	Inst = &clientInteraction{
		conf: config,
		ui:   ui.GetUi(config.UiConf.UiType),
	}
}
