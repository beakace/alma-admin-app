/*
  Warnings:

  - You are about to drop the column `weddingYear` on the `Couple` table. All the data in the column will be lost.
  - Added the required column `weddingDate` to the `Couple` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Couple" DROP COLUMN "weddingYear",
ADD COLUMN     "weddingDate" TEXT NOT NULL;
