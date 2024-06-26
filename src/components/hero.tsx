import Link from "next/link";

export const HeroSection = async () => {
  return (
    <section className="bg-hero_gradient">
      <div className="z-10 relative flex flex-col items-start justify-center min-h-[80vh]">
        <div className="sm:w-[60vw] w-full flex flex-col lg:gap-8 gap-4">
          <h1>
            Just deploy it.
            <br />
            No tracing. No logs. No fuzz.
          </h1>
          <h2>
            Tiny Rail is a light mock of railway. <br /> See the{" "}
            <a
              href="https://railway.app"
              target="_blank"
              rel="noreferrer"
              className="text-purple-500 underline underline-offset-4 decoration-1"
            >
              <b>actual thing</b>
            </a>
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
