import { UserButton } from "@/components/user-button";
import { RailwayLogo } from "@/icons/railway-logo";
import { useStore } from "@/store/user";
import Link from "next/link";

export default function DashboardHeader() {
  const user = useStore();
  return (
    <div className="flex justify-between py-10 items-center">
      <Link href="/">
        <RailwayLogo className="cursor-pointer w-10 h-10" />
      </Link>
      <div className="flex items-center">
        <UserButton />
      </div>
    </div>
  );
}
