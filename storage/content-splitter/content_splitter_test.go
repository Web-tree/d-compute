package content_splitter

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

const tstString = "my test string"

func TestSplitBytes_shouldEncodeBytes(t *testing.T) {
	t.Parallel()

	b := []byte(tstString)
	called := false
	assert.Nil(t, SplitBytes(b, Options{}, func(chunk Chunk) {
		assert.NotEqualf(t, []byte(tstString), chunk.bytes, "'%s' should not be equal '%s'", b, chunk.bytes)
		called = true
	}))
	assert.True(t, called)
}

func TestSplitBytes_shouldHaveDifferentResultForDifferentPasswords(t *testing.T) {
	t.Parallel()

	var chunk1 Chunk
	_ = SplitBytes([]byte(tstString), Options{
		password: "pwd1",
	}, func(chunk Chunk) {
		chunk1 = chunk
	})
	assert.NotNil(t, chunk1)

	called := false
	_ = SplitBytes([]byte(tstString), Options{
		password: "pwd2",
	}, func(chunk2 Chunk) {
		assert.NotEqual(t, chunk1.bytes, chunk2.bytes)
		called = true
	})
	assert.True(t, called)
}

func TestSplitBytes_shouldCreateMultipleChunks(t *testing.T) {
	t.Parallel()

	bytes := []byte{11, 22, 33, 44, 55}
	var chunks []Chunk
	_ = SplitBytes(bytes, Options{
		minChunks: 3,
	}, func(chunk Chunk) {
		chunks = append(chunks, chunk)
	})
	assert.Len(t, chunks, 3)
}
