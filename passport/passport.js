const Jwtstrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const User = require('../routes/users/models/User')

const key = process.env.SECRET_KEY || 'defaultSecrectKey'

const opts = {}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = key

module.exports = passport => {
    passport.use(new Jwtstrategy(opts, (jwt_payload, done) => {

    }))
}