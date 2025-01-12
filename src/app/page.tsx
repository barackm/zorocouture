import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Zoro Couture - Votre atelier de couture professionnel à Goma, RDC. Spécialisé en haute couture, vêtements sur mesure, et design de mode africaine.",
  alternates: {
    canonical: "https://zorocouture.com",
  },
};

const HomePage = () => {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <section className="w-full min-h-screen bg-gradient-to-b from-rose-50/50 via-white to-white">
        <About />
      </section>
      <section className="w-full min-h-screen bg-gradient-to-b from-sky-50/50 via-white to-white">
        <Portfolio />
      </section>
      <section className="w-full min-h-screen bg-gradient-to-b from-violet-50/50 via-white to-white">
        <Services />
      </section>
      <section className="w-full min-h-screen bg-gradient-to-b from-emerald-50/50 via-white to-white">
        <Contact />
      </section>
    </main>
  );
};

export default HomePage;
