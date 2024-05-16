import Image from "next/image";
import { HeroSection } from "../../components/hero";
import { Header } from "@/components/header";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  return (
    <main className="flex flex-col container mx-auto">
      <HeroSection />
    </main>
  );
}
