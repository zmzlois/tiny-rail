ALTER TABLE "user" DROP CONSTRAINT "user_github_id_unique";--> statement-breakpoint
ALTER TABLE "account" ALTER COLUMN "providerAccountId" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "github_id";