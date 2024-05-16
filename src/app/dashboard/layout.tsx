"use client";

import { ApolloProvider as Provider } from "@apollo/client";
import { client } from "@/graphql/client";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
