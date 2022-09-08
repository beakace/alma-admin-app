-- CreateEnum
CREATE TYPE "Group" AS ENUM ('A', 'B', 'C', 'D', 'S', 'X');

-- CreateTable
CREATE TABLE "Couple" (
    "id" TEXT NOT NULL,
    "husbandId" TEXT NOT NULL,
    "wifeId" TEXT NOT NULL,
    "group" "Group" NOT NULL,
    "city" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "weddingYear" INTEGER NOT NULL,
    "invitedById" TEXT,

    CONSTRAINT "Couple_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Person" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "birthYear" INTEGER NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Couple_husbandId_key" ON "Couple"("husbandId");

-- CreateIndex
CREATE UNIQUE INDEX "Couple_wifeId_key" ON "Couple"("wifeId");

-- AddForeignKey
ALTER TABLE "Couple" ADD CONSTRAINT "Couple_husbandId_fkey" FOREIGN KEY ("husbandId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Couple" ADD CONSTRAINT "Couple_wifeId_fkey" FOREIGN KEY ("wifeId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Couple" ADD CONSTRAINT "Couple_invitedById_fkey" FOREIGN KEY ("invitedById") REFERENCES "Couple"("id") ON DELETE SET NULL ON UPDATE CASCADE;
