const { check, validationResult } = require('express-validator')
const validateRequestQuery = [
  check('username')
  .exists({values: 'falsy'})
  .withMessage('Username is required!')
  .isString()
  .withMessage('Username must be a string!'),

  check('accountNumber')
  .exists({values: 'falsy'})
  .withMessage('Acount Number is required!')
  .isString()
  .withMessage('Acount Number must be a string!'),

  check('emailAddress')
  .exists({values: 'falsy'})
  .withMessage('Email Address is required!')
  .isString()
  .withMessage('Email Address must be a string!'),

  check('identityNumber')
  .exists({values: 'falsy'})
  .withMessage('Idenity Number is required!')
  .isString()
  .withMessage('Idenity Number must be a string!')
]

function validate(req, res, next) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send({ error: errors.array() })
  }
  next()
}

module.exports = {
  validateRequestQuery,
  validate
}