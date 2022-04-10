# GoLang JWT Authentication

Youtube video: https://www.youtube.com/watch?v=d4Y2DkKbxM0

Simple Golang backend application using [gofiber](https://github.com/gofiber/fiber), a Node.js Express inspired web framework for Go.

This backend application will come together whit a simple React frontend. 

Go modules used:
- gorm.io/gorm
- github.com/gofiber/fiber/v2
- gorm.io/driver/mysql
- gorm.io/gorm
- golang.org/x/crypto/bcrypt
- 

## Run

```shell
go mod init github.com/mattiadevivo/go-lang
go mod tidy # equivalent to npm install in nodejs
go run main.go
```

## React Frontend

The go web api is shipped with a simple frontend written using React and Typescript.


```shell
npx create-react-app react-auth --template typescript
```
> If you've previously installed `create-react-app` globally via `npm install -g create-react-app`, we recommend you uninstall the package using `npm uninstall -g create-react-app` or `yarn global remove create-react-app` to ensure that `npx` always uses the latest version.

### Run 

You can test the application locally with:
```shell
npm i # install dependencies
REACT_APP_BACKEND_URL=http://localhost:8000 npm start
```


## Reminder

Remind that shell variables are not exported to child processes by default, so you need to export them by using `export MYSQL_PORT=3306` to retrieve them by using `os.Getenv("MYSQL_PORT")`