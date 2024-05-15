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

import { usePathname } from "next/navigation";

export const Header = () => {
  const path = usePathname();

  return (
    <div className="flex justify-between   items-center py-4 ">
      <Link href="/">
        <RailwayLogo
          className={!path.startsWith("/dashboard") ? "w-12 h-12" : "w-8 h-8"}
        />
      </Link>
      <div>
        {/* TODO */}
        <nav className="hidden space-x-6 sm:flex">
          {!path.startsWith("/dashboard") &&
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
        </nav>
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
  {
    name: "Dashboard",
    href: "/dashboard",
  },
];
