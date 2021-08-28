package ui

import (
	"bufio"
	"fmt"
	"github.com/manifoldco/promptui"
	"github.com/syndtr/goleveldb/leveldb/errors"
	"os"
	"strings"
)

var _ Ui = &cli{}

type cli struct {
	cli *cliInteraction
}

func (c *cli) Interrupt(message string) {
	c.ShowMessage(message)
	panic(message)
}

func (c *cli) ShowMessage(message string) {
	c.cli.printMessage(message)
}

func (c *cli) AskUserInput() UserInputRequest {
	return &userInputRequestCli{
		u: c,
	}
}

var _ UserInputRequest = &userInputRequestCli{}

type userInputRequestCli struct {
	u Ui
}

func (u *userInputRequestCli) String(request *userInputRequest) string {
	prompt := promptui.Prompt{
		Label: request.message,
	}
	return u.runPrompt(prompt)
}

func (u *userInputRequestCli) Bool(request *userInputRequest) bool {
	validate := func(input string) error {
		input = strings.ToLower(input)
		switch input {
		case "y", "yes", "n", "no":
			return nil
		}
		return errors.New("Possible values: y/yes, n/no")
	}
	prompt := promptui.Prompt{
		Label:    request.message,
		Validate: validate,
	}
	answer := u.runPrompt(prompt)

	switch strings.ToLower(answer) {
	case "y", "yes":
		return true
	}
	return false
}

func (u *userInputRequestCli) Select(message string, options []string) (index int, answer string) {
	prompt := promptui.Select{
		Label: message,
		Items: options,
	}
	for {
		var err error
		index, answer, err = prompt.Run()
		if err == nil {
			break
		}
		if err.Error() == "^D" || err.Error() == "^C" {
			u.u.Interrupt("Exit command received")
		}
	}
	return
}

func (u *userInputRequestCli) runPrompt(p promptui.Prompt) string {
	var answer string
	for {
		var err error
		answer, err = p.Run()
		if err == nil {
			break
		}
		if err.Error() == "^D" || err.Error() == "^C" {
			u.u.Interrupt("Exit command received")
		}
	}
	return answer
}

type cliInteraction struct {
}

func (u *cliInteraction) readLine(request *userInputRequest) string {
	u.printMessage(request.message)

	u.printMessage("-> ")
	reader := bufio.NewReader(os.Stdin)
	text, _ := reader.ReadString('\n')
	text = strings.Replace(text, "\n", "", -1)
	return text
}

//func (u *cliInteraction) readBool(request *userInputRequest) bool {
//
//
//	u.printMessage(request.message)
//	u.printMessage("(y/n)")
//	reader := bufio.NewReader(os.Stdin)
//	text, _ := reader.ReadString('\n')
//	text = strings.Replace(text, "\n", "", -1)
//	return text
//}
func (u cliInteraction) printMessage(message string) {
	fmt.Println(message)
}
