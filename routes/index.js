'use strict'

const express = require('express');
const UserController = require('../controllers/userController');
const api = express.Router();
var path = require('path');

api.post('/user', UserController.saveUser);
api.get('/user/:userId', UserController.getUserById);
api.get('/', function(req, res){
    res.sendFile(path.resolve('views/index.html'));
  });
module.exports = api;