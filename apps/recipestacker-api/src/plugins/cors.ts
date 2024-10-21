import fp from 'fastify-plugin'
import cors from '@fastify/cors'

export default fp(async (fastify, opts) => {
  await fastify.register(cors, {
    origin: ['http://127.0.0.1:3000', 'http://localhost:3000'],
    // allowedHeaders: ['Origin', 'X-Requested-With', 'Accept', 'Content-Type', 'Authorization', 'Host'],
    // methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
  })
})
