"use client";
import React, { Suspense } from "react";
import {
  ProjectCommand,
  ProjectCommandProps,
  CommandItems,
} from "./_components/project-command";
import { getUserRepos } from "@/server/github";
import { useEffect, useMemo, useRef } from "react";
import { useStore } from "@/store/user";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const [projects, setProjects] =
    React.useState<ProjectCommandProps>(newProject);

  const searchParam = useSearchParams().get("action");

  const username = useStore((state) => state.name);
  console.log("username", username);

  useMemo(async () => {
    console.log("searchParam", searchParam);

    if (searchParam === "github") {
      const commandItem = {
        title: "Select a Github repo",
        placeholder: "Search for a Github repo...",
        items: [] as CommandItems[],
      };
      await getUserRepos(username).then((data) => {
        data.map((repo: any) => {
          const title = repo.clone_url.split(".com/")[1].replace(".git", "");

          commandItem.items.push({
            title: title,
            action: repo.clone_url,
          });
        });
      });
      console.log("commandItem", commandItem);

      setProjects(commandItem);
    }
  }, [searchParam, username]);
  return (
    <div>
      <ProjectCommand props={projects} />
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
