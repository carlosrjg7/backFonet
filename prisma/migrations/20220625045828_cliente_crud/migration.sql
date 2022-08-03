/*
  Warnings:

  - You are about to drop the column `confirmed` on the `cliente` table. All the data in the column will be lost.
  - You are about to drop the column `token` on the `cliente` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `cliente` DROP COLUMN `confirmed`,
    DROP COLUMN `token`;
