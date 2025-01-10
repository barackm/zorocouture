import React from "react";
import Button from "./Button";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Couture Sur Mesure",
    description:
      "Création de vêtements uniques adaptés à votre morphologie et à votre style personnel.",
    icon: "✂️",
    image: "/images/services/service2.jpg",
  },
  {
    id: 2,
    title: "Robes de Mariée",
    description:
      "Conception et réalisation de robes de mariée exceptionnelles pour votre jour spécial.",
    icon: "👗",
    image: "/images/services/service2.jpg",
  },
  {
    id: 3,
    title: "Costumes Homme",
    description:
      "Élégance masculine sur mesure pour toutes les occasions importantes.",
    icon: "🤵",
    image: "/images/services/service2.jpg",
  },
  {
    id: 4,
    title: "Retouches Expert",
    description:
      "Service de retouches professionnelles pour un ajustement parfait.",
    icon: "🪡",
    image: "/images/services/service2.jpg",
  },
];

const Services = () => {
  return (
    <section className="w-full py-20 px-8 md:px-16 lg:px-32">
      <div data-aos="fade-up" className="max-w-2xl mb-20">
        <span className="text-gray-500 text-sm tracking-widest">
          Nos Services
        </span>
        <h2 className="text-[clamp(3rem,10vw,6rem)] font-extralight leading-[0.85] tracking-[-0.02em] text-black/80">
          Expertise
          <span className="block font-thin text-black/60">Artisanale</span>
        </h2>
        <p className="text-lg text-gray-700 mt-6">
          Découvrez notre gamme de services de haute couture, où chaque détail
          est façonné avec précision et passion.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {services.map((service, index) => (
          <div
            key={service.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="group relative bg-gray-50 rounded-xl overflow-hidden"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-8">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-6">
                <span className="text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center text-sm font-semibold hover:gap-2 transition-all duration-300"
              >
                En savoir plus
                <span className="ml-1">↗</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <Button href="/contact">Prendre Rendez-vous</Button>
      </div>
    </section>
  );
};

export default Services;
