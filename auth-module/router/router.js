const express = require('express')
const router = express.Router()
const contoller = require('../controller/controller')

router.post('/login', contoller.login)
router.get('/validate', contoller.validate)

module.exports = router