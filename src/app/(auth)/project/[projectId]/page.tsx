export default function Page({ params }: { params: { projectId: string } }) {
  console.log(params.projectId);
  return <div className="py-10 text-white">{params.projectId}</div>;
}
