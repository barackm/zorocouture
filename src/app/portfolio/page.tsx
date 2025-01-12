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
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Portfolio Zoro Couture",
    description: "Découvrez nos créations de haute couture à Goma",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: "https://zorocouture.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Portfolio",
          item: "https://zorocouture.com/portfolio",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
      <div className="min-h-screen">
        <div className="pt-20">
          <Portfolio />
        </div>
        <section className="w-full bg-gradient-to-b from-emerald-50/50 via-white to-white">
          <Contact />
        </section>
      </div>
    </>
  );
};

export default PortfolioPage;
