import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { signInFunction } from "@/server/auth";

export function SignIn({ className }: { className?: string }) {
  return (
    <Button onClick={() => signInFunction()} className={className}>
      Sign In
    </Button>
  );
}
