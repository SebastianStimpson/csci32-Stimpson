import fp from 'fastify-plugin'
import { RecipeService } from '../services/RecipeService.js'
import { FP_PRISMA } from './prisma.js'

export const FP_RECIPE_SERVICE = 'recipeService'

export interface RecipePluginOptions {
  // Specify Support plugin options here
}

// The use of fastify-plugin is required to be able
// to export the decorators to the outer scope
export default fp<RecipePluginOptions>(async (fastify, opts) => {
  const recipeService = new RecipeService({
    logger: fastify.log,
    prisma: fastify[FP_PRISMA],
  })
  fastify.decorate(FP_RECIPE_SERVICE, recipeService, [FP_PRISMA])
})

// When using .decorate you have to specify added properties for Typescript
declare module 'fastify' {
  export interface FastifyInstance {
    recipeService: RecipeService
  }
}
