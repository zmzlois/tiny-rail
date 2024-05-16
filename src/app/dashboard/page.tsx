"use client";

import { ProjectSection } from "@/app/dashboard/_components/project-section";

export default function Page() {
  // user query, name, their workspace, subscription, account, projects within a workspace

  return (
    <div className="py-10 my-20">
      <ProjectSection />
    </div>
  );
}
