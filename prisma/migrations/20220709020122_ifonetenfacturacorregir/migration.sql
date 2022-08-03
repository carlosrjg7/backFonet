/*
  Warnings:

  - You are about to drop the column `idFonetClient` on the `cliente` table. All the data in the column will be lost.
  - You are about to drop the column `idFonetCliente` on the `factura` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[idFonetCliente]` on the table `Cliente` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `idFonetCliente` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `factura` DROP FOREIGN KEY `Factura_idFonetCliente_fkey`;

-- DropIndex
DROP INDEX `Cliente_idFonetClient_key` ON `cliente`;

-- AlterTable
ALTER TABLE `cliente` DROP COLUMN `idFonetClient`,
    ADD COLUMN `idFonetCliente` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `factura` DROP COLUMN `idFonetCliente`,
    ADD COLUMN `clienteId` INTEGER NULL,
    ADD COLUMN `idFonetClienteFact` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Cliente_idFonetCliente_key` ON `Cliente`(`idFonetCliente`);

-- AddForeignKey
ALTER TABLE `Factura` ADD CONSTRAINT `Factura_clienteId_fkey` FOREIGN KEY (`clienteId`) REFERENCES `Cliente`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
