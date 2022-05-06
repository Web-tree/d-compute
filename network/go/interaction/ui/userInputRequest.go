package ui

import (
	"fmt"
)

type UserInputRequest interface {
	String(request *userInputRequest) string
	Bool(request *userInputRequest) bool
	Select(message string, options []string) (int, string)
}

func Request(message string, params ...string) *userInputRequest {
	u := &userInputRequest{}
	if len(params) == 0 {
		u.message = message
	} else {
		u.message = fmt.Sprintf(message, params)
	}
	return u
}

type userInputRequest struct {
	message string
}
