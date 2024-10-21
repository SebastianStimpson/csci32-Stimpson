import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import { Type } from '@sinclair/typebox'
import { FastifyPluginAsync } from 'fastify'

export const getRecipeSchema = {
  querystring: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      sortColumn: { type: 'string' },
      sortOrder: { type: 'string' },
      take: { type: 'number' },
      skip: { type: 'number' },
    },
  },
}

export const RecipeNotFoundType = Type.Object({
  statusCode: Type.Literal(404),
  message: Type.String(),
  error: Type.Literal('Not Found'),
})

export const UpsertIngredientMeasurementTypeBoxType = Type.Object({
  ingredient_id: Type.Optional(Type.String()),
  ingredient_name: Type.String(),
  unit: Type.String(),
  quantity: Type.Number(),
})

export const IngredientMeasurementTypeBoxType = Type.Object({
  ingredient: Type.Object({
    ingredient_id: Type.String(),
    name: Type.Union([Type.String(), Type.Null()]),
    description: Type.Union([Type.String(), Type.Null()]),
  }),
  unit: Type.String(),
  quantity: Type.Number(),
})

export const CreateRecipeTypeBoxType = Type.Object({
  name: Type.String(),
  description: Type.String(),
  ingredient_measurements: Type.Array(UpsertIngredientMeasurementTypeBoxType),
})

export const UpdateRecipeTypeBoxType = Type.Object({
  name: Type.Optional(Type.String()),
  description: Type.Optional(Type.String()),
  ingredient_measurements: Type.Optional(Type.Array(UpsertIngredientMeasurementTypeBoxType)),
})

export const RecipeType = Type.Object({
  recipe_id: Type.String(),
  name: Type.Union([Type.String(), Type.Null()]),
  description: Type.Union([Type.String(), Type.Null()]),
  user_id: Type.String(),
  ingredient_measurements: Type.Array(IngredientMeasurementTypeBoxType),
})

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.withTypeProvider<TypeBoxTypeProvider>().get(
    '/recipes',
    {
      schema: {
        tags: ['Endpoint: Get all recipes'],
        description: 'Endpoint: Get all recipes',
        response: {
          200: Type.Array(RecipeType),
          404: RecipeNotFoundType,
        },
      },
    },
    async function (request: any, reply) {
      const recipes = await fastify.recipeService.findManyRecipes({
        name: request.query.name,
        sortColumn: request.query.sortColumn,
        sortOrder: request.query.sortOrder,
        take: request.query.take,
        skip: request.query.skip,
      })
      if (recipes) {
        return reply.send(recipes)
      } else {
        return reply.notFound()
      }
    },
  )
  fastify.get(
    '/recipes/:id',
    {
      schema: {
        tags: ['Endpoint: Get one recipe'],
        description: 'Endpoint: Get one recipe',
        response: {
          200: RecipeType,
          404: RecipeNotFoundType,
        },
      },
    },
    async function (request: any, reply) {
      return fastify.recipeService.findOneRecipe({
        recipe_id: request.params.id,
      })
    },
  )
  fastify.withTypeProvider<TypeBoxTypeProvider>().post(
    '/recipes',
    {
      schema: {
        tags: ['Endpoint: Create a recipe'],
        description: 'End to create a recipe',
        body: CreateRecipeTypeBoxType,
        response: {
          200: Type.Object({ recipe_id: Type.String() }),
          400: Type.Object({ message: Type.String() }),
        },
      },
    },
    async function (request, reply) {
      return fastify.recipeService.createOneRecipe({
        name: request.body.name,
        description: request.body.description,
        ingredient_measurements: request.body.ingredient_measurements,
      })
    },
  )
  fastify.put(
    '/recipes/:id',
    {
      schema: {
        tags: ['Endpoint: Update a recipe'],
        description: 'Endpoint to update a recipe',
        body: UpdateRecipeTypeBoxType,
        response: {
          200: Type.Object({ recipe_id: Type.String() }),
          400: Type.Object({ message: Type.String() }),
        },
      },
    },
    async function (request: any, reply) {
      return fastify.recipeService.updateOneRecipe({
        recipe_id: request.params.id,
        name: request.body.name,
        description: request.body.description,
        ingredient_measurements: request.body.ingredient_measurements,
      })
    },
  )
}

export default root
