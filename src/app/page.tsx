import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

const HomePage = () => {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
