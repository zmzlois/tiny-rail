"use client";
import { useQuery } from "@apollo/client";
import { userQuery } from "@/graphql/user.query";

export default function Page() {
  // user query, name, their workspace, subscription, account, projects within a workspace

  const { loading, error, data } = useQuery(userQuery);

  console.log("error", error);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <h1>{data?.me.name}</h1>
    </div>
  );
}
