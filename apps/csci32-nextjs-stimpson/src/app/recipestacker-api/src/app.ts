import { FastifyInstance } from 'fastify'
import sensible from '@fastify/sensible'
import cors from '@fastify/cors'
import swagger from '@fastify/swagger'
import swaggerUI from '@fastify/swagger-ui'
import rootRoutes from './routes/root'
import recipeRoutes from './routes/recipes'
import prismaPlugin from './plugins/prisma'
import recipePlugin from './plugins/recipe'

export default async function app(fastify: FastifyInstance) {
  fastify.register(sensible)
  fastify.register(cors, { origin: '*' })

  fastify.register(swagger, {
    swagger: {
      info: {
        title: 'RecipeStacker API',
        description: 'API documentation for RecipeStacker',
        version: '1.0.0',
      },
    },
  })

  fastify.register(swaggerUI, { routePrefix: '/docs' })

  fastify.register(prismaPlugin)
  fastify.register(recipePlugin)

  fastify.register(rootRoutes)
  fastify.register(recipeRoutes)
}
