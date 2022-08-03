/*
  Warnings:

  - Added the required column `fullname` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cliente` ADD COLUMN `fullname` VARCHAR(191) NOT NULL;
