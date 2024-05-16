"use client";

import { ProjectSection } from "./_components/project-section";
import { SelectWorkspace } from "./_components/select-workspace";
import { CreateProject } from "./_components/create-project";

export default function Page() {
  // user query, name, their workspace, subscription, account, projects within a workspace

  return (
    <div className="py-10  flex flex-col gap-10">
      <div className="flex items-center justify-between">
        {" "}
        <SelectWorkspace />
        <CreateProject />
      </div>
      <ProjectSection />
    </div>
  );
}
