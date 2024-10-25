import { Prisma, PrismaClient } from '@prisma/client'
// import { capitalize } from 'lodash'

import { FastifyBaseLogger } from 'fastify'

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export const DEFAULT_TAKE = 15
export const DEFAULT_SKIP = 0

interface RecipeServiceProps {
  logger: FastifyBaseLogger
  prisma: PrismaClient
}

interface FindOneRecipeProps {
  recipe_id: string
}

interface FindManyRecipeProps {
  name: string
  sortColumn?: string
  sortOrder?: SortOrder
  take?: number
  skip?: number
}

interface CreateIngredientMeasurementProps {
  ingredient_id?: string
  ingredient_name: string
  unit: string
  quantity: number
}

interface UpdateOneRecipeProps {
  recipe_id: string
  name: string
  description: string
  ingredient_measurements: CreateIngredientMeasurementProps[]
}

interface CreateOneRecipeProps {
  name: string
  description: string
  ingredient_measurements: CreateIngredientMeasurementProps[]
}

interface GetRecipeOrderByProps {
  sortColumn: string
  sortOrder: SortOrder
}

export class RecipeService {
  logger: FastifyBaseLogger
  prisma: PrismaClient

  constructor({ logger, prisma }: RecipeServiceProps) {
    this.logger = logger
    this.prisma = prisma
  }

  getRecipeOrderBy({ sortColumn, sortOrder }: GetRecipeOrderByProps): Prisma.RecipeOrderByWithRelationInput {
    return {
      [sortColumn]: sortOrder,
    }
  }

  async findOneRecipe(props: FindOneRecipeProps) {
    this.logger.info({ props }, 'findOneRecipe')
    const { recipe_id } = props
    const recipe = await this.prisma.recipe.findFirst({
      where: {
        recipe_id,
      },
      include: {
        ingredient_measurements: {
          include: {
            ingredient: true,
          },
        },
      },
    })
    return recipe
  }

  async updateOneRecipe(props: UpdateOneRecipeProps) {
    this.logger.info({ props }, 'updateOneRecipe')
    const { recipe_id } = props
    const { user_id } = await this.prisma.user.findFirstOrThrow()
    const { ingredient_measurements, ...rest } = props
    const updatedRecipe = await this.prisma.recipe.update({
      where: {
        recipe_id,
      },
      data: {
        ...rest,
        user: {
          connect: { user_id },
        },
        ingredient_measurements: {
          upsert: ingredient_measurements?.map(({ ingredient_id, quantity, unit, ingredient_name }) => ({
            where: {
              ingredient_id_recipe_id:
                ingredient_id && recipe_id
                  ? {
                      ingredient_id,
                      recipe_id,
                    }
                  : undefined,
            },
            update: {
              ingredient_id_recipe_id: {
                ingredient_id,
                recipe_id,
              },
              quantity,
              unit,
            },
            create: {
              ingredient: {
                connectOrCreate: {
                  where: { ingredient_id },
                  create: {
                    // name: capitalize(ingredient_name),
                    name: ingredient_name,
                  },
                },
              },
              quantity,
              unit,
            },
          })),
        },
      },
    })
    return updatedRecipe
  }

  async findManyRecipes(props: FindManyRecipeProps) {
    this.logger.info({ props }, 'findManyRecipes')
    const { name, sortColumn = 'name', sortOrder = SortOrder.ASC, take = DEFAULT_TAKE, skip = DEFAULT_SKIP } = props
    const orderBy = this.getRecipeOrderBy({ sortColumn, sortOrder })
    const recipes = await this.prisma.recipe.findMany({
      where: {
        name,
      },
      orderBy,
      take,
      skip,
      include: {
        ingredient_measurements: {
          include: {
            ingredient: true,
          },
        },
      },
    })
    return recipes
  }

  async createOneRecipe(props: CreateOneRecipeProps) {
    this.logger.info({ props }, 'createOneRecipe')
    const { user_id } = await this.prisma.user.findFirstOrThrow()
    const { ingredient_measurements, ...rest } = props
    const newRecipe = await this.prisma.recipe
      .create({
        data: {
          ...rest,
          user: {
            connect: { user_id },
          },
          ingredient_measurements: {
            create: ingredient_measurements.map(({ ingredient_id, quantity, unit, ingredient_name }) => ({
              ingredient: ingredient_id
                ? {
                    connect: {
                      ingredient_id,
                    },
                  }
                : {
                    create: {
                      name: ingredient_name,
                    },
                  },
              quantity,
              unit,
            })),
          },
        },
      })
      .catch((err) => this.logger.error({ err }, 'Error creating recipe'))
    return newRecipe
  }
}
