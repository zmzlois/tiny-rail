"use client";

import { Provider } from "urql";
import { userClient, teamClient } from "@/graphql/client";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Provider value={userClient}>
      <Provider value={teamClient}>{children}</Provider>
    </Provider>
  );
}
