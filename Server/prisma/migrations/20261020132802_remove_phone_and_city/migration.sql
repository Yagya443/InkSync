/*
  Warnings:

  - You are about to drop the column `city` on the `StationaryOwner` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `StationaryOwner` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "StationaryOwner_phone_key";

-- AlterTable
ALTER TABLE "StationaryOwner" DROP COLUMN "city",
DROP COLUMN "phone";
