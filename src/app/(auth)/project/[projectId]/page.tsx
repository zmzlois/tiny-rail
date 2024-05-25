import { ServiceCanva } from "./_components/service-canva";

export default function Page({ params }: { params: { projectId: string } }) {
  return (
    <div className="py-10 text-white">
      <ServiceCanva projectId={params.projectId} />
    </div>
  );
}
