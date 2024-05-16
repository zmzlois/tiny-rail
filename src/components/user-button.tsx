"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserProps } from "@/lib/user";
import { useStore } from "@/store/user";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { SignOut } from "./auth/sign-out";

export const UserButton = () => {
  const user = useStore();
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
          <ChevronDownIcon className="w-5 h-5 text-primary/60" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>{user.name}</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SignOut />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
