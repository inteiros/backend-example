const express = require('express');
const IncidentController = require('./controllers/IncidentController');
const OngController = require("./controllers/OngController.js");
const ProfileController = require('./controllers/ProfileControler.js');
const SessionController = require('./controllers/SessionController.js');

const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.index);

routes.post('/ongs', OngController.create);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;