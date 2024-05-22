import Link from "next/link";
import z from "zod";
import { selectProjectSchema, selectServiceSchema } from "@/db/schema/project";
export const ProjectCard = ({
  project,
  service,
}: {
  project: z.infer<typeof selectProjectSchema>;
  service?: z.infer<typeof selectServiceSchema>[];
}) => {
  const serviceCount = service && service.length;

  return (
    <Link
      href={`/project/${project.id}`}
      className="rounded-lg bg-zinc-800/60 hover:bg-zinc-800/80 group border p-4 py-8 flex flex-col gap-16 lg:w-[calc(30%-1rem)] sm:w-[30%] w-[90%]  "
    >
      <h3 className="text-lg text-foreground/80 group:hover:text-foreground">
        {project.name}
      </h3>
      <div className="flex flex-col gap-2">
        <p className="text-xs">
          Last update: {project.updatedAt.split("T")[0]}
        </p>

        <p className="text-xs">
          {serviceCount} {serviceCount === 1 ? "service" : "services"}
        </p>
      </div>
    </Link>
  );
};
