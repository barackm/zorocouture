import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row justify-between items-center bg-white px-6 md:px-16 lg:px-32 relative">
      <div className="flex flex-col justify-center gap-8 max-w-xl md:items-start md:text-left">
        <span className="text-gray-500 text-sm tracking-widest rotate-90 origin-left md:absolute left-0 top-1/2 -translate-y-1/2">
          Créateur de Mode
        </span>
        <div>
          <h1 className="text-7xl md:text-9xl font-extrabold leading-none">
            Zoro Couture
          </h1>
          <p className="text-xl md:text-2xl font-light mt-4">
            — C'est Zoro Couture, un magicien du design.
          </p>
        </div>
        <div className="flex gap-12 mt-6">
          <div>
            <h3 className="text-4xl font-bold">+200</h3>
            <p className="text-sm text-gray-500">Projets réalisés</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">+50</h3>
            <p className="text-sm text-gray-500">Clients satisfaits</p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/3">
        <img
          src="/images/zoro.png"
          alt="Profil du tailleur"
          className="rounded-xl object-contain shadow-lg w-full md:w-[400px] h-[400px]"
        />
      </div>

      <a
        href="/contact"
        className="absolute top-10 right-10 text-sm font-semibold underline hover:text-gray-700 transition-colors"
      >
        Réserver un Appel ↗
      </a>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 animate-bounce">
        <p className="uppercase tracking-wide text-sm">Défiler vers le bas ↓</p>
      </div>
    </section>
  );
};

export default Hero;
