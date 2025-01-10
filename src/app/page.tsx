import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import PortfolioGrid from "../components/PortfolioGrid";

const HomePage = () => {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <About />
      <section className="my-10">
        <h2 className="text-2xl font-bold">Nos Créations</h2>
        <PortfolioGrid />
      </section>
      <section className="my-10">
        <a href="/contact" className="btn btn-primary">
          Contactez-nous
        </a>
      </section>
    </main>
  );
};

export default HomePage;
