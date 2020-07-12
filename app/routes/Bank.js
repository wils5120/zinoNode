const express = require('express');
const bankCtrle = require('../controllers/BankController');


const Router =express.Router();


Router.get('/save', bankCtrle.index)
      .post('/create', bankCtrle.createBank)
      .put('/bak/:key/:value', bankCtrle.find, bankCtrle.update)

module.exports = Router;
