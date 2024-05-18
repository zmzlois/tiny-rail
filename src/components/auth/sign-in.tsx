import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export function SignIn({ className }: { className?: string }) {
  return (
    <Link href="/api/auth/github" className={className}>
      {" "}
      <Button className="flex gap-4">
        <span>Sign In</span> <GitHubLogoIcon />{" "}
      </Button>
    </Link>
  );
}
