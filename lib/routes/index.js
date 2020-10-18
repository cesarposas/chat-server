'use strict'

const express = require('express');
const UserController = require('../controllers/userController');
const api = express.Router();
const auth = require('../../middlewares/auth')
var path = require('path');

api.get('/:userId', UserController.getUserById);
api.post('/signup', UserController.signUp);
api.post('/signin', UserController.signIn);

api.get('/private', auth.isAuth,  function(req, res){
  res.status(200).send({ message: 'You have access'})
  res.sendFile(path.resolve('lib/views/index.html'));
});

module.exports = api;