ALTER TABLE "account" ALTER COLUMN "providerAccountId" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "github_id" varchar;--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_github_id_unique" UNIQUE("github_id");