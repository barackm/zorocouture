import React from "react";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

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
