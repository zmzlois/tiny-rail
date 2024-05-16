import ProjectHeader from "./_components/project-header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-dot-pattern  min-h-[calc(100vh-15vh)]">
      <ProjectHeader />
      {children}
    </div>
  );
}
