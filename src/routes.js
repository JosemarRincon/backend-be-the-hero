const express = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');

const IncidentsController = require('./controllers/IncidentsController');

const ProfileController = require('./controllers/ProfileController');

const SessionController = require('./controllers/SessionController');

const routes = express.Router();
/**
 * Query Builder:
 * npm install knex
 * npx knex init
 * Driver
 * npm install sqlite3
 * npm install cors
 * TDD npm install jest
 * iciando o jest npx jest --init
 *
 */
routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
/**
 * query
 * route
 * body
 */
routes.post('/ongs', celebrate({
  // sempre que a chave de um objeto for uma variável tem que por []
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(12),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
  })

}), OngController.create);

routes.get('/profile', celebrate({
  // sempre que a chave de um objeto for uma variável tem que por []
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}), ProfileController.index);

routes.get('/incidents',celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  })
}), IncidentsController.index);

routes.post('/incidents', IncidentsController.create);

routes.delete('/incidents/:id',celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })
}), IncidentsController.delete);

module.exports = routes;