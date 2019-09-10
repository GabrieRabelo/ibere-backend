const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const options = require('../swagger-options');

//Import das rotas
const usersRouter = require('./api/user/usersRest');
const institutionRouter = require ('./api/instituicao/institutionsRest');

const app = express();

//Configurações Swagger
const swaggerSpec = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


//Configurações da Aplicação Express
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Adicionando rotas na aplicação
app.use('/users', usersRouter);
app.use('/api/v1/instituicao', institutionRouter);

module.exports = app;