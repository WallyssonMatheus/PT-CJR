
# Documentação API - CJR

API feita para o projeto do programa de trainee da empresa júnior de computação




### Em caso de dúvidas, contatar:

- [Daniel Filipe](https://cjrteam.slack.com/team/U063EJKGZM3)


## Instalação

Entre na pasta "backend" e rode os seguintes comandos:

```bash
  npm install

  npx prisma migrate dev

  nodemon index.js
```
    
## Rotas e métodos

Todas as rotas esperam objetos do tipo JSON

#### Cadastro de usuário

```http
  POST /users/register
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Obrigatório**. |
| `password` | `string` | **Obrigatório**. |
| `email` | `string` | **Obrigatório**. Precisa ser único |
| `gender` | `string` | **Obrigatório**. |
| `job_title` | `string` | **Obrigatório**. Default: "Desenvolvedor" |
| `profile_picture` | `BLOB` | **Opcional**. |

* Em caso de sucesso retorna status 201 e o registro do usuário criado.

* Em caso de erro retorna status 500 e a descrição do erro.

#### Rota de login

```http
  GET /users/login
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email`      | `string` | **Obrigatório**. |
| `password`      | `string` | **Obrigatório**. |

* Em caso de sucesso retorna status 200 com o registro do usuário logado.

* Em caso de erro retorna 404 com a descrição do erro.

