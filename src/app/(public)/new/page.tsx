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
import { handleGithub, handleTemplates } from "./new-project";

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
    if (action === "" || !action) setProjects(newProject);
    if (action === "github") {
      if (!username || username === "") setAuthed(false);
      setProjects("loading");
      handleGithub(setProjects, username);
    }
    if (action === "templates") {
      setProjects("loading");
      handleTemplates(setProjects, username);
    }
  }, [path, action]);
  return (
    <div>
      <ProjectCommand props={projects} onSelect={handleSelect} path={path} />
      {!authed && (
        <SignInDialog
          triggerText="Sign in to Github"
          open={!authed}
          path={path}
        />
      )}
    </div>
  );
}

const newProject: ProjectCommandProps = {
  title: "New Project",
  placeholder: "Deploy a new project by typing...",
  items: [
    {
      title: "Deploy from Github repo",
      action: "github",
    },
    {
      title: "Deploy from templates",
      action: "templates",
    },
    {
      title: "Deploy Postgres",
      action: "postgres",
    },
    {
      title: "Deploy Redis",
      action: "redis",
    },
    {
      title: "Deploy MySQL",
      action: "mysql",
    },
    {
      title: "Deploy MongoDB",
      action: "mongodb",
    },
    {
      title: "Empty project",
      action: "empty",
    },
  ],
};
