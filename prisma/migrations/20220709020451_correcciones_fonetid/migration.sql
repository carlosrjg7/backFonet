-- DropForeignKey
ALTER TABLE `factura` DROP FOREIGN KEY `Factura_idPago_fkey`;

-- AlterTable
ALTER TABLE `factura` MODIFY `idPago` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Factura` ADD CONSTRAINT `Factura_idPago_fkey` FOREIGN KEY (`idPago`) REFERENCES `Pago`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
