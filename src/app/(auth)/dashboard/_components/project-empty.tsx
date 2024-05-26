"use client";
import { createEmptyProject } from "@/server/projects";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";

import { redirect, useRouter } from "next/navigation";
export const CreateEmptyProject = () => {
  const router = useRouter();
  const handleCreate = () => {
    toast("Creating new project...");
    createEmptyProject()
      .then((res) => {
        toast.success("Project created successfully");
        router.push(`/projects/${res.id}`);
      })
      .catch((e) => console.error(e));
  };

  return (
    <Button
      onClick={() => handleCreate()}
      variant={"outline"}
      className="flex items-center border rounded-md py-4 px-3 border-purple-600/60 space-x-2 cursor-pointer border-dotted "
    >
      <PlusIcon className="w-6 h-6 text-purple-600" />
      <span className="text-purple-400 font-light text-sm">
        New Project
      </span>{" "}
    </Button>
  );
};
