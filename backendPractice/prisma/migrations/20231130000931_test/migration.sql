-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "referred_by_partner_id" BIGINT;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_referred_by_partner_id_fkey" FOREIGN KEY ("referred_by_partner_id") REFERENCES "Partner"("PartnerId") ON DELETE NO ACTION ON UPDATE NO ACTION;
