require('dotenv').config()
const express = require('express')
const authRoute = require('./router/router')
const app = express()

app.use(express.json())
app.use('/api/v1/auth', authRoute)
app.get('/api/v1/check', (req, res) => {
  res.send('Hello')
})

module.exports = app