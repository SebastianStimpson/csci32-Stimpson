import { PrismaClient } from '@prisma/client'
import fp from 'fastify-plugin'

export const FP_PRISMA = 'prisma'

// The use of fastify-plugin is required to be able
// to export the decorators to the outer scope
export default fp(async (fastify, opts) => {
  const prisma = new PrismaClient()
  fastify.decorate(FP_PRISMA, prisma)
})

// When using .decorate you have to specify added properties for Typescript
declare module 'fastify' {
  export interface FastifyInstance {
    prisma: PrismaClient
  }
}
