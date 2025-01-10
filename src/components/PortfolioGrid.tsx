import React from "react";

const projects = [
  {
    title: "Costume Sur Mesure",
    description: "Collection exclusive de costumes élégants.",
    imageUrl:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3",
  },
  {
    title: "Robes de Mariée",
    description: "Créations uniques pour votre jour spécial.",
    imageUrl:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3",
  },
  {
    title: "Tenues de Soirée",
    description: "Élégance et raffinement pour vos événements.",
    imageUrl:
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3",
  },
];

const PortfolioGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="group relative overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative h-96">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center text-white p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
                <button className="mt-4 px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300">
                  Voir Plus
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrid;
