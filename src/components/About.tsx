import React from "react";

const About = () => {
  return (
    <section className="w-full bg-white py-20 px-8 md:px-16 lg:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <span className="text-gray-500 text-sm tracking-widest">
            Notre Histoire
          </span>
          <h2 className="text-6xl md:text-7xl font-bold text-gray-900">
            L'Art de la Couture
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Je transforme vos idées en créations élégantes. Mon approche unique
            fusionne créativité et expertise technique pour créer des vêtements
            qui ne sont pas seulement beaux, mais qui racontent aussi une
            histoire. Prêt à donner vie à votre vision?
          </p>

          <div className="flex gap-12 mt-12">
            <div>
              <h3 className="text-4xl font-bold">15+</h3>
              <p className="text-sm text-gray-500">Années d'expérience</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">500+</h3>
              <p className="text-sm text-gray-500">Créations uniques</p>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="relative">
            <img
              src="/images/barack1.png"
              alt="Atelier de couture"
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
