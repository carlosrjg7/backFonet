/*
  Warnings:

  - Added the required column `codigo` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `movil` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefono` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cliente` ADD COLUMN `codigo` VARCHAR(191) NOT NULL,
    ADD COLUMN `estado` VARCHAR(191) NOT NULL,
    ADD COLUMN `movil` VARCHAR(191) NOT NULL,
    ADD COLUMN `telefono` VARCHAR(191) NOT NULL;
