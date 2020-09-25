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
	// go value	  datatype   assigning the field name in json file
	ID       string `json:"id"`
	Name     string `json:"pname"`
	Img      string `json:"img"`
	Price    string `json:"price"`
	Category string `json:"category"`
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

var db *sql.DB

func main() {

	var err error
	db, err = sql.Open("mysql", "root:supersecretpw@tcp(products:3306)/products")

	if err != nil {
		panic(err.Error())
	}

	defer db.Close()

	router := mux.NewRouter()

	router.HandleFunc("/products", fetchProducts).Methods("GET")

	log.Println("listening on port 8000")

	log.Fatal(http.ListenAndServe(":8000", router))
}

func fetchProducts(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)

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
			panic(err.Error())
		}

		products = append(products, product)
	}

	log.Println(products)

	// sets status 200
	w.WriteHeader(http.StatusOK)
	// lets browser know we are sending json text
	w.Header().Set("Content-Type", "application/json")
	// converts products slice into json
	json.NewEncoder(w).Encode(products)
}
