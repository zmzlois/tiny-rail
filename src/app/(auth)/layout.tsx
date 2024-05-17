import { auth } from "@/auth";
import SessionProvider from "@/components/auth/session-provider";
import { redirect } from "next/navigation";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) return redirect("/");

  return <div>{children}</div>;
}
