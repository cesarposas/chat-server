const mongoose = require('mongoose');
var application = require('./app');
const config = require('./config')


//MONGO CONNEXION AND START APPLICATION
mongoose.connect(config.db , (err, res) => {
    if (err){
        return console.log('Error en la conexion');
    };
    console.log('Database connection success');
    
    application.http.listen(config.port, () => {
      console.log('API Rest running on http://localhost:' + config.port + '/chat-server');
  });
})

var socketIo = require('./socketIo');