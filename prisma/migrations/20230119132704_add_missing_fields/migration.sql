/*
  Warnings:

  - Added the required column `comments` to the `Couple` table without a default value. This is not possible if the table is not empty.
  - Added the required column `church` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vocative` to the `Person` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Couple" ADD COLUMN     "comments" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Person" ADD COLUMN     "church" INTEGER NOT NULL,
ADD COLUMN     "vocative" TEXT NOT NULL;
