"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { getProjectById } from "@/server/projects";
import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useStore } from "@/store/user";
import { useMemo } from "react";

export const ServiceCanva = ({ projectId }: { projectId: string }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["project"],
    queryFn: async () => {
      return getProjectById({ projectId }).then((res) => {
        return {
          projectName: res.project.name! as string,
          services: res.service.edges.map((item) => {
            return {
              id: item.node.id,
              name: item.node.name,
              updatedAt: item.node.updatedAt,
            };
          }),
        };
      });
    },
  });

  if (error) return <div>Something went wrong 😳</div>;
  if (isLoading)
    return (
      <div>
        <Skeleton className="w-[50vw]" />
        <Skeleton className="w-[40vw]" />
        <Skeleton className="w-[40vw]" />
      </div>
    );

  if (!data) return <p>Nothing in this project yet</p>;

  return (
    <div className="w-1/2 flex flex-wrap gap-10 container mx-auto">
      {" "}
      {data.services.length >= 1 &&
        data.services.map((item, index) => (
          <Link
            href={`/project/${projectId}/service/${item.id}`}
            key={item.name}
            className="w-1/2"
          >
            <Card>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>

              <CardFooter>
                <p>Updated at: {item.updatedAt.split("T")[0]}</p>
              </CardFooter>
            </Card>
          </Link>
        ))}
    </div>
  );
};
