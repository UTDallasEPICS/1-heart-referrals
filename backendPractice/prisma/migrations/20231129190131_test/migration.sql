/*
  Warnings:

  - You are about to drop the column `referred_by_partner_id` on the `Client` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_referred_by_partner_id_fkey";

-- AlterTable
ALTER TABLE "Client" DROP COLUMN "referred_by_partner_id";
