import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "@/components/Portfolio";

const HomePage = () => {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <About />
      <Portfolio />
      <section className="my-10">
        <a href="/contact" className="btn btn-primary">
          Contactez-nous
        </a>
      </section>
    </main>
  );
};

export default HomePage;
