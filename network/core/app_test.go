package core

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestNewApp(t *testing.T) {
	t.Run("basic", func(t *testing.T) {
		t.Run("should be able to create app", func(t *testing.T) {
			newApp := NewApp(Config{})
			assert.NotNil(t, newApp)
		})
	})
}
