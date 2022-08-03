/*
  Warnings:

  - You are about to alter the column `status` on the `factura` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.
  - A unique constraint covering the columns `[idFonetCliente]` on the table `Cliente` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idFonetFactura]` on the table `Factura` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `idFonetCliente` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emitido` to the `Factura` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `Factura` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idFonetCliente` to the `Factura` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idFonetFactura` to the `Factura` table without a default value. This is not possible if the table is not empty.
  - Added the required column `impuesto` to the `Factura` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vencimiento` to the `Factura` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cliente` ADD COLUMN `idFonetCliente` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `factura` ADD COLUMN `emitido` VARCHAR(191) NOT NULL,
    ADD COLUMN `estado` VARCHAR(191) NOT NULL,
    ADD COLUMN `idFonetCliente` VARCHAR(191) NOT NULL,
    ADD COLUMN `idFonetFactura` INTEGER NOT NULL,
    ADD COLUMN `impuesto` DOUBLE NOT NULL,
    ADD COLUMN `vencimiento` VARCHAR(191) NOT NULL,
    MODIFY `status` BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX `Cliente_idFonetCliente_key` ON `Cliente`(`idFonetCliente`);

-- CreateIndex
CREATE UNIQUE INDEX `Factura_idFonetFactura_key` ON `Factura`(`idFonetFactura`);

-- AddForeignKey
ALTER TABLE `Factura` ADD CONSTRAINT `Factura_idFonetCliente_fkey` FOREIGN KEY (`idFonetCliente`) REFERENCES `Cliente`(`idFonetCliente`) ON DELETE RESTRICT ON UPDATE CASCADE;
