-- CreateTable
CREATE TABLE "JsonObject" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data" TEXT NOT NULL,

    CONSTRAINT "JsonObject_pkey" PRIMARY KEY ("id")
);
