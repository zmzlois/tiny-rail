"use client";
import React from "react";
import {
  ProjectCommand,
  ProjectCommandProps,
} from "./_components/project-command";
import {
  ProjectContext,
  ProjectDispatchContext,
} from "./_components/project-context";

const newProject: ProjectCommandProps = {
  title: "New Project",
  placeholder: "Deploy a new project by typing...",
  items: [
    {
      title: "Deploy from Github repo",
    },
    {
      title: "Deploy from templates",
    },
    {
      title: "Deploy Postgres",
    },
    {
      title: "Deploy Redis",
    },
    {
      title: "Deploy MySQL",
    },
    {
      title: "Deploy MongoDB",
    },
    {
      title: "Empty project",
    },
  ],
};

export function reducer(state: any, action: any) {
  switch (action.type) {
    case "github":
      return { render: action.payload };
    default:
      return state;
  }
}
export default function Page() {
  const [state, dispatch] = React.useReducer(reducer, newProject);

  return (
    <ProjectContext.Provider value={state}>
      <ProjectDispatchContext.Provider value={dispatch}>
        <ProjectCommand props={state} />
      </ProjectDispatchContext.Provider>
    </ProjectContext.Provider>
  );
}
