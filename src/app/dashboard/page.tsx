"use client";
import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { userQuery } from "@/graphql/user.query";
export default function Page() {
  // user query, name, their workspace, subscription, account, projects within a workspace

  const { data, error, isLoading } = useQuery({
    queryKey: ["user", "me"],
    queryFn: async () => {
      const res = fetch("/api/user");
      return (await res).json();
    },
  });

  console.log("error", error);

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error.message}</h2>;

  if (data.status !== 200) {
    return <h2>Error: {data.status}</h2>;
  }
  return (
    <div>
      <h1 className="text-white">{data?.me}</h1>
    </div>
  );
}
