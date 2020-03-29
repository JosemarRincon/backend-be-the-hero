const knex = require('knex');
const configuration = require('../../knexfile');

// configurar ambient de test // instalar npm install cross-env

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

const conection = knex(config);

module.exports = conection;