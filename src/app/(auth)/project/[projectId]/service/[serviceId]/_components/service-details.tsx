"use client";

import { useQuery } from "@tanstack/react-query";
import { getProjectById } from "@/server/projects";
import { useRouter } from "next/navigation";
import { Cross2Icon } from "@radix-ui/react-icons";
import { DeploymentCard, ServiceMajorCard } from "./service-card";
import { DestroyCard } from "./service-destroy-card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { redeployService } from "@/server/service";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";
import { RandomSkeleton } from "@/components/ui/random-skeleton";
export const ServiceDetails = ({
  params,
}: {
  params: { projectId: string; serviceId: string };
}) => {
  const router = useRouter();
  const { projectId, serviceId } = params;
  const { data, error, isLoading } = useQuery({
    queryKey: ["service", serviceId],
    queryFn: async () => {
      return getProjectById({ projectId }).then((res) => {
        return {
          projectName: res.project.name! as string,
          services: res.services.map((item) => {
            return {
              id: item.id,
              name: item.name,
              environmentId: item.environmentId,
              url: item.url,
              updatedAt: item.updatedAt,
            };
          }),
        };
      });
    },
  });

  const service = data?.services.find((service) => service.id === serviceId);

  const serviceUrl = service?.url ?? null;

  function handleRedeploy() {
    toast.info("Redeploying service");
    // redeployService({
    //   serviceId,
    //   environmentId: service!.environmentId[0],
    // })
    // .then((res) => {
    //   toast.success("Service redeployed successfully");
    // })
    // .catch((err) => {
    //   console.log(err);
    //   toast.error("Failed to redeploy service");
    // });
  }

  if (isLoading)
    return (
      <ServiceMajorCard itemName="Loading">
        <div className="w-full py-10 h-full items-start flex flex-col justify-start">
          {" "}
          {...Array.from({ length: 3 }).map((_, index) => (
            <RandomSkeleton key={index} index={index} />
          ))}
        </div>
      </ServiceMajorCard>
    );
  if (error)
    return (
      <ServiceMajorCard itemName={"😭"}>
        Something went wrong 😳
      </ServiceMajorCard>
    );

  return (
    <ServiceMajorCard
      itemName={service?.name}
      params={params}
      className="flex flex-col gap-6 justify-between py-6"
    >
      <div className="fle flex-col space-y-4">
        <h1 className="text-3xl py-4 font-semibold">
          {service?.name ? service?.name : ""}
        </h1>
        <Separator />
        <div className="grid grid-cols-4 w-full gap-2 items-center ">
          <div className="col-span-3">
            {serviceUrl ? (
              <DeploymentCard url={serviceUrl} updatedAt={service!.updatedAt} />
            ) : (
              ""
            )}
          </div>
          <Button
            variant={"outline"}
            className="col-span-1"
            onClick={() => handleRedeploy()}
          >
            Redeploy
          </Button>
        </div>{" "}
      </div>

      <DestroyCard
        serviceId={serviceId}
        projectId={projectId}
        environmentId={service!.environmentId[0]}
      />
    </ServiceMajorCard>
  );
};
