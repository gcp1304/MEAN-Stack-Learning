var express = require('express')
var jwt = require('jwt-simple')
var _ = require('lodash')
var bcrypt = require('bcrypt')
var app = express()

app.use(require('body-parser').json())

var users = [{username: 'jayplabs', password: '$2a$10$koSMSeaKcobcaI024kG0vu5SisCzlRjZDqYbZ7n4qKAJOrwHdcV8K'}]
var secretKey = 'supersecretkey'

function findUserByUsername(uname) {
    return _.find(users, {username: uname})
}

function validateUser(user, password, cb) {
    return bcrypt.compareSync(password, user.password, cb)
}

app.post('/session', function (req, res) {
    var user = findUserByUsername(req.body.username)

    validateUser(user, req.body.password, function (err, valid) {
        if (err || !valid) { return res.sendStatus(401) }
        var token = jwt.encode({username: user.username}, secretKey)
        res.json(token)
    })
})

app.get('/user', function (req, res) {
    var token = req.headers['x-auth']
    var user = jwt.decode(token, secretKey)
    // TODO: pull user info from database
    res.json(user)
})

app.listen(3000)
