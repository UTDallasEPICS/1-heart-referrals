-- CreateTable
CREATE TABLE "Admin" (
    "AdminId" BIGSERIAL NOT NULL,
    "FirstName" VARCHAR(100) NOT NULL,
    "LastName" VARCHAR(100) NOT NULL,
    "WorkTitle" VARCHAR(200) NOT NULL,
    "Phone" VARCHAR(15) NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" VARCHAR(100) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("AdminId")
);

-- CreateTable
CREATE TABLE "Client" (
    "ClientId" BIGSERIAL NOT NULL,
    "FirstName" VARCHAR(100) NOT NULL,
    "LastName" VARCHAR(100) NOT NULL,
    "DateofBirth" DATE NOT NULL,
    "Phone" VARCHAR(15) NOT NULL,
    "Email" TEXT NOT NULL,
    "ResidenceType" VARCHAR(50) NOT NULL,
    "Address" TEXT NOT NULL,
    "Citizenship" VARCHAR(100),
    "Gender" VARCHAR(100),
    "Race" VARCHAR(100),
    "Ethnicity" VARCHAR(100),
    "MonthlyIncome" INTEGER,
    "MilitaryAffiliation" VARCHAR(100),
    "PreferredLanguage" VARCHAR(50),
    "HouseholdSize" SMALLINT,
    "BelowEighteen" SMALLINT,
    "WorkingAge" SMALLINT,
    "Seniors" SMALLINT,
    "Homeless" BOOLEAN,
    "EmployedOrNot" BOOLEAN,
    "ServicesSeeking" TEXT NOT NULL,
    "AdditionalInfo" TEXT,
    "Services" TEXT NOT NULL,
    "ServicesDescribe" TEXT NOT NULL,
    "SignBox" BOOLEAN NOT NULL,
    "referred_by_partner_id" BIGINT,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("ClientId")
);

-- CreateTable
CREATE TABLE "Partner" (
    "PartnerId" BIGSERIAL NOT NULL,
    "TimeZone" TIMESTAMPTZ(6) NOT NULL,
    "ServiceType" TEXT NOT NULL,
    "ProgramDelivery" VARCHAR(100) NOT NULL,
    "Phone" VARCHAR(15) NOT NULL,
    "Email" TEXT NOT NULL,
    "Address" TEXT NOT NULL,
    "ReferralCount" BIGINT NOT NULL,
    "PartnerPrograms" TEXT NOT NULL,

    CONSTRAINT "Partner_pkey" PRIMARY KEY ("PartnerId")
);

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_referred_by_partner_id_fkey" FOREIGN KEY ("referred_by_partner_id") REFERENCES "Partner"("PartnerId") ON DELETE NO ACTION ON UPDATE NO ACTION;
