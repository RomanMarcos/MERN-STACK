# MERN-STACK BLOG

El proyecto es un BLOG completo (web app + API) usando el conocido stack MERN.

## Pasos para levantar el proyecto

## Clonar proyecto

- git clone git@github.com:RomanMarcos/MERN-STACK.git

## DOCKER (prerequisitos: docker & docker-compose instalados)

- cd MERN-STACK
- docker-compose up

## Mongo DB

- Tener Mongo & mongoose para tener una base de datos local.
- Levantar la DB ejecutando el archivo "mongod". Para SO Windows este archivo va a estar en C:\Program Files\MongoDB\Server\version\bin
- cmd > mongod

## Blog API

- cd api
- npm install
- npm start

## Blog web app (Vite + React)

- cd blog-webapp
- npm install
- npm run dev