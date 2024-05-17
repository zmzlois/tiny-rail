DROP TABLE "session";--> statement-breakpoint
DROP TABLE "verificationToken";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "createdAt";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "updatedAt";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "deleted";