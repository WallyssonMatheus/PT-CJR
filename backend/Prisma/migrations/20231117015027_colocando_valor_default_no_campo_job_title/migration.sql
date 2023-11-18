-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "profile_picture" BLOB,
    "gender" TEXT NOT NULL,
    "job_title" TEXT NOT NULL DEFAULT 'Desenvolvedor',
    "admin" BOOLEAN DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Users_job_title_fkey" FOREIGN KEY ("job_title") REFERENCES "JobTitle" ("name") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Users" ("admin", "created_at", "gender", "id", "job_title", "name", "password", "profile_picture", "updated_at", "username") SELECT "admin", "created_at", "gender", "id", "job_title", "name", "password", "profile_picture", "updated_at", "username" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
