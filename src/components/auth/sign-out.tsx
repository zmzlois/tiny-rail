"use client";

import { logout } from "@/server/auth";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
export function SignOut() {
  return (
    <div>
      <button onClick={() => logout()}>Sign Out</button>
    </div>
  );
}
