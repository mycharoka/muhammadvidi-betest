require('dotenv').config
const app = require('./app')
const PORT = process.env.PORT || 8001

app.listen(PORT, () => {
  console.log('CRUD manager'+` http://${process.env.HOST}:${PORT}`)
})