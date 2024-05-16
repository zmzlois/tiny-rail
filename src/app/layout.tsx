import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";
import { QueryProvider } from "@/components/query-provider";
import SessionProvider from "@/components/auth/session-provider";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tiny Rail",
  description: "Light Railway communicating with Railway GQL",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  const user = session?.user;

  return (
    <html lang="en">
      <QueryProvider>
        <body
          className={cn(inter.className, "flex flex-col min-h-screen dark")}
        >
          <Header user={user} />
          {children}
        </body>
      </QueryProvider>
    </html>
  );
}
