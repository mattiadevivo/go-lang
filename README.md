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

## Reminder

Remind that shell variables are not exported to child processes by default, so you need to export them by using `export MYSQL_PORT=3306` to retrieve them by using `os.Getenv("MYSQL_PORT")`

# INIT

Start a new go project with the following command:

```sh
go mod init example.com/hello
```

# MOD

`go.mod` contains all the packages used by the project in the following format `repository versiom`.

Run ```go mod tidy``` to make go looking for all the dependencies and create and up-to-date `go.sum` used for
authenticate the modules.

# RUN 

```go run .``` or ```go run hello.go```

# DATA TYPES

- **Go slice**: is like an array, but its size changes dinamically as we add and remove items.

# init()

init() is called at each program startup after global variables have been initialized. 

# TEST

Each file whose name ends with **_test** is interpreted by Go language as a test.

```go test (-v)``` command for starting test

# Function return values

Any Go function can return multiple values.

# COMPILE and INSTALL THE APPLICATION

- Use the ```go build``` command to compile the code into an executable.
- Use the ```go list -f '{{.Target}}'``` to discover the install path where go command will install the current package.
- Add the *path to install directory* to PATH or GOBIN variable and then execute the ```go install``` command.

# Rules

## Function visibility

In Go, a function whose name starts with a capital letter can be called by a function not in the same package (it is an **exported name**)

## Variable declaration

```
var message string
message = fmt.Sprintf("Hi, %v. Welcome!", name)
```

Or we can declare and assign the variable in one line using the **:=** operator
```
message := fmt.Sprintf("Hi, %v. Welcome!", name)
```
