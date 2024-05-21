"use client";
import React, { Dispatch, Suspense } from "react";
import {
  ProjectCommand,
  ProjectCommandProps,
  CommandItems,
} from "./_components/project-command";
import { getUserRepos } from "@/server/github";
import { useEffect, useMemo, useRef } from "react";
import { useStore } from "@/store/user";
import { useSearchParams } from "next/navigation";
import appendSearchParam from "@/lib/useAppendSearchParam";
import { SignInDialog } from "@/components/sign-in-dialog";
import { usePathname } from "next/navigation";
import { validateRequest } from "@/lib/lucia";

export default function Page() {
  const [projects, setProjects] =
    React.useState<ProjectCommandProps>(newProject);

  const [authed, setAuthed] = React.useState(true);

  const action = useSearchParams().get("action");
  const path = usePathname() + `?action=${action}`;
  console.log("[new/page.tsx] path", path);
  const username = useStore((state) => state.name);

  function handleSelect(item: CommandItems) {
    if (!item.action || item.action === "")
      throw new Error("No action provided");
    appendSearchParam({ key: "action", value: item.action });
  }

  useEffect(() => {
    if (action === "github") {
      if (!username || username === "") setAuthed(false);
      console.log("path", path);
      setProjects("loading");

      handleGithub(setProjects, username);
    }
  }, [path]);
  return (
    <div>
      <ProjectCommand props={projects} onSelect={handleSelect} />
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

function handleGithub(
  setProjects: Dispatch<ProjectCommandProps>,
  username: string
) {
  const commandItem = {
    title: "Select a Github repo",
    placeholder: "Search for a Github repo...",
    items: [] as CommandItems[],
  };

  getUserRepos(username).then((data) => {
    data.map((repo: any) => {
      const title = repo.clone_url.split(".com/")[1].replace(".git", "");

      commandItem.items.push({
        title: title,
        action: repo.clone_url,
      });
    });
    setProjects(commandItem);
  });
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
