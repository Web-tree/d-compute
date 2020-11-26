package main

import (
	"log"
	"math/rand"
	"os"
)

var maxChunkSize int64 = 10 * 1024 * 1024

type Schema struct {
}

func Disasemble(file *os.File) Schema {
	stat, err := file.Stat()
	if err != nil {
		log.Panic(err)
	}

	size := stat.Size()
	if size < maxChunkSize {
		b := make([]byte, size)
		file.Read(b)
		println(string(b))

		r := rand.New(rand.NewSource(112))
		r.Shuffle(int(size), func(i, j int) { b[i], b[j] = b[j], b[i] })
		println(string(b))
	}
	return Schema{}
}

func Assemble(schema Schema) {

}

func main() {
	file, err := os.OpenFile("tst/qwe.txt", os.O_RDONLY, os.ModePerm)
	if err != nil {
		panic(err)
	}
	Disasemble(file)
}
