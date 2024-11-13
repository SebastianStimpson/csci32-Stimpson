/*
  Warnings:

  - You are about to drop the `Ingredient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `IngredientMeasurement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Recipe` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Ingredient`;

-- DropTable
DROP TABLE `IngredientMeasurement`;

-- DropTable
DROP TABLE `Recipe`;

-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `Student` (
    `student_id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `emailVerified` DATETIME(3) NULL,
    `enrollmentNumber` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Student_email_key`(`email`),
    UNIQUE INDEX `Student_enrollmentNumber_key`(`enrollmentNumber`),
    INDEX `Student_student_id_idx`(`student_id`),
    PRIMARY KEY (`student_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Professor` (
    `professor_id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    INDEX `Professor_professor_id_idx`(`professor_id`),
    PRIMARY KEY (`professor_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Class` (
    `class_id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `professor_id` VARCHAR(191) NOT NULL,

    INDEX `Class_professor_id_idx`(`professor_id`),
    PRIMARY KEY (`class_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Enrollment` (
    `enrollment_id` VARCHAR(191) NOT NULL,
    `student_id` VARCHAR(191) NOT NULL,
    `class_id` VARCHAR(191) NOT NULL,

    INDEX `Enrollment_student_id_idx`(`student_id`),
    INDEX `Enrollment_class_id_idx`(`class_id`),
    PRIMARY KEY (`enrollment_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
