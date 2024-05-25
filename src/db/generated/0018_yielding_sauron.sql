ALTER TABLE "projects" RENAME COLUMN "workspaceId" TO "workspace_id";--> statement-breakpoint
ALTER TABLE "project_team_members" RENAME COLUMN "teamId" TO "team_id";--> statement-breakpoint
ALTER TABLE "project_team_members" RENAME COLUMN "userId" TO "user_id";--> statement-breakpoint
ALTER TABLE "projects" DROP CONSTRAINT "projects_workspaceId_workspace_id_fk";
--> statement-breakpoint
ALTER TABLE "project_team_members" DROP CONSTRAINT "project_team_members_teamId_project_teams_id_fk";
--> statement-breakpoint
ALTER TABLE "project_team_members" DROP CONSTRAINT "project_team_members_userId_user_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projects" ADD CONSTRAINT "projects_workspace_id_workspace_id_fk" FOREIGN KEY ("workspace_id") REFERENCES "public"."workspace"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project_team_members" ADD CONSTRAINT "project_team_members_team_id_project_teams_id_fk" FOREIGN KEY ("team_id") REFERENCES "public"."project_teams"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project_team_members" ADD CONSTRAINT "project_team_members_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
