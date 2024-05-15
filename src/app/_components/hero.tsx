import Link from "next/link";
import { Header } from "./header";

export const HeroSection = () => {
  return (
    <section className="bg-hero_gradient">
      <Header />
      <div className="z-10 relative flex flex-col items-center justify-center h-screen">
        <div>
          <h1>
            Instant Deployments,
            <br />
            Effortless Scale
          </h1>
          <h2>
            Railway is the cloud for building, shipping, and monitoring
            applications. No Platform Engineer required.
          </h2>
          <Link href="/new">Start a New Project</Link>
        </div>
      </div>
    </section>
  );
};
