
const Router = require('express').Router
const login = require('./api/login')

const router = Router()

router.get('/login', login)

module.exports = router
