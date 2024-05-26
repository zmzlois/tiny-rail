"use client";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Skeleton } from "@/components/ui/skeleton";
import React, { Suspense } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeftIcon } from "@radix-ui/react-icons";

export type CommandItems = {
  /* if it is a template item there will be a code */
  code?: string;
  icon?: React.ReactNode;
  title: string;
  description?: string;
  image?: string;
  repo?: string;
  creator?: string;
  action?: string;
  branch?: string;
};

export type ProjectCommandProps =
  | {
      title: string;
      placeholder?: string;
      items: CommandItems[];
    }
  | "loading"
  | "creating";

export const ProjectCommand = ({
  props,
  onSelect,
  path,
}: {
  props: ProjectCommandProps;
  onSelect: (args: CommandItems) => void;
  path: string;
}) => {
  const router = useRouter();

  return (
    <div>
      <CommandDialog open={true}>
        {" "}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 opacity-75 absolute left-4 top-4"
        >
          <ChevronLeftIcon className="h-4 w-4" />
          <span className="text-primary text-sm">Back</span>
        </button>
        <DialogPrimitive.Close
          onClick={() => router.back()}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 z-30 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <Cross2Icon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
        <h3 className="text-lg font-semibold text-center py-4">
          {props === "loading" ? (
            <LoadingComponent />
          ) : props === "creating" ? (
            // TODO: Implement creating state.
            "Creating..."
          ) : (
            props.title
          )}
        </h3>{" "}
        <CommandInput placeholder={"Deploy a new project by typing..."} />
        <CommandList>
          <CommandEmpty>Loading...</CommandEmpty>
          <CommandGroup>
            {props === "loading" ? (
              <MultiLayerLoading />
            ) : props === "creating" ? (
              ""
            ) : (
              // "TODO: Implement creating state."
              props.items.map((item) => (
                <CommandItem
                  key={item.title}
                  className="cursor-pointer"
                  onSelect={() => onSelect(item)}
                >
                  <div className="hover:text-primary flex flex-col gap-2 items-start">
                    <p className="text-primary">{item.title}</p>
                    {item.creator && <sub>{item.creator}</sub>}
                    {item.description && <p>{item.description}</p>}
                  </div>
                </CommandItem>
              ))
            )}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
};

const LoadingComponent = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="space-y-2">
        <Skeleton className="h-4 w-[300px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};

const MultiLayerLoading = () => {
  const number = 6;
  return (
    <div className="flex items-center justify-center w-full">
      <div className="space-y-4">
        {[...Array(number)].map((_, index) => (
          <Skeleton key={index} className="h-4  w-[400px]" />
        ))}
      </div>
    </div>
  );
};
