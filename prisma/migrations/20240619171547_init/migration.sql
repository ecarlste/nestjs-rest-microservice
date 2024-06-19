-- CreateTable
CREATE TABLE "Joke" (
    "id" SERIAL NOT NULL,
    "setup" TEXT NOT NULL,
    "punchline" TEXT NOT NULL,

    CONSTRAINT "Joke_pkey" PRIMARY KEY ("id")
);
