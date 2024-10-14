// src/services/RecipeService.ts

import { PrismaClient } from '@prisma/client'

interface IngredientMeasurementProps {
  ingredient_id?: string
  ingredient_name?: string
  ingredient_description?: string
  unit: string
  quantity: number
}

export interface CreateOneRecipeProps {
  name: string
  description?: string
  ingredient_measurements: IngredientMeasurementProps[]
}

export default class RecipeService {
  constructor(private prisma: PrismaClient) {}

  async createOneRecipe(props: CreateOneRecipeProps) {}

  async findManyRecipes() {}

  async findOneRecipe(recipeId: string) {}

  async updateOneRecipe(recipeId: string, data: Partial<CreateOneRecipeProps>) {}
}
