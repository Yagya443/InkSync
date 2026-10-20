-- CreateTable
CREATE TABLE "StationaryOwner" (
    "id" SERIAL NOT NULL,
    "ownerName" TEXT NOT NULL,
    "shopName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "isOpen" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StationaryOwner_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StationaryOwner_email_key" ON "StationaryOwner"("email");

-- CreateIndex
CREATE UNIQUE INDEX "StationaryOwner_phone_key" ON "StationaryOwner"("phone");
