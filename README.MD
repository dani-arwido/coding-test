# Coding Test

Technology stack:

- Frontend: HTML, CSS, Jquery
- Backend: Nodejs (Express)
- Database: MS SQL

# Setup

## Prerequisite

install nodejs package

```
npm i
```

## Database

open `config\config.json` and change username, password, database, host to match the local environment

install sequelize-cli

```
npm i -g sequelize-cli
```

create database

```
sequelize db:create
```

migrate database

```
sequelize db:migrate
```

## Backend

Run server

```
npm start
```

## Frontend

Open `frontend\index.html` on browser

## Unit test

Run unit test

```
npm test
```
