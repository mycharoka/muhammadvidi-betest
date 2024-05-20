const app = require('./app')

require('dotenv').config()
const PORT = process.env.PORT || 8002

app.listen(PORT, () => {
  console.log(`CRUD Module http://${process.env.HOST}:${PORT}`)
})