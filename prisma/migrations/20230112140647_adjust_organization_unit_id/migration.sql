/*
  Warnings:

  - The primary key for the `OrganizationUnit` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `organizationUnitId` on the `AlmaEvent` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `organizationUnitId` on the `Couple` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `OrganizationUnit` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "AlmaEvent" DROP CONSTRAINT "AlmaEvent_organizationUnitId_fkey";

-- DropForeignKey
ALTER TABLE "Couple" DROP CONSTRAINT "Couple_organizationUnitId_fkey";

-- AlterTable
ALTER TABLE "AlmaEvent" DROP COLUMN "organizationUnitId",
ADD COLUMN     "organizationUnitId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Couple" DROP COLUMN "organizationUnitId",
ADD COLUMN     "organizationUnitId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "OrganizationUnit" DROP CONSTRAINT "OrganizationUnit_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD CONSTRAINT "OrganizationUnit_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Couple" ADD CONSTRAINT "Couple_organizationUnitId_fkey" FOREIGN KEY ("organizationUnitId") REFERENCES "OrganizationUnit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlmaEvent" ADD CONSTRAINT "AlmaEvent_organizationUnitId_fkey" FOREIGN KEY ("organizationUnitId") REFERENCES "OrganizationUnit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
