"use client";
import React from "react";
import {
  ProjectCommand,
  ProjectCommandProps,
} from "./_components/project-command";

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

export default function Page() {
  return (
    <>
      <ProjectCommand props={newProject} />
    </>
  );
}
