"use client";
import React, { Dispatch, Suspense } from "react";
import {
  ProjectCommand,
  ProjectCommandProps,
  CommandItems,
} from "./_components/project-command";
import { useEffect, useMemo, useRef } from "react";
import { useStore } from "@/store/user";
import { useSearchParams } from "next/navigation";
import appendSearchParam from "@/lib/useAppendSearchParam";
import { SignInDialog } from "@/components/sign-in-dialog";
import { usePathname } from "next/navigation";
import {
  handleDatabase,
  handleGithub,
  handleTemplates,
  newProject,
  handleRepoDeploy,
} from "./new-project";
import { toast } from "sonner";

export default function Page() {
  const [projects, setProjects] =
    React.useState<ProjectCommandProps>(newProject);

  const action = useSearchParams().get("action");

  const projectId = useSearchParams().get("project");

  const isService = projectId !== null;
  const path = usePathname() + `?action=${action}`;

  const username = useStore((state) => state.name);
  const authed = username !== "";

  function handleSelect(item: CommandItems) {
    if (!item.action || item.action === "")
      throw new Error("No action provided");
    appendSearchParam({ key: "action", value: item.action });
  }

  useEffect(() => {
    console.table({
      path,
      authed,
      action,
      projectId,
    });

    const item =
      projects !== "loading"
        ? projects !== "creating" &&
          projects.items.find((item) => item.action === action)
        : null;

    if (action === "" || !action) setProjects(newProject);
    if (action === "github") {
      toast.info("Fetching Github repos...");
      handleGithub(setProjects, username, projectId);
    }
    if (action === "templates") {
      toast.info("Fetching templates...");
      handleTemplates(setProjects, projectId);
    }

    if (
      action === "postgres" ||
      action === "redis" ||
      action === "mysql" ||
      action === "mongodb"
    ) {
      item && handleDatabase(item, setProjects, projectId);
    }

    if (action?.includes("/")) {
      console.log("[new/page]: Deploying repo");
      item && handleRepoDeploy(item, projectId);
    }
  }, [path, authed, action, projectId]);

  return (
    <div>
      <ProjectCommand
        props={projects}
        isService={isService}
        onSelect={handleSelect}
        path={path}
      />
      {authed === false && (
        <SignInDialog
          triggerText="Sign in to Github"
          open={!authed}
          path={path}
        />
      )}
    </div>
  );
}
