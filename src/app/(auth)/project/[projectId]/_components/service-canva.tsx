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
import { useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

const cardNumber = 5;
const randomWidths = ["w-10", "w-20", "w-30", "w-40"];

const getRandomWidthClass = (id: number) =>
  randomWidths[id % randomWidths.length];

export const ServiceCanva = ({ projectId }: { projectId: string }) => {
  console.log("projectId", projectId);
  const path = usePathname();
  const [className, setClassName] = useState("");
  const { data, error, isLoading } = useQuery({
    queryKey: ["project", projectId],
    queryFn: async () => {
      return getProjectById({ projectId }).then((res) => {
        return {
          projectName: res.project.id! as string,
          services: res.services,
        };
      });
    },
  });

  useMemo(() => {
    if (!path.includes("service")) {
      setClassName("grid-cols-2 h-1/3 w-1/2");
    } else if (path.includes("service")) {
      setClassName("grid-cols-1 w-screen");
    }
  }, [path]);

  if (error) return <div>Something went wrong 😳</div>;
  if (isLoading)
    return (
      <div className="w-1/3 pt-10 lg:pt-20 flex flex-wrap absolute z-0 gap-4 container mx-auto">
        {...new Array(cardNumber).fill(0).map((_, index) => (
          <Card key={index} className="w-full">
            <CardHeader>
              <CardTitle>
                <Skeleton className="h-4 w-full" />
              </CardTitle>
              <div className={cn("text-sm text-muted-foreground", className)}>
                <Skeleton
                  className={`${getRandomWidthClass(
                    index + 1
                  )} inline-block h-4 mr-2`}
                />
                <Skeleton
                  className={`${getRandomWidthClass(
                    index + 2
                  )} inline-block h-4 mr-2`}
                />
                <Skeleton
                  className={`${getRandomWidthClass(
                    index + 3
                  )} inline-block h-4 mr-2`}
                />
              </div>
            </CardHeader>

            <CardFooter>
              <Skeleton className="w-60 h-3 mr-2" />
            </CardFooter>
          </Card>
        ))}
      </div>
    );

  if (!data) return <AddNewService path={path} />;

  if (data.services.length < 1) return <AddNewService path={path} />;

  return (
    <div
      className={cn(
        " items-center justify-center grid absolute z-0  container mx-auto transition-all",
        className
      )}
    >
      {" "}
      {data.services.length >= 1 &&
        data.services.map((item, index) => {
          return (
            <Link
              href={`/project/${projectId}/service/${item.id}`}
              key={item.id}
              className="w-[250px] m-2"
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
          );
        })}
    </div>
  );
};

const AddNewService = ({ path }: { path: string }) => {
  return (
    <div className="flex flex-col justify-start  bg-background p-4 border border-dashed border-accent_1 rounded-2xl items-center">
      <h3 className="text-lg font-medium text-start py-4">
        No services in this project..yet{" "}
      </h3>
      <Link href={`/project/${path.split("/")[2]}/service/new`}>
        <Button
          variant={"outline"}
          className="flex items-center gap-2 bg-background brightness-150 text-white p-2 rounded-md"
        >
          <PlusCircledIcon className="w-4 h-4" />
          <span>Add New Service</span>
        </Button>
      </Link>
    </div>
  );
};
