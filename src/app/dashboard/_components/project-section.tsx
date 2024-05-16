import { ProjectCard } from "./project-card";
import { useQuery } from "@tanstack/react-query";

export const ProjectSection = () => {
  const projects: Project[] = [];
  const { data, error, isLoading } = useQuery({
    queryKey: ["user", "projects"],
    queryFn: async () => {
      const res = await fetch("/api/user/projects");

      const data = await res.json();

      return data["data"]["projects"]["edges"];
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="flex flex-col md:flex-row gap-8">
      {data.map((item: Project, index: number) => {
        return <ProjectCard key={index} project={item} />;
      })}
    </section>
  );
};
