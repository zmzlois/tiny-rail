import { getProjectByDefaultWorkspace } from "@/server/projects";
import { ProjectCard } from "./project-card";
import { useQuery } from "@tanstack/react-query";

export const ProjectSection = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["user", "projects"],
    queryFn: async () => {
      return getProjectByDefaultWorkspace();
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: Some error occured 😢 </p>;

  if (!data) return <p>You don&apos;t have any projects yet!!</p>;

  return (
    <section className="flex flex-col md:flex-row gap-8">
      {data ? (
        data.map((item, index: number) => {
          return <ProjectCard key={index} project={item} />;
        })
      ) : (
        <p>You don&apos;t have any projects yet!!</p>
      )}
    </section>
  );
};
