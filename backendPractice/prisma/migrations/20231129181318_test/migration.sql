/*
  Warnings:

  - Added the required column `CreatedAt` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "CreatedAt" TIMESTAMP(3) NOT NULL;
