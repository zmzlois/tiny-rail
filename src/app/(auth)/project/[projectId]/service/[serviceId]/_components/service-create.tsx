"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const CreateService = ({
  params,
}: {
  params: { projectId: string };
}) => {
  return (
    <div className=" absolute top-28 right-10 aspect-video ">
      <Link
        href={`/new?project=${params.projectId}&service=true`}
        className="flex items-center border rounded-md py-2 px-3 border-purple-600/60 space-x-2 cursor-pointer border-dotted "
      >
        <PlusIcon className="w-6 h-6 text-purple-600" />
        <span className="text-purple-300 font-light text-sm">
          New Service
        </span>{" "}
      </Link>
    </div>
  );
};
