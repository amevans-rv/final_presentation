package main

import (
	"database/sql"
	"encoding/json"
	"log"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
)

type product struct {
	ID       string `json:"id"`
	Name     string `json:"pname"`
	Img      string `json:"img"`
	Price    string `json:"price"`
	Category string `json:"category"`
}

func main() {
	router := mux.NewRouter()

	router.HandleFunc("/products", fetchProducts).Methods("GET")

	log.Println("listening on port 8000")

	log.Fatal(http.ListenAndServe(":8000", router))
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

func fetchProducts(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)

	db, err := sql.Open("mysql", "root:supersecretpw@tcp(database:3306)/products")
	if err != nil {
		panic(err.Error())
	}

	defer db.Close()

	var products []product

	stmt := "SELECT id, pname, img, price, category FROM products"
	rows, err := db.Query(stmt)
	if err != nil {
		panic(err.Error())
	}

	for rows.Next() {
		var product product

		err := rows.Scan(&product.ID, &product.Name, &product.Img, &product.Price, &product.Category)
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
		}

		products = append(products, product)
	}

	log.Println("Products returned from DB")

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(products)
}
