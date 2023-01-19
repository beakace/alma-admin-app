/*
  Warnings:

  - A unique constraint covering the columns `[coupleId]` on the table `Couple` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `coupleId` to the `Couple` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Couple" ADD COLUMN     "coupleId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Couple_coupleId_key" ON "Couple"("coupleId");
