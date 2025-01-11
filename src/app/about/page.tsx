import About from "@/components/About";
import Services from "@/components/Services";
import React from "react";

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
