import { ServiceCanva } from "./_components/service-canva";
import { CreateService } from "./service/[serviceId]/_components/service-create";
export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { projectId: string };
}) {
  return (
    <div className="w-full items-center flex justify-center h-[calc(100vh-10vh)]">
      <CreateService params={params} />
      <ServiceCanva projectId={params.projectId} />
      {children}
    </div>
  );
}
