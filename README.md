# api-myClients

![GitHub](https://img.shields.io/github/license/steinerstt/api-myClients?style=for-the-badge)

<br>

![api-myClients](https://github.com/steinerstt/screenshots-projects/blob/main/api-myClients/diagram.jpg?raw=true)

> Api desenvolvida para a aplicação <a href="https://github.com/steinerstt/myClients"> myClientes </a>

<br>

## 🛠️ Algumas tecnologias

### Esta api foi desenvolvida com as principais tecnologias

- Node.js
- Express.js
- TypeScript
- Typeorm
- PostgreSQL
- Bcrypt
- Jsonwebtoken
- Yup

## 📌 Features

- [x] Usuário
  - [x] Cadastro de usuários
  - [x] Login
  - [x] Editar informações
  - [x] Excluir cadastro
  - [x] Adicionar clientes
  - [x] Listar clientes
  - [x] Atualizar informaões de clientes
  - [x] Excluir cliente

## 🚀 Executando o projeto localmente

### 💻 Pré-requisitos

Para rodar o projeto é necessário que você tenha instalado na sua máquina as seguintes ferramentas:

- Git
- Node.js
- VSCode
- Postgresql
- Yarn

### 💿 Rodando

```bash
# Clone este repositório através do terminal
$ git clone git@github.com:steinerstt/api-myClients.git

# Acesse a pasta do projeto
$ cd api-myClients
```

> Crie um arquivo chamado .env na raiz do projeto e copies as informações que estão no .env.example e preencha as informações de acordo com o seu ambiente

```bash
# Instale as dependências do projeto
$ yarn install

# Persistindo as migrations no banco de dados
$ yarn typeorm migration:run -d src/data-source.ts

# Rode o projeto
$ yarn dev
```

<br>

# 📋 Documentação
> Na raiz do projeto existe um arquivo chamado *Insomnia_my_clients.json*, ele pode ser importado e usado como documentação no Insomnia

## Cadastro de usuário

### POST/users

body

```JSON
{
  "firstName": "Diogo",
  "lastName": "Steiner",
  "email": "steiner@mail.com",
  "password": "123456",
  "mobileNumber": "21971281708"
}
```

Retorno esperado - 201

```JSON
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODAwMzg0NDEsImV4cCI6MTY4MDA2MDA0MSwic3ViIjoiZmE0NWEzN2QtOWQ3Ni00ZTY4LTgxYzgtYmNmZWMzNTMzNTA3In0.bpsz8WWDPOzq5jD2uaiEEd-uzxZT8mf89VsT8Sxla9o",
  "user": {
    "id": "fa45a37d-9d76-4e68-81c8-bcfec3533507",
    "firstName": "Diogo",
    "lastName": "Steiner",
    "email": "steiner@mail.com",
    "mobileNumber": "21971281708",
    "clients": [],
    "updatedAt": "2023-03-28T21:20:40.893Z",
    "createdAt": "2023-03-28T21:20:40.893Z"
  }
}
```

> firstName and lastName min(3) letras max(12) letras

> email and password min (6) caracteres max (72) caracteres

> mobileNumber deve ter 11 números

#

Pissíveis erros

400

```JSON
{
  "message": "firstName is a required field | lastName is a required field | email is a required field | password is a required field | mobileNumber is a required field"
}
```

#

409

```JSON
{
  "message": "Email already registered"
}
```

```JSON
{
  "message": "Mobile number already registered"
}
```

#

## Login de usuário

### POST/sessions

body

```JSON
{
  "email": "steineralt@mail.com",
  "password": "123456"
}
```

Retorno esperado - 200

```JSON
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODAxMjY4NTksImV4cCI6MTY4MDE0ODQ1OSwic3ViIjoiNzRlMGRjNzAtZmI3OS00NTJhLTkyMDEtNmZhNjBhY2U1ZjYwIn0.Gkxo9Mu_pFLJf02S9C3qRNv_KX_dEcrUxxN54rapqn4",
  "user": {
    "id": "74e0dc70-fb79-452a-9201-6fa60ace5f60",
    "firstName": "Diogo",
    "lastName": "Steiner",
    "email": "steiner@mail.com",
    "mobileNumber": "21332123132",
    "clients": [
      {
        "id": "2844b4b7-dd62-4421-817e-9afab29b1bb5",
        "firstName": "Diogo",
        "lastName": "Steiner",
        "email": "steinercliente@mail.com",
        "mobileNumber": "21971281708",
        "updatedAt": "2023-03-29T18:27:04.827Z",
        "createdAt": "2023-03-29T18:27:04.827Z"
      },
      {
        "id": "3c076fbe-81e9-4456-a0e7-70eecb1cc474",
        "firstName": "Amanda",
        "lastName": "Souza",
        "email": "amanda@mail.com",
        "mobileNumber": "21999999999",
        "updatedAt": "2023-03-29T18:27:21.961Z",
        "createdAt": "2023-03-29T18:27:21.961Z"
      },
      {
        "id": "35dc0d48-7992-4bf0-9d88-e59db1b724e6",
        "firstName": "Carlos",
        "lastName": "Souza",
        "email": "carlos@mail.com",
        "mobileNumber": "21999999991",
        "updatedAt": "2023-03-29T18:27:37.202Z",
        "createdAt": "2023-03-29T18:27:37.202Z"
      },
      {
        "id": "75489941-c6a0-4863-8d31-be6d655e4200",
        "firstName": "Kell",
        "lastName": "Show",
        "email": "kell@mail.com",
        "mobileNumber": "21999999992",
        "updatedAt": "2023-03-29T18:28:00.790Z",
        "createdAt": "2023-03-29T18:28:00.790Z"
      }
      ],
    "updatedAt": "2023-03-29T18:26:06.152Z",
    "createdAt": "2023-03-29T18:26:06.152Z"
  }
}
```

#

Possíveis erros

400

```JSON
{
  "message": "email is a required field | password is a required field"
}
```

#

401

```JSON
{
  "message": "Email or password invalid"
}
```

#

## Buscar sessão (auto login)

### GET/sessions

#### Requer autenticação Bearer

```TS
{
  headers: {
    "Authorization": `Bearer ${token}`
  }
}
```

Retorno esperado - 200

```JSON
{
  "id": "74e0dc70-fb79-452a-9201-6fa60ace5f60",
  "firstName": "Diogo",
  "lastName": "Steiner",
  "email": "steiner@mail.com",
  "mobileNumber": "21332123132",
  "clients": [
    {
      "id": "2844b4b7-dd62-4421-817e-9afab29b1bb5",
      "firstName": "Diogo",
      "lastName": "Steiner",
      "email": "steinercliente@mail.com",
      "mobileNumber": "21971281708",
      "updatedAt": "2023-03-29T18:27:04.827Z",
      "createdAt": "2023-03-29T18:27:04.827Z"
    },
    {
      "id": "3c076fbe-81e9-4456-a0e7-70eecb1cc474",
      "firstName": "Amanda",
      "lastName": "Souza",
      "email": "amanda@mail.com",
      "mobileNumber": "21999999999",
      "updatedAt": "2023-03-29T18:27:21.961Z",
      "createdAt": "2023-03-29T18:27:21.961Z"
    },
    {
      "id": "35dc0d48-7992-4bf0-9d88-e59db1b724e6",
      "firstName": "Carlos",
      "lastName": "Souza",
      "email": "carlos@mail.com",
      "mobileNumber": "21999999991",
      "updatedAt": "2023-03-29T18:27:37.202Z",
      "createdAt": "2023-03-29T18:27:37.202Z"
    },
    {
      "id": "75489941-c6a0-4863-8d31-be6d655e4200",
      "firstName": "Kell",
      "lastName": "Show",
      "email": "kell@mail.com",
      "mobileNumber": "21999999992",
      "updatedAt": "2023-03-29T18:28:00.790Z",
      "createdAt": "2023-03-29T18:28:00.790Z"
    }
  ],
  "updatedAt": "2023-03-29T18:26:06.152Z",
  "createdAt": "2023-03-29T18:26:06.152Z"
}
```

#

Possíves erros

401

```JSON
{
  "message": "Missing headers authorization"
}
```

---

## Atualizar dados do usuário

### PATCH/users

#### Requer autenticação Bearer

```TS
{
  headers: {
    "Authorization": `Bearer ${token}`
  }
}
```

body

```JSON
{
  "firstName": "Diogo Alt",
  "lastName": "Steiner Alt",
  "email": "steineralt@mail.com",
  "mobileNumber": "21900001100",
  "password": "123456"
}
```

> firstName e lastName min(3) letras max (12) letras

> password e email min (6) caracteres max (72) caracteres

> mobileNumber deve ter 11 números

> Pode atualizar qualquer dado, não precisa enviar todos

#

Retorno esperado - 200

```JSON
{
  "id": "fa45a37d-9d76-4e68-81c8-bcfec3533507",
  "firstName": "Diogo Alt",
  "lastName": "Steiner Alt",
  "email": "steineralt@mail.com",
  "mobileNumber": "21900001100",
  "updatedAt": "2023-03-28T21:40:14.214Z",
  "createdAt": "2023-03-28T21:20:40.893Z"
}
```

#

Possíveis erros

401

```JSON
{
  "message": "Missing headers authorization"
}
```

---

## Deletar conta de usuário

### DELETE/users

#### Requer autenticação Bearer

```TS
{
  headers: {
    "Authorization": `Bearer ${token}`
  }
}
```

Retorno esperado - 204

```JSON

```

#

Possíveis erros

401

```JSON
{
  "message": "Missing headers authorization"
}
```

---

## Cadastrar cliente

### POST/clients

#### Requer autenticação Bearer

```TS
{
  headers: {
    "Authorization": `Bearer ${token}`
  }
}
```

body

```JSON
{
  "firstName": "Amanda",
  "lastName": "Silva",
  "email": "amandasilva@mail.com",
  "mobileNumber": "97982612341"
}
```

> firstName e lastName min(3) letras max (12) letras

> email e password min (6) caracteres max (72) caracteres

> mobileNumber deve ter 11 números

#

Retorno esperado - 201

```JSON
{
  "id": "63738cf7-500b-4298-9c1f-335d27b2f3e6",
  "firstName": "Amanda",
  "lastName": "Silva",
  "email": "amandasilva@mail.com",
  "mobileNumber": "97981612341",
  "updatedAt": "2023-03-28T21:56:28.025Z",
  "createdAt": "2023-03-28T21:56:28.025Z"
}
```

#

Possíves erros

400

```JSON
{
  "message": "firstName is a required field | lastName is a required field | email is a required field | mobileNumber is a required field"
}
```

#

401

```JSON
{
  "message": "Missing headers authorization"
}
```

409

```JSON
{
  "message": "Email already registered"
}
```

```JSON
{
	"message": "Mobile number already registered"
}
```

---

## Atualizar dados do cliente

### PATCH/clients/{clientId}

#### Requer autenticação Bearer

```TS
{
  headers: {
    "Authorization": `Bearer ${token}`
  }
}
```

body

```JSON
{
  "firstName": "Amanda Alt",
  "lastName": "Silva Alt",
  "email": "amandaalt@mail.com",
  "mobileNumber": "97981612311"
}
```

> firstName e lastName min(3) letras max (12) letras

> email min (6) caracteres max (72) caracteres

> mobileNumber deve ter 11 números

> Pode atualizar qualquer dado, não precisa enviar todos

#

Retorno esperado - 200

```JSON
{
  "id": "715c11cc-22ea-41ca-94c9-7153d678495f",
  "firstName": "Amanda Alt",
  "lastName": "Silva Alt",
  "email": "amandaalt@mail.com",
  "mobileNumber": "97981612311",
  "updatedAt": "2023-03-28T22:43:54.078Z",
  "createdAt": "2023-03-28T21:57:39.411Z"
}
```

> firstName and lastName min(3) letters max (12) letters

> email and password min (6) chars max (72) chars

> mobileNumber length 11 numbers


#

Possíveis erros

401

```JSON
{
  "message": "Missing headers authorization"
}
```

#

404

```JSON
{
  "message": "Client not found"
}
```

---

## Excluir clinte

### DELETE/clients/{clientId}

#### Requer autenticação Bearer

```TS
{
  headers: {
    "Authorization": `Bearer ${token}`
  }
}
```

#

Retorno esperado - 204

```JSON

```

#

Possíveis erros

401

```JSON
{
  "message": "Missing headers authorization"
}
```

#

404

```JSON
{
  "message": "Client not found"
}
```

---

## 📄 Licença

Este projeto está sob a licença do MIT - veja o arquivo [LICENSE](https://github.com/steinerstt/api-myClients/blob/main/LICENSE) para detalhes.

Feito com ❤ por [Steiner](https://github.com/steinerstt)
