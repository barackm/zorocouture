import React from "react";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Services",
  description:
    "Services de couture professionnelle à Goma: création sur mesure, retouches, haute couture, design de mode. Atelier situé au cœur de Goma, RDC.",
  alternates: {
    canonical: "https://zorocouture.com/services",
  },
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-20">
        <Services />
      </div>
      <section className="w-full bg-gradient-to-b from-sky-50/50 via-white to-white">
        <Portfolio />
      </section>
    </div>
  );
};

export default ServicesPage;
