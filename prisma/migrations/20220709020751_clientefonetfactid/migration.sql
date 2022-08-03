/*
  Warnings:

  - Made the column `clienteId` on table `factura` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `factura` DROP FOREIGN KEY `Factura_clienteId_fkey`;

-- AlterTable
ALTER TABLE `factura` MODIFY `clienteId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Factura` ADD CONSTRAINT `Factura_clienteId_fkey` FOREIGN KEY (`clienteId`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
