package content_splitter

import (
	"crypto/sha512"
	"encoding/binary"
	"math"
	"math/rand"
	"os"
)

const maxChunkSize int = math.MaxUint16 //65535

func SplitFile(file *os.File, options Options, callback func(chunk Chunk)) error {
	stat, err := file.Stat()
	if err != nil {
		return err
	}
	b := make([]byte, stat.Size())
	return SplitBytes(b, options, callback)
}

func SplitBytes(bytes []byte, options Options, callback func(chunk Chunk)) error {
	bytesLen := len(bytes)
	chunkAmount := int(math.Max(float64(options.minChunks), math.Ceil(float64(bytesLen)/float64(maxChunkSize))))

	r := rand.New(rand.NewSource(stringToInt64Hash(options.password)))
	shuffleBytes(&bytes, randNumbers(r, bytesLen))
	chunkSize := bytesLen / chunkAmount
	for i := 0; i < chunkAmount; i++ {
		from := i * chunkSize
		to := (i + 1) * chunkSize
		chunk := Chunk{
			num:   1,
			bytes: bytes[from:to],
		}
		callback(chunk)
	}
	return nil
}

func stringToInt64Hash(s string) int64 {
	return int64(
		binary.BigEndian.Uint64(
			sha512.New().Sum([]byte(s)),
		),
	)
}

func shuffleBytes(b *[]byte, numbers []uint16) {
	for i, j := range numbers {
		(*b)[i], (*b)[j] = (*b)[j], (*b)[i]
	}
}

func reverseShuffle(b *[]byte, numbers []uint16) {
	for i := len(numbers) - 1; i >= 0; i-- {
		j := numbers[i]
		(*b)[i], (*b)[j] = (*b)[j], (*b)[i]
	}
}

func randNumbers(r *rand.Rand, size int) []uint16 {
	min := 0
	max := size
	result := make([]uint16, size)
	for i := 0; i < max; i++ {
		result[i] = uint16(r.Intn(max-min) + min)
	}
	return result
}

type Chunk struct {
	num   int
	bytes []byte
}

type Options struct {
	password  string
	minChunks int
}
