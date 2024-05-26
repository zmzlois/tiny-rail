import { ServiceDetails } from "./_components/service-details";

export default function Page({
  params,
}: {
  params: { projectId: string; serviceId: string };
}) {
  return (
    <div>
      {" "}
      <ServiceDetails params={params} />
    </div>
  );
}
