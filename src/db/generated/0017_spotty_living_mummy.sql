ALTER TABLE "workspace_members" RENAME COLUMN "workspaceId" TO "workspace_id";--> statement-breakpoint
ALTER TABLE "workspace_members" RENAME COLUMN "userId" TO "user_id";--> statement-breakpoint
ALTER TABLE "workspace" RENAME COLUMN "ownerId" TO "owner_id";--> statement-breakpoint
ALTER TABLE "project_team_members" DROP CONSTRAINT "project_team_members_userId_user_id_fk";
--> statement-breakpoint
ALTER TABLE "workspace_members" DROP CONSTRAINT "workspace_members_workspaceId_workspace_id_fk";
--> statement-breakpoint
ALTER TABLE "workspace_members" DROP CONSTRAINT "workspace_members_userId_user_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project_team_members" ADD CONSTRAINT "project_team_members_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "workspace_members" ADD CONSTRAINT "workspace_members_workspace_id_workspace_id_fk" FOREIGN KEY ("workspace_id") REFERENCES "public"."workspace"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "workspace_members" ADD CONSTRAINT "workspace_members_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
