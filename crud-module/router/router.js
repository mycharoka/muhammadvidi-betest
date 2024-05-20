const express = require('express')
const router = express.Router()
const controller = require('../controller/controller')

router.get('/subscriber', controller.subscriber)

module.exports = router