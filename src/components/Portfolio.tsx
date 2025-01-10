import React from "react";

const projects = [
  {
    id: 1,
    title: "Costume Sur Mesure",
    category: "Homme",
    image: "/images/portfolio/barack.png",
    year: "2023",
  },
  {
    id: 2,
    title: "Robe de Soirée",
    category: "Femme",
    image: "/images/barack1.png",
    year: "2023",
  },
];

const Portfolio = () => {
  return (
    <section className="w-full bg-white py-20 px-8 md:px-16 lg:px-32">
      <div className="max-w-2xl mb-20">
        <span className="text-gray-500 text-sm tracking-widest">
          Notre Portfolio
        </span>
        <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mt-4">
          Créations Signatures
        </h2>
        <p className="text-lg text-gray-700 mt-6">
          Découvrez notre collection de pièces uniques, créées sur mesure pour
          nos clients les plus exigeants.
        </p>
      </div>

      <div className="flex gap-8 mb-12 overflow-x-auto pb-4">
        <button className="text-sm font-medium px-6 py-2 rounded-full bg-black text-white">
          Tous
        </button>
        <button className="text-sm font-medium px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
          Homme
        </button>
        <button className="text-sm font-medium px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
          Femme
        </button>
        <button className="text-sm font-medium px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
          Mariage
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative aspect-[3/4] overflow-hidden rounded-xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-white/70 text-sm tracking-widest">
                  {project.category}
                </span>
                <h3 className="text-white text-2xl font-bold mt-2">
                  {project.title}
                </h3>
                <div className="mt-4 flex items-center gap-4">
                  <span className="text-white/70 text-sm">{project.year}</span>
                  <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="text-xl">↗</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
