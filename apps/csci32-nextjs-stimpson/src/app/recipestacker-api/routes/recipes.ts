import { FastifyInstance } from 'fastify'
import { Type, Static } from '@sinclair/typebox'

const IngredientMeasurementSchema = Type.Object({
  ingredient_id: Type.Optional(Type.String()),
  ingredient_name: Type.Optional(Type.String()),
  ingredient_description: Type.Optional(Type.String()),
  unit: Type.String(),
  quantity: Type.Number(),
})

const CreateRecipeSchema = Type.Object({
  name: Type.String(),
  description: Type.Optional(Type.String()),
  ingredient_measurements: Type.Array(IngredientMeasurementSchema),
})

type CreateRecipe = Static<typeof CreateRecipeSchema>

const RecipeSchema = Type.Object({
  id: Type.String(),
  name: Type.String(),
  description: Type.Optional(Type.String()),
})

const IngredientSchema = Type.Object({
  id: Type.String(),
  name: Type.String(),
  description: Type.Optional(Type.String()),
})

const IngredientMeasurementResponseSchema = Type.Object({
  quantity: Type.Number(),
  unit: Type.String(),
  ingredient: IngredientSchema,
})

const RecipeWithIngredientsSchema = Type.Intersect([
  RecipeSchema,
  Type.Object({
    ingredient_measurements: Type.Array(IngredientMeasurementResponseSchema),
  }),
])

export default async function recipeRoutes(fastify: FastifyInstance) {
  fastify.post<{ Body: CreateRecipe }>(
    '/recipes',
    {
      schema: {
        body: CreateRecipeSchema,
        response: {
          201: RecipeSchema,
        },
      },
    },
    async (request, reply) => {
      const recipe = await fastify.recipeService.createOneRecipe(request.body)
      reply.code(201).send(recipe)
    },
  )

  fastify.get(
    '/recipes',
    {
      schema: {
        response: {
          200: Type.Array(RecipeSchema),
        },
      },
    },
    async (request, reply) => {
      const recipes = await fastify.recipeService.findManyRecipes()
      reply.send(recipes)
    },
  )

  fastify.get<{ Params: { id: string } }>(
    '/recipes/:id',
    {
      schema: {
        params: Type.Object({ id: Type.String() }),
        response: {
          200: RecipeWithIngredientsSchema,
        },
      },
    },
    async (request, reply) => {
      const recipe = await fastify.recipeService.findOneRecipe(request.params.id)
      if (!recipe) {
        return reply.notFound()
      }
      reply.send(recipe)
    },
  )

  fastify.put<{ Params: { id: string }; Body: Partial<CreateRecipe> }>(
    '/recipes/:id',
    {
      schema: {
        params: Type.Object({ id: Type.String() }),
        body: Type.Partial(CreateRecipeSchema),
        response: {
          200: RecipeSchema,
        },
      },
    },
    async (request, reply) => {
      const recipe = await fastify.recipeService.updateOneRecipe(request.params.id, request.body)
      if (!recipe) {
        return reply.notFound()
      }
      reply.send(recipe)
    },
  )
}
