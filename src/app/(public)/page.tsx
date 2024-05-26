import Image from "next/image";
import { HeroSection } from "../../components/hero";
import { Header } from "@/components/header";

import { redirect } from "next/navigation";

export default async function Home() {
  return (
    <main className="flex flex-col container mx-auto">
      <HeroSection />
      <p className="text-center">
        Look, this is a toy project. Please don&apos;t deploy anything for
        production or store sensitivce data here. <br /> If you really want
        to... remember to encrypt your data. <br />
        If you don&lsquo;t I will see everything!
      </p>
    </main>
  );
}
