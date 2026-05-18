import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Strategy } from "@/components/Strategy";
import { Products } from "@/components/Products";
import { Process } from "@/components/Process";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { Stats } from "@/components/Stats";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Strategy />
        <Products />
        <Process />
        <FeaturedProducts />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
