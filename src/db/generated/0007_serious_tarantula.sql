DO $$ BEGIN
 CREATE TYPE "public"."role" AS ENUM('owner', 'admin', 'member');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "team_members" ALTER COLUMN "role" SET DATA TYPE role;