import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="w-full py-20 px-8 md:px-16 lg:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div data-aos="fade-right" className="space-y-8">
          <span className="text-gray-500 text-sm tracking-widest">
            Notre Histoire
          </span>
          <h2 className="text-[clamp(3rem,10vw,6rem)] font-extralight leading-[0.85] tracking-[-0.02em] text-black/80">
            L&apos;Art
            <span className="block font-thin text-black/60">de la Couture</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Je transforme vos idées en créations élégantes. Mon approche unique
            fusionne créativité et expertise technique pour créer des vêtements
            qui ne sont pas seulement beaux, mais qui racontent aussi une
            histoire. Prêt à donner vie à votre vision?
          </p>

          <div className="flex gap-12 mt-12">
            <div>
              <p className="text-4xl sm:text-5xl font-light tracking-tight">
                5<span className="text-black/30">+</span>
              </p>
              <p className="text-sm sm:text-base text-black/60 mt-1">
                Années d&apos;expérience
              </p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-light tracking-tight">
                500<span className="text-black/30">+</span>
              </p>
              <p className="text-sm sm:text-base text-black/60 mt-1">
                Créations uniques
              </p>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-delay="200" className="space-y-12">
          <div className="relative">
            <Image
              src="/images/barack1.png"
              alt="Atelier de couture"
              width={600}
              height={600}
              className="w-full h-[600px] object-scale-down rounded-xl shadow-lg mb-10"
            />
            <div className="absolute bottom-8 left-8 bg-white p-6 rounded-lg shadow-xl">
              <p className="text-sm text-gray-500 tracking-widest">
                SAVOIR-FAIRE
              </p>
              <h4 className="text-xl font-bold mt-2">Excellence Artisanale</h4>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">✂️</span>
              </div>
              <h5 className="text-xl font-semibold">Couture Sur Mesure</h5>
              <p className="text-gray-600">
                Chaque pièce est créée spécifiquement pour vous, respectant vos
                mesures exactes.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <h5 className="text-xl font-semibold">Design Personnalisé</h5>
              <p className="text-gray-600">
                Une collaboration étroite pour créer des pièces qui reflètent
                votre style unique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
