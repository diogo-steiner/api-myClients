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
$ git clone git@github.com:steinerstt/api-myclients.git

# Acesse a pasta do projeto
$ cd api-myclients
```
> Crie um arquivo chamado .env na raiz do projeto e copies as informações que estão no .env.example e preencha as informações de acordo com o seu ambiente

```bash
# Instale as dependências do projeto
$ yarn install

# Persistindo às migrations no banco de dados
$ yarn typeorm migration:run -d src/data-source.ts

# Rode o projeto
$ yarn dev
```

<br>

# 📋 Documentação
<br>

## 📄 Licença

Este projeto está sob a licença do MIT - veja o arquivo [LICENSE](https://github.com/steinerstt/api-myClients/blob/main/LICENSE) para detalhes.

Feito com ❤ por [Steiner](https://github.com/steinerstt)
