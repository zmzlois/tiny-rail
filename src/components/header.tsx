/* eslint-disable @next/next/no-img-element */
"use client";

import { RailwayLogo } from "@/icons/railway-logo";
import { RailwayLogoType } from "@/icons/railway-logo-type";
import Link from "next/link";
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

type UserProps = {
  id: string;
  avatar: string;
  name: string;
  teams: string[];
};

export const Header = () => {
  const path = usePathname();

  return (
    <div className="flex justify-between container mx-auto  items-center p-4 ">
      <Link href="/">
        <RailwayLogo className={"w-10 h-10 my-4"} />
      </Link>

      {/* TODO */}
      <div className="flex space-x-6">
        {path.length < 2 &&
          NavConfig.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-muted"
            >
              {item.name}
              {item.number && (
                <span className="bg-accent_2 text-accent_1 rounded-full py-[2px] px-[4px] text-xs mb-1 -mr-2 ml-1">
                  {item.number}
                </span>
              )}
            </a>
          ))}
        <DashboardButton path={path} />
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

const UserButton = ({ user }: { user: UserProps }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center space-x-4">
          <div>
            <img
              src={user.avatar}
              alt="avatar"
              className="w-8 h-8 border-2 rounded-full z-0"
            />
            <span className="bg-gradient-to-br from-purple-700 to-blue-500 text-white w-2 y-2 z-10 rounded-lg" />
          </div>
          <ChevronDownIcon className="w-5 h-5" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>{user.name}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const DashboardButton = ({ path }: { path: string }) => {
  const {
    data: user,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch("/api/user");

      const data = await res.json();

      return data;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const workspaceId = user["data"]["me"]["id"];

  const me = user["data"]["me"];

  // FIXME: once on dashboard this button needs to switch to user button

  const userData: UserProps = {
    id: me["id"],
    avatar: me["avatar"],
    name: me["name"],
    teams: me["teams"],
  };
  return (
    <Link
      href={`/dashboard`}
      className="text-sm font-medium text-muted-foreground hover:text-primary"
    >
      Dashboard
    </Link>
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
