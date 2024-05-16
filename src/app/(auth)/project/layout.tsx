export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-dot-pattern  min-h-[calc(100vh-20vh)]">{children}</div>
  );
}
