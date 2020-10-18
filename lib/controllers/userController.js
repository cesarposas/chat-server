'use strict'

const User = require('../models/user')
const service = require('../../services')

function getUserById (req, res){
    User.find({'_id': req.params.userId}, (err, userFinded) => {
        if(err) res.status(500).send({message: err});
        if(!userFinded) res.status(404).send({message: 'can not find user'});
        res.status(200).send({user: userFinded});
    })
}

function signUp (req, res){
    let user = new User();
    user.name = req.body.name;
    user.surname = req.body.surname;
    user.username = req.body.username;
    user.email = req.body.email;
    user.picture = req.body.picture;

    user.save((err, user) => {
        if(err) res.status(500).send({message: 'cannot save user'});
        return res.status(200).send({token: service.createToken(user)});
    });
}

function signIn(req, res){
    User.find({ email: req.body.email }, (err, user) => {
        if(err) return res.status(500).send({ message: err })
        if(!user[0]) return res.status(404).send({ message: 'User not exist' })
        console.log(user)
        req.user = user
        res.status(200).send({
            message: 'You are logged',
            token: service.createToken(user),
            name: user.name
        })
    })
}

module.exports = {
    getUserById,
    signUp,
    signIn
}