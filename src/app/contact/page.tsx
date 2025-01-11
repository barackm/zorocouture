import React from "react";
import Contact from "@/components/Contact";
import Services from "@/components/Services";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-20">
        <Contact />
      </div>
      <section className="w-full bg-gradient-to-b from-violet-50/50 via-white to-white">
        <Services />
      </section>
    </div>
  );
};

export default ContactPage;
