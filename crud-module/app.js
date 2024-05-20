require('dotenv').config()
const express = require('express')
const app = express()
const moduleRoute = require('./router/router')

app.use(express.json())
app.use('/api/v1/crud/module', moduleRoute)
app.get('/api/v1/crud/module', (req, res) => {
  res.send('crud module')
})

module.exports = app