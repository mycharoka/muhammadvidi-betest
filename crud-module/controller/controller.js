const Redis = require('redis')

async function subscriber(req, res) {
  const subscriber = Redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST)
  // const subscriber = client.duplicate()
  await subscriber.connect()
  
  subscriber.on('error', (err) => {
    console.error('Redis Client Error', err);
  });
  const messageStorage = []
  try {
    const subs = await subscriber.subscribe(process.env.PUBSUB_CHANNEL, message => {
      console.log('msg > ', message)
    })
    console.log('subs > ' ,subs)
    
  } catch (error) {
    throw new Error(error.message)
  }

}

module.exports = {
  subscriber
}