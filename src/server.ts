import 'dotenv/config'
import fastify from 'fastify';

const app = fastify()

app.get('/', async (request, response) => {
  return JSON.stringify({
    status: 200,
    message: "Discord Bot is OK."
  })
})

app.listen({
  port: parseInt(process.env.PORT!)
})
