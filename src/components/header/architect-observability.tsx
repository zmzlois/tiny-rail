"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { usePathname, useRouter } from "next/navigation";

export const ArchitectObservability = () => {
  const path = usePathname();
  const router = useRouter();

  const projectId = path.split("/")[2];
  const serviceId = path.split("/")[4];

  console.table({ projectId, serviceId });

  function handleTabChange() {
    if (path.includes("/service")) {
      const route = path.split("/service");
      console.log("route", route);
      router.push(route[0] + "/logs");
    }
    router.push(path + "/logs");
  }
  return (
    <div className=" text-white ">
      <Tabs defaultValue="architecture" className="w-[400px] ">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger
            value="architecture"
            onClick={() => router.push(`/project/${projectId}`)}
          >
            Architecture
          </TabsTrigger>
          <TabsTrigger
            value="logs"
            onClick={() => router.push(`/project/${projectId}/logs`)}
          >
            Observability
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};
