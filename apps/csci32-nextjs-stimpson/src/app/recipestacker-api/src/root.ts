import { FastifyInstance } from 'fastify'

export default async function rootRoutes(fastify: FastifyInstance) {
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })
}
