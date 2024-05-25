ALTER TABLE "project_teams" RENAME COLUMN "projectId" TO "project_id";--> statement-breakpoint
ALTER TABLE "project_services" RENAME COLUMN "projectId" TO "external_id";--> statement-breakpoint
ALTER TABLE "projects" ADD COLUMN "external_id" varchar;--> statement-breakpoint
ALTER TABLE "project_services" ADD COLUMN "project_id" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "github_id" integer;--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_github_id_unique" UNIQUE("github_id");