export default function Page({ params }: { params: { projectId: string } }) {
  return <div className="py-10 text-white">{params.projectId}</div>;
}
