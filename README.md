# Servidor

A utilidade desse servidor é a criação e autenticação de um usuário a partir de um token 

notas:
* npx - v -> 10.2.4
* yarn -v -> 1.22.21
* node -v -> 20.11.0
* prisma - v 5.10.2
* Postgresql

## Como executar o app?
  1. `git clone https://github.com/fuedgabriel/Refresh-token.git`
  2. `.entre no arquivo .env e modifique a variável DATABASE_URL, será necessário configurar o seu próprio banco de dados`
  3. `yarn dev`


## Rotas
```
{
	"base_url": "http://localhost:3000"
}

/users - post
{
	"name":"",
	"email":"",
	"password":""
}

/login - post
{
	"email":"email",
	"password":"email"
}

/cursos - get   -Bearer Token


/refresh - post
{
	"refreshToken":"3aacb739-a358-46c4-ab7a-5426c57dbccf"
}
```

