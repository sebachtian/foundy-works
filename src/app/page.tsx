import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Strategy } from "@/components/Strategy";
import { Process } from "@/components/Process";
import { Products } from "@/components/Products";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Strategy />
        <Process />
        <Products />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
