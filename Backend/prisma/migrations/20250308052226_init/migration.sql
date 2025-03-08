-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Incident" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "affectedCount" INTEGER NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "injuredOrDead" BOOLEAN NOT NULL,
    "numInjuredOrDead" INTEGER
);
INSERT INTO "new_Incident" ("affectedCount", "contact", "date", "description", "district", "id", "injuredOrDead", "location", "name", "numInjuredOrDead", "status", "type") SELECT "affectedCount", "contact", "date", "description", "district", "id", "injuredOrDead", "location", "name", "numInjuredOrDead", "status", "type" FROM "Incident";
DROP TABLE "Incident";
ALTER TABLE "new_Incident" RENAME TO "Incident";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
