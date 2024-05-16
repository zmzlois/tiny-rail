import Link from "next/link";
import { Header } from "./header";

export const HeroSection = async () => {
  return (
    <section className="bg-hero_gradient">
      <div className="z-10 relative flex flex-col items-start justify-center min-h-[80vh]">
        <div className="sm:w-[60vw] w-full flex flex-col lg:gap-8 gap-4">
          <h1>
            Instant Deployments,
            <br />
            Effortless Scale
          </h1>
          <h2>
            Railway is the cloud for building, shipping, and monitoring
            applications. No Platform Engineer required.
          </h2>
          <Link
            href="/new"
            className="bg-gradient-to-r from-purple-800/80 via-purple-800 to-accent_1 sm:w-1/3  rounded-lg items-center p-4"
          >
            <p className="text-primary text-center">Start a New Project</p>
          </Link>
        </div>
      </div>
    </section>
  );
};