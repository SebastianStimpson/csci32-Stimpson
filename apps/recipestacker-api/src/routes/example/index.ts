import { FastifyPluginAsync } from 'fastify'

const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return 'this is an example'
  })

  fastify.get('/recipes', async function (request, reply) {
    return 'this is an example'
  })

  fastify.post('/recipe', async function (request, reply) {
    return 'this is an example'
  })

  fastify.patch('/recipe', async function (request, reply) {
    return 'this is an example'
  })
}

export default example
