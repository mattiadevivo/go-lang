package main

import (
	"fmt"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
	"github.com/mattiadevivo/go-lang/database"
	"github.com/mattiadevivo/go-lang/routes"
)

func main() {
	// Load env variables from .env file
	godotenv.Load(".env")

	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s", os.Getenv("MYSQL_USER"), os.Getenv("MYSQL_PASSWORD"), os.Getenv("MYSQL_ADDRESS"), os.Getenv("MYSQL_PORT"), os.Getenv("MYSQL_DBNAME"))
	fmt.Println(dsn)
	database.Connect(dsn)

	app := fiber.New()
	// Needed because url of backend and frontend are different
	app.Use(cors.New(
		cors.Config{
			AllowCredentials: true,
		},
	))
	routes.Setup(app)

	app.Listen(":8000")
}
