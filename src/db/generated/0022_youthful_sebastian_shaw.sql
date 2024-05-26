CREATE TABLE IF NOT EXISTS "service_deployments" (
	"external_id" varchar,
	"service_id" varchar NOT NULL,
	"environment_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	"deleted" boolean DEFAULT false NOT NULL,
	CONSTRAINT "service_deployments_external_id_unique" UNIQUE("external_id")
);
--> statement-breakpoint
ALTER TABLE "project_services" ADD COLUMN "url" varchar;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "service_deployments" ADD CONSTRAINT "service_deployments_service_id_project_services_id_fk" FOREIGN KEY ("service_id") REFERENCES "public"."project_services"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "service_deployments" ADD CONSTRAINT "service_deployments_environment_id_project_environments_id_fk" FOREIGN KEY ("environment_id") REFERENCES "public"."project_environments"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
