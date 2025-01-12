import About from "@/components/About";
import Services from "@/components/Services";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos",
  description:
    "Découvrez Zoro Couture, votre atelier de couture de confiance à Goma, RDC. Plus de 10 ans d'expérience dans la haute couture et le design de mode.",
  alternates: {
    canonical: "https://zorocouture.com/about",
  },
};

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-20">
        <About />
      </div>
      <section className="w-full bg-gradient-to-b from-violet-50/50 via-white to-white">
        <Services />
      </section>
    </div>
  );
};

export default AboutPage;
