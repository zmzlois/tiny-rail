"use client";
import {
  createEmptyProject,
  getProjectByDefaultWorkspace,
} from "@/server/projects";
import { ProjectCard } from "./project-card";
import { useQuery } from "@tanstack/react-query";
import { CreateEmptyProject } from "./project-empty";
export const ProjectSection = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      return (await getProjectByDefaultWorkspace()).map((res) => {
        return {
          id: res.id,
          name: res.name,
        };
      });
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) {
    console.log("error", error);
    return <p>Error: Some error occured 😢 </p>;
  }

  if (!data) return <p>You don&apos;t have any projects yet!!</p>;

  return (
    <section className="flex flex-col container flex-wrap mx-auto md:flex-row gap-8">
      {data.length >= 1 ? (
        data.map((item, index: number) => {
          return <ProjectCard key={index} project={item} />;
        })
      ) : (
        <section className="flex w-full flex-col  items-center justify-center gap-10">
          <h3>You don&apos;t have any projects yet!!</h3>
          <CreateEmptyProject />
        </section>
      )}
    </section>
  );
};
