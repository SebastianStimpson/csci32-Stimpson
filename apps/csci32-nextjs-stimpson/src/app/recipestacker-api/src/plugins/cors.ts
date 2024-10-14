import fp from 'fastify-plugin'
import cors from '@fastify/cors'

/**
 * This plugin enables Cross-Origin Resource Sharing (CORS)
 *
 * @see https://github.com/fastify/fastify-cors
 */
export default fp(async (fastify) => {
  fastify.register(cors, {
    // Allow all origins; adjust this in production to restrict origins
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  })
})
