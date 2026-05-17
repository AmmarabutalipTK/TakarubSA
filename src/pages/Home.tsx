import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Integrations } from "@/components/home/Integrations";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";
import { useSEO } from "@/hooks/useSEO";

export default function Home() {
  useSEO({
    title: "Takarub - Integrated Digital Solutions for the Arab Market",
    description: "Digital agency providing AI, blockchain, mobile and web development solutions for Saudi Arabia and the Arab region.",
    canonicalUrl: "https://takarub.com/",
    keywords: ["digital agency", "AI solutions", "blockchain development", "mobile apps", "web applications", "Arab region", "Saudi Arabia"],
  });

  return (
    <div className="min-h-screen flex flex-col w-full bg-background selection:bg-primary selection:text-white">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <Features />
        <Integrations />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
