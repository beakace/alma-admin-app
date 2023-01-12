/*
  Warnings:

  - Added the required column `almaEventId` to the `Couple` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organizationUnitId` to the `Couple` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Couple" ADD COLUMN     "almaEventId" TEXT NOT NULL,
ADD COLUMN     "organizationUnitId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "OrganizationUnit" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "OrganizationUnit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlmaEvent" (
    "id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "organizationUnitId" TEXT NOT NULL,

    CONSTRAINT "AlmaEvent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Couple" ADD CONSTRAINT "Couple_organizationUnitId_fkey" FOREIGN KEY ("organizationUnitId") REFERENCES "OrganizationUnit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Couple" ADD CONSTRAINT "Couple_almaEventId_fkey" FOREIGN KEY ("almaEventId") REFERENCES "AlmaEvent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlmaEvent" ADD CONSTRAINT "AlmaEvent_organizationUnitId_fkey" FOREIGN KEY ("organizationUnitId") REFERENCES "OrganizationUnit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
