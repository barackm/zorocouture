import React from "react";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Zoro Couture à Goma, RDC. Prenez rendez-vous pour vos créations sur mesure. Atelier de couture professionnel situé au centre-ville.",
  alternates: {
    canonical: "https://zorocouture.com/contact",
  },
};

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
