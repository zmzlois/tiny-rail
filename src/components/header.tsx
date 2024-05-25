/* eslint-disable @next/next/no-img-element */
"use client";
import { useRef } from "react";
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
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";

import { UserButton } from "./user-button";
import { ProjectBreadcrumb } from "./header/project-breadcrumbs";
import { ArchitectObservability } from "./header/architect-observability";
import { SignInDialog } from "./sign-in-dialog";
import { env } from "@/lib/constants";

export const Header = ({ user }: { user?: User | undefined }) => {
  const path = usePathname();

  return (
    <div
      className={cn(
        "flex justify-between container mx-auto  items-center py-10 p-4 "
      )}
    >
      {path.startsWith("/project") ? (
        <ProjectBreadcrumb path={path} />
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
        <DashboardButton user={user} path={path} />
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

const DashboardButton = ({
  user,
  path,
}: {
  user?: User | undefined;
  path: string;
}) => {
  // FIXME: once on dashboard this button needs to switch to user button
  const store = useStore((state) => {
    return {
      name: state.updateName,
      avatar: state.updateAvatar,
    };
  });

  useEffect(() => {
    store.name(user?.username ?? "");
    store.avatar(user?.image ?? "");
  }, []);

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
        <SignInDialog triggerText="Sign In" path={path} />
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
