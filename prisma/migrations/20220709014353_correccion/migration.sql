/*
  Warnings:

  - You are about to drop the column `idFonetCliente` on the `cliente` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[idFonetClient]` on the table `Cliente` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `idFonetClient` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `factura` DROP FOREIGN KEY `Factura_idFonetCliente_fkey`;

-- DropIndex
DROP INDEX `Cliente_idFonetCliente_key` ON `cliente`;

-- AlterTable
ALTER TABLE `cliente` DROP COLUMN `idFonetCliente`,
    ADD COLUMN `idFonetClient` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Cliente_idFonetClient_key` ON `Cliente`(`idFonetClient`);

-- AddForeignKey
ALTER TABLE `Factura` ADD CONSTRAINT `Factura_idFonetCliente_fkey` FOREIGN KEY (`idFonetCliente`) REFERENCES `Cliente`(`idFonetClient`) ON DELETE RESTRICT ON UPDATE CASCADE;
