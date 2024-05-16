"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { usePathname, useRouter } from "next/navigation";

export const ArchitectObservability = () => {
  const path = usePathname();
  const router = useRouter();

  function handleTabChange() {
    router.push(path + "/logs");
  }
  return (
    <div className=" text-white ">
      <Tabs defaultValue="architecture" className="w-[400px] ">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="architecture" onClick={() => router.back()}>
            Architecture
          </TabsTrigger>
          <TabsTrigger value="logs" onClick={handleTabChange}>
            Observability
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};
