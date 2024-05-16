import Link from "next/link";
export const ProjectCard = ({ project }: { project: Project }) => {
  const staticUrl = project.node.services.edges.map((item) => {
    item.node.deployments.edges.map((item) =>
      item.node.staticUrl !== undefined ? item.node.staticUrl : ""
    );
  }) as unknown as string[];

  const serviceCount = project.node.services.edges.length;
  return (
    <Link
      href={`/project/${project.node.id}`}
      className="rounded-lg bg-zinc-800/60 hover:bg-zinc-800/80 group border p-4 py-8 flex flex-col gap-16 lg:w-[calc(30%-1rem)] sm:w-[30%] w-[90%]  "
    >
      <h3 className="text-lg text-foreground/80 group:hover:text-foreground">
        {project.node.name}
      </h3>
      <div className="flex flex-col gap-2">
        <p className="text-xs">
          Last update: {project.node.updatedAt.split("T")[0]}
        </p>

        <p className="text-xs">
          {serviceCount} {serviceCount === 1 ? "service" : "services"}
        </p>
      </div>
    </Link>
  );
};
