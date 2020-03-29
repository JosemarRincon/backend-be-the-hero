const express = require('express');
const cors = require('cors')
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);
// formata melhor as mensagens de erros da validacao
app.use(errors());

// npx knex migrate:make create_ongs
// npx knex migrate:make create_incidents
// npx knex migrate:latest
// npx knex migrate:rollback desfaz a ultima migrations

// lib para validações celebrate ta no github  usa a lib joi
// npm install celebrate
// npm install supertest -D como dep de desenvolvimento

// preparando pro test
//app.listen(3333);

module.exports = app;