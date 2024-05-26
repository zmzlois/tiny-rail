"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useStore } from "@/store/user";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export const SelectWorkspace = () => {
  const user = useStore();
  return (
    <div className="flex sm:gap-4 gap-2 py-4 items-center">
      <img
        src={user.avatar}
        className="w-14 h-14 rounded-full hidden sm:block"
      />
      <div className="flex flex-col items-start justify-start">
        <h3 className="text-xs sm:text-lg">{user.name}</h3>
      </div>
    </div>
  );
};
