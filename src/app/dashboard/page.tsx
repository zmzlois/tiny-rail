"use client";
import { useQuery } from "urql";
import { userQuery } from "@/graphql/user.query";
export default function Page() {
  // user query, name, their workspace, subscription, account, projects within a workspace

  const [result, reexecuteQuery] = useQuery({
    query: userQuery,
  });

  const { data, fetching, error } = result;

  console.log("fetching", fetching);

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      <h1>{data?.me.name}</h1>
    </div>
  );
}
