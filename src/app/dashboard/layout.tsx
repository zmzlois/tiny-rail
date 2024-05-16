"use client";

import { ApolloProvider as Provider } from "@apollo/client";
import { client } from "@/graphql/client";
import DashboardHeader from "./_components/dashboard-header";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="container mx-auto">
      <DashboardHeader />
      {children}
    </div>
  );
}
