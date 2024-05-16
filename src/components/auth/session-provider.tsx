import { auth } from "@/auth";
import { Session } from "inspector";
import { redirect } from "next/navigation";

export default async function SessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  console.log(session);

  if (!session?.user) {
    redirect("/");
  }

  return <div>{children}</div>;
}
