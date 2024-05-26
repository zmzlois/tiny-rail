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
} from "./new-project";

export default function Page() {
  const [projects, setProjects] =
    React.useState<ProjectCommandProps>(newProject);

  const [authed, setAuthed] = React.useState(true);

  const action = useSearchParams().get("action");
  const path = usePathname() + `?action=${action}`;

  const username = useStore((state) => state.name);

  function handleSelect(item: CommandItems) {
    if (!item.action || item.action === "")
      throw new Error("No action provided");
    appendSearchParam({ key: "action", value: item.action });
  }

  useEffect(() => {
    if (!username) setAuthed(false);

    setAuthed(true);

    const item =
      projects !== "loading"
        ? projects !== "creating" &&
          projects.items.find((item) => item.action === action)
        : null;

    if (action === "" || !action) setProjects(newProject);
    if (action === "github") {
      handleGithub(setProjects, username);
    }
    if (action === "templates") {
      handleTemplates(setProjects);
    }

    if (
      action === "postgres" ||
      action === "redis" ||
      action === "mysql" ||
      action === "mongodb"
    ) {
      setProjects("creating");
      item && handleDatabase(item, setProjects);
    }
  }, [path, username, action, projects]);
  return (
    <div>
      <ProjectCommand props={projects} onSelect={handleSelect} path={path} />
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
