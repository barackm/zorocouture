import React from "react";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";

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
