import React, { Suspense } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-dot-pattern min-h-[calc(100vh-10vh)] flex flex-col items-center py-20">
      <Suspense fallback={<div>Loading...</div>}> {children}</Suspense>
    </div>
  );
}
