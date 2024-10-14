import 'fastify'
import { PrismaClient } from '@prisma/client'
import RecipeService from './services/RecipeService'

declare module 'fastify' {
  interface FastifyInstance {
    prisma: PrismaClient
    recipeService: RecipeService
  }
}
