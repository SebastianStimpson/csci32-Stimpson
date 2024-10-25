import { Type } from '@sinclair/typebox'
import { FastifyPluginAsync } from 'fastify'

export const NotFoundType = Type.Object({
  statusCode: Type.Literal(404),
  message: Type.String(),
  error: Type.Literal('Not Found'),
})

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  })
}

export default root
