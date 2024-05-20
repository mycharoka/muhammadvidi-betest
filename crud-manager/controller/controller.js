
// const { publish, publisher } = require('../config/redis')
const Redis = require('redis')

async function create(req, res) {
  const publisher = Redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST)
  const authHeader = req.get('authorization')
  const token = authHeader.split(' ')[1]
  // console.log(token)
  const authModuleUrl = `${process.env.AUTH_MODULE_URL}/api/v1/auth/validate?accessToken=${token}`

  // console.log(authModuleUrl)
  try {
    const validate = await fetch(authModuleUrl)
    // console.log(validate)
    if (validate.status !== 200) {
      return res.status(400).send({
        message: 'Not Verified'
      })
    }
    const data = JSON.stringify(req.query)
    console.log(data)
    await publisher.connect()
    await publisher.publish(process.env.PUBSUB_CHANNEL, data)
    // console.log('publish > ', publishData)
    console.log(`Publishing event..`)
    return res.send({message: 'Publishing event successful'})

  } catch (error) {
    console.error(error)
    throw new Error(error.message)
  }
}

module.exports = {
  create
}