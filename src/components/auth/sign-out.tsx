"use client";
import { signOut } from "@/auth";
import { signOutFunction } from "@/server/auth";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
export function SignOut() {
  const router = useRouter();
  async function handleSignOut() {
    await signOutFunction().then(() => console.log("signed out"));
    router.push("/");
  }
  return (
    <div>
      <button onClick={() => handleSignOut()}>Sign Out</button>
    </div>
  );
}
