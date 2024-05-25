import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";
import QueryProvider from "@/components/query-provider";

import getUser from "@/server/auth";
import { permanentRedirect, redirect } from "next/navigation";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
  const { user } = (await getUser()) as unknown as { user: any };

  return (
    <html lang="en">
      <body className={cn(inter.className, "flex flex-col min-h-screen dark")}>
        {" "}
        <QueryProvider>
          <Header user={user} />
          {children}
          <ReactQueryDevtools initialIsOpen />
        </QueryProvider>
      </body>
    </html>
  );
}
