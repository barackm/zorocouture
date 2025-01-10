import React from "react";
import Hero from "../components/Hero";
import PortfolioGrid from "../components/PortfolioGrid";

const HomePage = () => {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <section className="my-10">
        <h2 className="text-2xl font-bold">Featured Projects</h2>
        <PortfolioGrid />
      </section>
      <section className="my-10">
        <a href="/contact" className="btn btn-primary">
          Get in Touch
        </a>
      </section>
    </main>
  );
};

export default HomePage;
