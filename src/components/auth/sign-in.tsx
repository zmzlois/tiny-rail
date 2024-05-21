import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export function SignIn({
  className,
  origin,
}: {
  className?: string;
  origin: string;
}) {
  const path = origin
    .replace("/", "%2F")
    .replace("?", "%3F")
    .replace("=", "%3D");
  return (
    <Link href={`/api/auth/github?origin=${path}`} className={className}>
      {" "}
      <Button className="flex gap-4">
        <span>Sign In</span> <GitHubLogoIcon />{" "}
      </Button>
    </Link>
  );
}
