'use strict'
const User = require('../models/user');

function getUserById (req, res){
    User.find({'_id': req.params.userId}, (err, userFinded) => {
        if(err) res.status(500).send({message: err});
        if(!userFinded) res.status(404).send({message: 'can not find user'});
        res.status(200).send({user: userFinded});
    })
}

function saveUser (req, res){
    let user = new User();
    user.name = req.body.name;
    user.surname = req.body.surname;
    user.username = req.body.username;
    user.picture = req.body.picture;

    user.save((err, userStored) => {
        if(err) res.status(500).send({message: 'cannot save user'});

        res.status(200).send({product: userStored});
    });
}

function updateUser (id){

}

function deleteUser (id){

}

module.exports = {
    getUserById,
    updateUser,
    deleteUser,
    saveUser
}