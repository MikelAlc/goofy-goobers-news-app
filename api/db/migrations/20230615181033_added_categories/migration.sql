-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "hashedPassword" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "resetToken" TEXT,
    "resetTokenExpiresAt" DATETIME,
    "general" BOOLEAN NOT NULL DEFAULT true,
    "business" BOOLEAN NOT NULL DEFAULT false,
    "entertainment" BOOLEAN NOT NULL DEFAULT false,
    "health" BOOLEAN NOT NULL DEFAULT false,
    "science" BOOLEAN NOT NULL DEFAULT false,
    "sports" BOOLEAN NOT NULL DEFAULT false,
    "technology" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_User" ("email", "hashedPassword", "id", "name", "resetToken", "resetTokenExpiresAt", "salt") SELECT "email", "hashedPassword", "id", "name", "resetToken", "resetTokenExpiresAt", "salt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
