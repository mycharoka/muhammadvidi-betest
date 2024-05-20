const express = require('express')
const router = express.Router()
const controller = require('../controller/controller')
const { validateRequestQuery, validate } = require('../middleware/validator')

router.post('/create',  validateRequestQuery, validate, controller.create)

module.exports = router