<h1 align="center">Compass Store - Buffer</h1>

<h6 align="center">
The american company Compass Store intends to expands its virtual store to serve the Brazilian market.
</h6>
<p align="center">
 <img src="https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=for-the-badge"/>
 <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
 <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
 <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"/>
 <img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge"/>
</p>

# Info about the project :books:
...
## Features
  - #### Pagination
  - #### Unit Tests
  - #### Client Endpoints
  - #### Product Enpoints
  - #### Sale Endpoints
  ...

> ## ✔  [Heroku](https://compass-store-buffer.herokuapp.com)

## How to run the application :arrow_forward:

#### Clone the project

```
git clone https://github.com/paulorayann/buffer-desafio-ts.git
```

...
#### Install the dependencies:

```
npm install
```
...

#### Run the application
...
###### Development
```
npm run dev
```
...

###### Production

```
npm start
```

...
#### Run the application Tests
...
###### Unit Tests

```
npm test
```
...

#### Set up the environment variables (.env)

You will need to create a .env in the project root directory.
There is an .env.example you can freely use.

```
DB_HOST = 
DB_NAME = 
MONGO_URL = 
PORT = 
```

...

# 👨‍👩‍👧‍👦 Client Endpoints

## Create Client

`POST`

```
http://localhost:3333/api/v1/client/
```

### Body Example

```
{
    "name": "Pedro César",
    "cpf": "576.396.900-64",
    "birthday": "09/05/2002",
    "email": "pedro@cesar.com",
    "password": "123356",
    "cep": "68926-084",
    "number": "180"
}
```
...

`Status Code: 201 Created`

```
{
    "name": "Pedro César",
    "cpf": "576.396.900-64",
    "birthday": "2002-09-05T03:00:00.000Z",
    "email": "pedro@cesar.com",
    "password": "$2a$10$kyQ1kfE.BLtGWc2spxZ6ze1rj0YAK7yXiBDtr2Y4Tl2D6ShwbTf02",
    "cep": "68926-084",
    "uf": "AP",
    "city": "Santana",
    "address": "Avenida Lucena de Azevedo",
    "number": "180",
    "complement": "lado ímpar",
    "neighborhood": "Daniel",
    "_id": "6308b44d5c28a315b87c225a",
    "__v": 0
```
...

`Status Code: 400 Bad Request`

```

    "message": "Bad Request",
    "details": [
        {
            "message": "error message of the request"
        }
    ]
}
```
...

## List All Client:

`GET`

```
http://localhost:3333/api/v1/client/
```

...

`Status Code: 200 OK`

```
{
    "clients": [
        {
            "_id": "6306395b006a8c925fa80618",
            "name": "Sergio",
            "cpf": "689.227.070-03",
            "birthday": "2002-09-05T03:00:00.000Z",
            "email": "teste42@teste.com",
            "cep": "66640-677",
            "uf": "PA",
            "city": "Belém",
            "address": "Conjunto Augusto Montenegro III",
            "number": "180",
            "complement": "",
            "neighborhood": "Mangueirão"
        },
        {
            "_id": "6306395b006a8c925fa80618",
            "name": "Pedro César",
            "cpf": "576.396.900-64",
            "birthday": "2002-09-05T03:00:00.000Z",
            "email": "pedro@cesar.com",
            "password": "$2a$10$kyQ1kfE.=BLtGWc2spxZ6ze1rj0YAK7yXiBDtr2Y4Tl2D6ShwbTf02",
            "cep": "68926-084",
            "uf": "AP",
            "city": "Santana",
            "address": "Avenida Lucena de Azevedo",
            "number": "180",
            "complement": "lado ímpar",
            "neighborhood": "Daniel",
        }
      {
    ],
    "totalCount": 192,
    "pageSize": 15,
    "totalPages": 13,
    "currentPage": 1
}
```


## Author

| [<img src="https://avatars.githubusercontent.com/u/86445602?v=4" width=150><br><sub>Paulo Rayann</sub>](https://github.com/paulorayann) |       
:-------------------------------------------------------------------------------------------------------------------------------------: 

#### Paulo Rayann - [Github](https://github.com/paulorayann)
...


