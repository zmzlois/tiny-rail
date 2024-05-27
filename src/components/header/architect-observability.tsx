"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export const ArchitectObservability = () => {
  const path = usePathname();
  const router = useRouter();
  const [tab, setTab] = useState<"architecture" | "logs">("architecture");
  const projectId = path.split("/")[2];
  const serviceId = path.split("/")[4];

  console.table({ projectId, serviceId });

  useEffect(() => {
    if (tab === "logs") {
      router.push(`/project/${projectId}/logs`);
    }
    if (tab === "architecture") {
      router.push(`/project/${projectId}`);
    }

    if (!path.includes("logs")) {
      router.push(`/project/${projectId}`);
    }
  }, [tab, path]);
  return (
    <div className=" text-white ">
      <Tabs defaultValue="architecture" className="w-[400px] ">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger
            value="architecture"
            onClick={() => setTab("architecture")}
          >
            Architecture
          </TabsTrigger>
          <TabsTrigger value="logs" onClick={() => setTab("logs")}>
            Observability
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};
