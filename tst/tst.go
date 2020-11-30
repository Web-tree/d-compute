package main

import (
	"log"
	"math/rand"
	"os"
)

const maxChunkSize int64 = 65535

type Schema struct {
}

func Disasemble(seed int64, file *os.File) []byte {
	stat, err := file.Stat()
	if err != nil {
		log.Panic(err)
	}

	size := stat.Size()
	b := make([]byte, size)
	if size < maxChunkSize {
		file.Read(b)
		println(string(b))

		r := rand.New(rand.NewSource(seed))

		shuffleBytes(&b, randNumbers(r, int(size)))
	}
	return b
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

func Assemble(seed int64, bytes []byte) []byte {
	r := rand.New(rand.NewSource(seed))
	numbers := randNumbers(r, len(bytes))
	reverseShuffle(&bytes, numbers)
	return bytes
}

func main() {
	file, err := os.OpenFile("tst/qwe.txt", os.O_RDONLY, os.ModePerm)
	if err != nil {
		panic(err)
	}
	seed := int64(111)

	println(string(Assemble(seed, Disasemble(seed, file))))
}

func reverse(numbers []uint16) {
	for i := 0; i < len(numbers)/2; i++ {
		j := len(numbers) - i - 1
		numbers[i], numbers[j] = numbers[j], numbers[i]
	}
}
