FROM golang:1.14

WORKDIR /go/src/app
COPY . .

RUN go get -d -v ./...
RUN go install -v ./...
RUN go get -u github.com/go-sql-driver/mysql
RUN go get -u github.com/gorilla/mux

CMD ["app"]