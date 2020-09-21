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
	ID       string `json:"prod_id"`
	Category string `json:"prod_category"`
	Name     string `json:"prod_name"`
	Price    string `json:"prod_price"`
	Img      string `json:"prod_img"`
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*") // '*' Would normally include a whitelist
}

var db *sql.DB

func main() {
	var err error

	db, err := sql.Open("mysql", "root:supersecretpw@tcp(databases:3306)/products")

	if err != nil {
		panic(err.Error())
	}

	defer db.Close()

	router := mux.NewRouter()

	router.HandleFunc("/products", getProds)

	log.Println("Starting server on Port: 8000")
	log.Fatal(http.ListenAndServe(":8000", router))
}

func getProds(w http.ResponseWriter, r *http.Request) {
	enableCors(&w) // Pointing to the location of response writer

	var products []product

	stmt := "SELECT id, pname, img, price, catergory FROM products"
	rows, err := db.Query(stmt)

	if err != nil {
		panic(err.Error())
	}

	for rows.Next() {
		var product product
		err := rows.Scan(&product.ID, &product.Name, &product.Img, &product.Price, &product.Category)

		if err != nil {
			panic(err.Error())
		}
	}

	// products = append(products, product)

	w.WriteHeader(http.StatusOK)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(products)
}
