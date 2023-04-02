package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, world!")
	})

	fmt.Println("Starting server on port 8081...")
	if err := http.ListenAndServe(":8081", nil); err != nil {
		panic(err)
	}
}
