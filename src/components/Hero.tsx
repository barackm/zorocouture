import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-center md:justify-between items-center bg-white px-6 md:px-16 lg:px-32 relative py-20 md:py-0">
      <div className="flex flex-col justify-center gap-8 max-w-xl text-center md:text-left md:items-start order-2 md:order-1 mt-8 md:mt-0">
        <span className="text-gray-500 text-sm uppercase tracking-widest hidden md:block rotate-90 origin-left md:absolute left-0 top-1/2 -translate-y-1/2">
          Créateur de Mode
        </span>
        <div>
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-extrabold leading-none ">
            Zoro Couture
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light mt-4">
            — C&apos;est Zoro Couture, un magicien de la couture.
          </p>
        </div>
        <div className="flex gap-12 mt-6 justify-center md:justify-start">
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold">+200</h3>
            <p className="text-sm text-gray-500">Projets réalisés</p>
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold">+50</h3>
            <p className="text-sm text-gray-500">Clients satisfaits</p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/3 order-1 md:order-2">
        <Image
          src="/images/zoro.png"
          alt="Profil du tailleur"
          width={400}
          height={400}
          className="rounded-xl object-contain shadow-lg w-full max-w-[300px] md:max-w-[400px] h-[300px] md:h-[400px] mx-auto"
        />
      </div>

      <div className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 animate-bounce">
        <p className="uppercase tracking-wide text-sm">Défiler vers le bas ↓</p>
      </div>
    </section>
  );
};

export default Hero;
