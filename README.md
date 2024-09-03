
```markdown
# Refresh Token Authentication Server

Este é um servidor de autenticação que permite a criação de usuários e a autenticação utilizando tokens de acesso e refresh tokens. A aplicação foi desenvolvida utilizando Node.js, Prisma e PostgreSQL.

## Tecnologias Utilizadas

- **Node.js** (v20.11.0)
- **Yarn** (v1.22.21)
- **Prisma** (v5.10.2)
- **PostgreSQL**
- **npx** (v10.2.4)

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/fuedgabriel/Refresh-token.git
   ```
2. Acesse o arquivo `.env` e configure a variável `DATABASE_URL` para o seu banco de dados PostgreSQL.

3. Execute o servidor:
   ```bash
   yarn dev
   ```

## Rotas Disponíveis

### 1. Criação de Usuário

- **Endpoint**: `/users`
- **Método**: POST
- **Body**:
  ```json
  {
    "name": "Nome do usuário",
    "email": "email@exemplo.com",
    "password": "senha"
  }
  ```

### 2. Login

- **Endpoint**: `/login`
- **Método**: POST
- **Body**:
  ```json
  {
    "email": "email@exemplo.com",
    "password": "senha"
  }
  ```

### 3. Listar Cursos

- **Endpoint**: `/cursos`
- **Método**: GET
- **Autenticação**: Bearer Token

### 4. Refresh Token

- **Endpoint**: `/refresh`
- **Método**: POST
- **Body**:
  ```json
  {
    "refreshToken": "token_refresh_aqui"
  }
  ```

## O que é um Refresh Token?

Um **refresh token** é um token que permite ao cliente obter um novo token de acesso sem a necessidade de fazer login novamente. Ele é emitido junto com o token de acesso no momento da autenticação e tem uma vida útil mais longa. Quando o token de acesso expira, o cliente pode enviar o refresh token ao servidor para obter um novo token de acesso, mantendo a sessão ativa sem precisar reautenticar o usuário.

Essa abordagem aumenta a segurança, pois os tokens de acesso têm uma vida útil curta, limitando o tempo em que podem ser utilizados em caso de comprometimento. O refresh token é armazenado de forma segura no lado do cliente e deve ser protegido para evitar o uso indevido.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.
