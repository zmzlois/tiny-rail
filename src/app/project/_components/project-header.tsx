import { ProjectBreadcrumb } from "./project-breadcrumbs";
import { SlashIcon } from "@radix-ui/react-icons";
import { ArchitectObservability } from "./architect-observability";
import { UserButton } from "@/components/user-button";
export default function ProjectHeader() {
  return (
    <div className="bg-background py-10 items-center px-5 grid grid-cols-3">
      <ProjectBreadcrumb />
      <ArchitectObservability />
      <div className="border justify-end flex">
        {" "}
        <UserButton />
      </div>
    </div>
  );
}
