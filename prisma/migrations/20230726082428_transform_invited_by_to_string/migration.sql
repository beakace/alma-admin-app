/*
  Warnings:

  - You are about to drop the column `invitedById` on the `Couple` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Couple" DROP CONSTRAINT "Couple_invitedById_fkey";

-- AlterTable
ALTER TABLE "Couple" DROP COLUMN "invitedById",
ADD COLUMN     "invitedBy" TEXT,
ALTER COLUMN "comments" DROP NOT NULL;
