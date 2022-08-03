/*
  Warnings:

  - Added the required column `referencia` to the `Pago` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pago` ADD COLUMN `referencia` VARCHAR(191) NOT NULL,
    ADD COLUMN `statusBanco` INTEGER NOT NULL DEFAULT 0,
    MODIFY `status` ENUM('A', 'R', 'P') NOT NULL DEFAULT 'P';
