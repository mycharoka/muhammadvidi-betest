const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function login(req, res) {
  const { username, password, emailAdress  } = req.body

  await bcrypt.compare(password, password)

  const payload = {
    username,
    emailAdress
  }
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' })

  return res.status(200).send({
    username,
    emailAdress,
    accessToken: token
  }) 
}

async function validate(req, res) {
  const { accessToken } = req.query
  // console.log(req.query)
  const decode = jwt.verify(accessToken, process.env.JWT_SECRET)
  console.log('decode token > ',decode)
  if (decode.username && decode.emailAdress) {
    return res.status(200).send({
      validate: 'success',
      expiresIn: decode.exp,
      type: 'Bearer'
    })
  }
  return res.status(400).send({
    validate: 'fail'
  })
}

module.exports = {
  login,
  validate
}