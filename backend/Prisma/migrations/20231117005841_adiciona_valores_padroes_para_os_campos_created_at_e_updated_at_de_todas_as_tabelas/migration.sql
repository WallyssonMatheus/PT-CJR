-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Posts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "update_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" DATETIME NOT NULL,
    CONSTRAINT "Posts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Posts" ("content", "created_at", "id", "update_at", "user_id") SELECT "content", "created_at", "id", "update_at", "user_id" FROM "Posts";
DROP TABLE "Posts";
ALTER TABLE "new_Posts" RENAME TO "Posts";
CREATE TABLE "new_JobTitle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "team" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_JobTitle" ("created_at", "id", "name", "team") SELECT "created_at", "id", "name", "team" FROM "JobTitle";
DROP TABLE "JobTitle";
ALTER TABLE "new_JobTitle" RENAME TO "JobTitle";
CREATE UNIQUE INDEX "JobTitle_name_key" ON "JobTitle"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
