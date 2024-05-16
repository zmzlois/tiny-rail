/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect } from "react";
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
import { UserProps } from "@/lib/user";
import { useStore } from "@/store/user";

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

const DashboardButton = ({ path }: { path: string }) => {
  const updateUser = useStore((state) => {
    return {
      name: state.updateName,
      avatar: state.updateAvatar,
      hobbyPlan: state.updateIsOnHobbyPlan,
    };
  });
  const {
    data: user,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch("/api/user");

      const data = await res.json();
      const me = user["data"]["me"];

      updateUser.name(me["name"]);
      updateUser.avatar(me["avatar"]);
      updateUser.hobbyPlan(me["isOnHobbyPlan"]);

      console.log("data", data["data"]["me"]);
      return data;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // FIXME: once on dashboard this button needs to switch to user button

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
