import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export function SignIn({ className }: { className?: string }) {
  return (
    <Link href="/api/auth/github">
      {" "}
      <Button className={className}> Sign In </Button>
    </Link>
  );
}
