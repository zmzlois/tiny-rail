"use client";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  getProjectByDefaultWorkspace,
  getProjectById,
} from "@/server/projects";
import { useQuery } from "@tanstack/react-query";
import { RailwayLogo } from "@/icons/railway-logo";
import { ChevronDownIcon, SlashIcon } from "@radix-ui/react-icons";
import { Skeleton } from "../ui/skeleton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CustomError } from "@/lib/error";
import { useStore } from "@/store/user";

export const ProjectBreadcrumb = ({ path }: { path: string }) => {
  const projectId = path.split("/").pop();

  const update = useStore((state) => {
    return {
      projectName: state.projectName,
      updateProjectName: state.updateProjectName,
    };
  });

  // gl
  const [currentProject, setCurrentProject] = useState<any>(null);

  const {
    data: projects,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      return getProjectByDefaultWorkspace();
    },
  });

  useEffect(() => {
    if (!projectId) return;

    const project = projects?.find((res) => res.id === projectId);
    if (project) {
      setCurrentProject(project);
      update.updateProjectName(project.name);
    }
  }, [projectId, projects]);

  const name = (projects ?? []).find((res) => res.id === projectId);

  // useEffect(() => {
  //   currentProject && update.updateProjectName(currentProject.name!);
  // }, [currentProject, update]);

  if (isLoading)
    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard" className="font-semibold">
              Tiny Rail
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/projects"
              className="cursor-none"
              aria-disabled
            >
              <Skeleton className="w-[200px]" />
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );

  if (error)
    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard" className="font-semibold">
              Tiny Rail
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/projects"
              className="cursor-none"
              aria-disabled
            >
              Error loading project
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/dashboard" className="font-semibold">
            Tiny Rail
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex gap-2 items-center">
            <p className="text-primary/80 tracking-wide">
              {update.projectName ? update.projectName : "Not found"}
            </p>{" "}
            <ChevronDownIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full ">
            {projects?.map((item, index) => (
              <div key={item.name}>
                <DropdownMenuItem className="py-2 w-full px-3">
                  <Link
                    href={`/project/${item.id}`}
                    className="text-base text-primary/80 tracking-wide"
                  >
                    {item.name}
                  </Link>
                </DropdownMenuItem>
                {index !== projects!.length - 1 && <DropdownMenuSeparator />}
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
