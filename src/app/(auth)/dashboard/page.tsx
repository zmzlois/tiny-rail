import { ProjectSection } from "./_components/project-section";
import { SelectWorkspace } from "./_components/select-workspace";
import { CreateProject } from "./_components/create-project";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getProjectByDefaultWorkspace } from "@/server/projects";

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["projects"],
    queryFn: getProjectByDefaultWorkspace,
  });

  // user query, name, their workspace, subscription, account, projects within a workspace

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="py-10  flex flex-col gap-10">
        <div className="flex items-center justify-between">
          {" "}
          <SelectWorkspace />
          <CreateProject />
        </div>
        <ProjectSection />
      </div>
    </HydrationBoundary>
  );
}
