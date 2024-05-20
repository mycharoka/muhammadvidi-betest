require('dotenv').config
const app = require('./app')
const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log('Auth module run'+` http://${process.env.HOST}:${PORT}`)
})