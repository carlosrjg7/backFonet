/*
  Warnings:

  - A unique constraint covering the columns `[dni]` on the table `Cliente` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `cliente` ADD COLUMN `status` BOOLEAN NOT NULL DEFAULT true;

-- CreateIndex
CREATE UNIQUE INDEX `Cliente_dni_key` ON `Cliente`(`dni`);
