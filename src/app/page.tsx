import Image from "next/image";
import { HeroSection } from "../components/hero";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <main className="flex flex-col container mx-auto">
      <Header />
      <HeroSection />
    </main>
  );
}
