import { FastifyInstance } from 'fastify'
import sensible from '@fastify/sensible'
import cors from './plugins/cors'
import swagger from './plugins/swagger'
import prismaPlugin from './plugins/prisma'
import recipePlugin from './plugins/recipe'
import rootRoutes from './routes/root'
import recipeRoutes from './routes/recipes'

export default async function app(fastify: FastifyInstance) {
  fastify.register(sensible)

  fastify.register(cors)

  fastify.register(swagger)

  fastify.register(prismaPlugin)
  fastify.register(recipePlugin)

  fastify.register(rootRoutes)
  fastify.register(recipeRoutes)
}
