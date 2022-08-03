/*
  Warnings:

  - Added the required column `token` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `token` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cliente` ADD COLUMN `confirmed` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `token` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `usuario` ADD COLUMN `confirmed` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `token` VARCHAR(191) NOT NULL;
