/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import type { User } from "lucia";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { UserProps } from "@/lib/user";
import { useStore } from "@/store/user";
import React from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SignIn } from "./auth/sign-in";
import { UserButton } from "./user-button";
import { ProjectBreadcrumb } from "./header/project-breadcrumbs";
import { ArchitectObservability } from "./header/architect-observability";

export const Header = ({ user }: { user?: User | undefined }) => {
  const path = usePathname();

  return (
    <div
      className={cn(
        "flex justify-between container mx-auto  items-center py-10 p-4 "
      )}
    >
      {path.startsWith("/project") ? (
        <ProjectBreadcrumb />
      ) : (
        <Link href="/" className="flex items-center gap-2">
          {!path.startsWith("/new") ? (
            <>
              <h3 className="font-semibold text-xl">Tiny Rail</h3>
              <sub>v1</sub>
            </>
          ) : (
            <h3 className="font-semibold">New Project</h3>
          )}
        </Link>
      )}
      {path.startsWith("/project") && <ArchitectObservability />}

      {/* TODO */}
      <div className="flex space-x-6">
        <DashboardButton user={user} />
      </div>
    </div>
  );
};

const MobileNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Open</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const DashboardButton = ({ user }: { user?: User | undefined }) => {
  // FIXME: once on dashboard this button needs to switch to user button

  const path = usePathname();

  console.log("user", user);

  const store = useStore((state) => {
    state.updateId(user?.id!);
    state.updateAvatar(user?.image!);
    state.updateName(user?.name!);
  });

  return (
    <>
      {user ? (
        path.length > 2 ? (
          <UserButton />
        ) : (
          <Link
            href={`/dashboard`}
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            {"Dashboard"}
          </Link>
        )
      ) : (
        <Dialog>
          <DialogTrigger>
            <p className="text-sm font-medium text-muted-foreground hover:text-primary">
              Login
            </p>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader className="flex flex-col items-center gap-10">
              <DialogTitle className="text-4xl">Login</DialogTitle>
              <DialogDescription>
                <SignIn />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

const NavConfig = [
  {
    name: "Features",
    href: "https://railway.app/features",
  },
  {
    name: "Blog",
    href: "https://blog.railway.app/",
  },
  {
    name: "Docs",
    href: "https://docs.railway.app/",
  },
  {
    name: "About",
    href: "https://railway.app/about",
  },
  {
    name: "Help",
    href: "https://railway.app/help",
  },
  {
    name: "Careers",
    href: "https://railway.app/careers",
    number: "4",
  },
  {
    name: "Pricing",
    href: "https://railway.app/pricing",
  },
];
