import Features from "@/components/pages/dashboard/Features";
import Hero from "@/components/pages/dashboard/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-12 xl:gap-26">
      <Hero />
      <Image
        src="/hero.png"
        alt="Coffee test"
        width={600}
        height={300}
        className="w-full h-full object-cover px-2 sm:px-6 lg:px-8 xl:px-10"
      />
      <Features />
    </main>
  );
}
