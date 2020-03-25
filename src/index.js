const express = require('express');
const routes = require('./routes');
const cores = require('cors')

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);

// npx knex migrate:make create_ongs
// npx knex migrate:make create_incidents
// npx knex migrate:latest
// npx knex migrate:rollback desfaz a ultima migrations


app.listen(3333);