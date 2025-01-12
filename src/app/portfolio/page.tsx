import React from "react";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Découvrez nos créations de haute couture à Goma. Portfolio de vêtements sur mesure, costumes traditionnels et design de mode contemporain.",
  alternates: {
    canonical: "https://zorocouture.com/portfolio",
  },
};

const PortfolioPage = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-20">
        <Portfolio />
      </div>
      <section className="w-full bg-gradient-to-b from-emerald-50/50 via-white to-white">
        <Contact />
      </section>
    </div>
  );
};

export default PortfolioPage;
