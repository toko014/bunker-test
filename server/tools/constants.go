package tools

import (
	"github.com/joho/godotenv"
	"log"
	"os"
)

var port string = ""
var db_url string = ""
var key string = ""

const (
	letterBytes   = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
	letterIdxBits = 6                    // 6 bits to represent a letter index
	letterIdxMask = 1<<letterIdxBits - 1 // All 1-bits, as many as letterIdxBits
	letterIdxMax  = 63 / letterIdxBits   // # of letter indices fitting in 63 bits
	RoomIDLength  = 5
	PlayerLimit   = 15
)

func Init() {
	// Try to load .env file (optional for local dev)
	_ = godotenv.Load(".env")

	port = os.Getenv("PORT")
	if port == "" {
		log.Fatal("PORT must be set")
	}

	db_url = os.Getenv("DB_URL")
	if db_url == "" {
		log.Fatal("DB_URL must be set")
	}

	key = os.Getenv("KEY")
	if key == "" {
		log.Fatal("KEY must be set")
	}
}

func GetPort() string  { return port }
func GetDBUrl() string { return db_url }
func GetKey() string   { return key }
