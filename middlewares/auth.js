'use strict'

const services = require('../services')

function isAuth (req, res, next) {
    if(!res.headers.authorization) {
        return res.status(403).send({ message: 'Unauthorized user'})
    }

    const token = req.headers.authorization.split(' ')[1]
    services.decodeToken(token)
        .then(response => {
            req.user = response
            next()
        })
        .catch(reponse => {
            res.status(response.status)
        })
}

module.exports = {
    isAuth
}