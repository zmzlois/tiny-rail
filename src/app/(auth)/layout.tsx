import { validateRequest } from "@/lib/lucia";
import { redirect } from "next/navigation";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/");
  }
  return <div>{children}</div>;
}
