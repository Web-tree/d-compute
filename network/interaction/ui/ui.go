package ui

type Ui interface {
	AskUserInput() UserInputRequest
	ShowMessage(message string)
	Interrupt(reason string)
}

func GetUi(uiType UiType) Ui {
	switch uiType {
	case UiAuto:
		panic("implement me")
	case UiGui:
		panic("implement me")
	case UiCli:
		return &cli{
			cli: &cliInteraction{},
		}
	case UiNone:
		panic("implement me")
	}
	panic("uiType not implemented")
}
