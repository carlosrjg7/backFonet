/*
  Warnings:

  - Added the required column `codigoPago` to the `Pago` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pago` ADD COLUMN `codigoPago` VARCHAR(191) NOT NULL;
