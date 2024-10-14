import fp from 'fastify-plugin'
import RecipeService from '../services/RecipeService'

declare module 'fastify' {
  interface FastifyInstance {
    recipeService: RecipeService
  }
}

const recipePlugin = fp(async (fastify) => {
  const recipeService = new RecipeService(fastify.prisma)
  fastify.decorate('recipeService', recipeService)
})

export default recipePlugin
