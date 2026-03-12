import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Page() {
  const showHero = true;

  return (
    <main className="flex flex-col">
      <Navbar />

      {showHero && <Hero />}

      <Features />

      <Footer />
    </main>
  );
}
