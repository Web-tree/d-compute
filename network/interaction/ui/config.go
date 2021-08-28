package ui

type UiType int

const (
	UiAuto UiType = iota
	UiCli         = iota
	UiGui         = iota
	UiNone        = iota
)

type Config struct {
	UiType UiType
}

func Conf() *Config {
	return &Config{}
}
