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
import { useContext } from "react";
import useAppendSearchParam from "@/lib/useAppendSearchParam";
import appendSearchParam from "@/lib/useAppendSearchParam";

export type CommandItems = {
  icon?: React.ReactNode;
  title: string;
  action?: string;
};

export type ProjectCommandProps =
  | {
      title: string;
      placeholder?: string;
      items: CommandItems[];
    }
  | "loading";

export const ProjectCommand = ({
  props,
  onSelect,
}: {
  props: ProjectCommandProps;
  onSelect: (args: CommandItems) => void;
}) => {
  const router = useRouter();

  return (
    <div>
      <CommandDialog open={true}>
        {" "}
        <DialogPrimitive.Close
          onClick={() => router.back()}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 z-30 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <Cross2Icon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
        <h3 className="text-lg font-semibold text-center py-4">
          {props === "loading" ? <LoadingComponent /> : props.title}
        </h3>{" "}
        <CommandInput placeholder={"Deploy a new project by typing..."} />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {props === "loading" ? (
              <MultiLayerLoading />
            ) : (
              props.items.map((item) => (
                <CommandItem
                  key={item.title}
                  className="cursor-pointer"
                  onSelect={() => onSelect(item)}
                >
                  <div className="hover:text-primary flex gap-4 items-center">
                    {item.icon && item.icon}
                    <p>{item.title}</p>
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
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[150px]" />
      </div>
    </div>
  );
};

const MultiLayerLoading = () => {
  const number = 6;
  return (
    <div className="flex items-center justify-center w-full">
      <div className="space-y-2">
        {[...Array(number)].map((_, index) => (
          <Skeleton key={index} className="h-4 w-[250px]" />
        ))}
      </div>
    </div>
  );
};
