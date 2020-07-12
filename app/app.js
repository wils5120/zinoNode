const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const userRout = require('./routes/User');
const userRoutBank = require('./routes/Bank');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use('/user', userRout);
app.use('/bank', userRoutBank);
module.exports = app;