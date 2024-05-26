import { ServiceCanva } from "./_components/service-canva";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { projectId: string };
}) {
  return (
    <div className="w-full items-center flex justify-center h-[calc(100vh-10vh)]">
      <ServiceCanva projectId={params.projectId} />
      {children}
    </div>
  );
}
