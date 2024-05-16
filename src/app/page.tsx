import Image from "next/image";
import { HeroSection } from "../components/hero";

export default function Home() {
  return (
    <main className="flex flex-col container mx-auto">
      <HeroSection />
    </main>
  );
}
