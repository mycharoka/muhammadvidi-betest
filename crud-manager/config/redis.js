const Redis = require('redis')
const { promisify } = require('util')

const publisher = Redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
  })

const subscriber = Redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
  })
  
publisher.on('connect', () => {
    console.log('Publisher connected to Redis');
});

publisher.on('ready', () => {
    console.log('Publisher is ready');
});

publisher.on('end', () => {
    console.log('Publisher connection closed');
});

publisher.on('error', (err) => {
    console.error('Redis Publisher Error:', err);
});

subscriber.on('connect', () => {
    console.log('Subscriber connected to Redis');
});

subscriber.on('ready', () => {
    console.log('Subscriber is ready');
});

subscriber.on('end', () => {
    console.log('Subscriber connection closed');
});

subscriber.on('error', (err) => {
    console.error('Redis Subscriber Error:', err);
});
publisher.on('error', error => {
  console.error('CRUD Manager Redis Publisher Error: ', error)
})

subscriber.on('error', error => {
  console.error('CRUD Manager Redis Subscriber Error: ', error);
})

const publish = promisify(publisher.publish).bind(publisher)

module.exports = {
  publisher, subscriber, publish
}