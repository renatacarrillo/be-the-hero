const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();
//antes de todas as requisições, express vai no corpo da requisição e converter o json em um objeto JavaScript
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333); //a aplicação vai ouvir a porta 3333 quando acessar localhost

/**
 * Rota    ok
 * Recurso (banco de dados) ok
 */

/**
 *Métodos HTTP:
 *
 *GET: Buscar/Listar uma informação no back-end
 *POST: Criar uma informação no back-end
 *PUT: Alterar uma informação no back-end
 *DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 *
 * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * (RELACIONAL) SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * (NÃO RELACIONAL) NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */
