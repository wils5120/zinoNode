const express = require('express');
const userCtrle = require('../controllers/UserController');
const { put } = require('../app');

const Router =express.Router();

Router.get('/listUsr', userCtrle.index)
      .post('/addUsr', userCtrle.createUsr)
      .get('/users/:key/:value', userCtrle.find, userCtrle.show)
      .put('/actUs/:key/:value',userCtrle.find,  userCtrle.update)

module.exports = Router;