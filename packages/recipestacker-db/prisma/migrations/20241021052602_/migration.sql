/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - The required column `user_id` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `user_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`user_id`);

-- CreateTable
CREATE TABLE `Ingredient` (
    `ingredient_id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`ingredient_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Recipe` (
    `recipe_id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `user_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`recipe_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `IngredientMeasurement` (
    `ingredient_id` VARCHAR(191) NOT NULL,
    `recipe_id` VARCHAR(191) NOT NULL,
    `unit` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`ingredient_id`, `recipe_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
