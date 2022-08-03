/*
  Warnings:

  - You are about to alter the column `idFonetCliente` on the `cliente` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `idFonetCliente` on the `factura` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `factura` DROP FOREIGN KEY `Factura_idFonetCliente_fkey`;

-- AlterTable
ALTER TABLE `cliente` MODIFY `idFonetCliente` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `factura` MODIFY `idFonetCliente` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Factura` ADD CONSTRAINT `Factura_idFonetCliente_fkey` FOREIGN KEY (`idFonetCliente`) REFERENCES `Cliente`(`idFonetCliente`) ON DELETE RESTRICT ON UPDATE CASCADE;
