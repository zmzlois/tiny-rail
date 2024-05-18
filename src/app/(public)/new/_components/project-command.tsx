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
import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useContext } from "react";

type CommandItems = {
  icon?: React.ReactNode;
  title: string;
  action?: string;
};

export type ProjectCommandProps = {
  title: string;
  placeholder?: string;
  items: CommandItems[];
};

export const ProjectCommand = ({ props }: { props: ProjectCommandProps }) => {
  const [open, setOpen] = React.useState(true);

  const router = useRouter();
  return (
    <div>
      <CommandDialog open={true} onOpenChange={setOpen}>
        {" "}
        <DialogPrimitive.Close
          onClick={() => router.back()}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 z-30 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <Cross2Icon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
        <h3 className="text-lg font-semibold text-center py-4">
          {props.title}
        </h3>{" "}
        <CommandInput
          placeholder={
            props.placeholder
              ? props.placeholder
              : "Deploy a new project by typing..."
          }
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {props.items.map((item) => (
              <CommandItem
                key={item.title}
                className="cursor-pointer "
                onClick={() => item.action}
              >
                <div className="hover:text-primary flex gap-4 items-center">
                  {item.icon && item.icon}
                  <p>{item.title}</p>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
};
