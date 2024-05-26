"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

import { PlusIcon } from "@radix-ui/react-icons";
import React from "react";
export const CreateProject = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  return (
    <Dialog>
      <DialogTrigger onClick={() => setOpen(!open)}>
        <Link
          href="/new"
          className="flex items-center border rounded-md py-1 px-3 border-purple-600/60 space-x-2 cursor-pointer"
        >
          <PlusIcon className="w-6 h-6 text-purple-600" />
          <span className="text-purple-400 font-light text-sm">
            New Project
          </span>{" "}
        </Link>
      </DialogTrigger>
    </Dialog>
  );
};
