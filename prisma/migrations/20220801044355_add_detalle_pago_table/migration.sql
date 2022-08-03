/*
  Warnings:

  - Added the required column `detalle` to the `Pago` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pago` ADD COLUMN `detalle` VARCHAR(191) NOT NULL;
