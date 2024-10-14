import fp from 'fastify-plugin'
import { prisma } from '../../recipestacker-db/src/client'

declare module 'fastify' {
  interface FastifyInstance {
    prisma: typeof prisma
  }
}

const prismaPlugin = fp(async (fastify) => {
  fastify.decorate('prisma', prisma)

  fastify.addHook('onClose', async () => {
    await fastify.prisma.$disconnect()
  })
})

export default prismaPlugin
