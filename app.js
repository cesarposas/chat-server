//Import modules
const bodyParser = require('body-parser'); 
var path = require('path');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const api = require('./routes');


app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


// Routing
app.use('/chat-server', api);
app.use(express.static(path.join(__dirname, 'views')));

  

module.exports = {
    io,
    http
}