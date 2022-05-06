package interaction

import "github.com/Web-tree/d-compute/network/interaction/ui"

type Config struct {
	UiConf *ui.Config
}

func Conf() *Config {
	return &Config{
		UiConf: ui.Conf(),
	}
}
