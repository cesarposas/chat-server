'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    name: String,
    surname: String,
    username: String,
    email: String,
    password: String,
    picture: String
})

module.exports = mongoose.model('User', userSchema);