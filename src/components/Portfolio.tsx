"use client";
import React, { useState } from "react";
import Tabs from "./Tabs";
import { HiArrowUpRight } from "react-icons/hi2";

enum Category {
  MEN = "Homme",
  WOMEN = "Femme",
  WEDDING = "Mariage",
}

enum TabType {
  ALL = "all",
  MEN = "men",
  WOMEN = "women",
  WEDDING = "wedding",
}

interface Project {
  id: number;
  title: string;
  category: Category;
  image: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Costume Sur Mesure",
    category: Category.MEN,
    image: "/images/portfolio/barack.png",
    year: "2023",
  },
  {
    id: 2,
    title: "Robe de Soirée",
    category: Category.WOMEN,
    image: "/images/portfolio/barack3.jpeg",
    year: "2023",
  },
  {
    id: 3,
    title: "Robe de Soirée",
    category: Category.WOMEN,
    image: "/images/barack1.png",
    year: "2023",
  },
];

const tabs = [
  { id: TabType.ALL, label: "Tous" },
  { id: TabType.MEN, label: Category.MEN },
  { id: TabType.WOMEN, label: Category.WOMEN },
  { id: TabType.WEDDING, label: Category.WEDDING },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section className="w-full py-20 px-8 md:px-16 lg:px-32">
      <div data-aos="fade-up" className="max-w-2xl mb-20">
        <span className="text-gray-500 text-sm tracking-widest">
          Notre Portfolio
        </span>
        <h2 className="text-[clamp(3rem,10vw,6rem)] font-extralight leading-[0.85] tracking-[-0.02em] text-black/80">
          Créations
          <span className="block font-thin text-black/60">Signatures</span>
        </h2>
        <p className="text-lg text-gray-700 mt-6">
          Découvrez notre collection de pièces uniques, créées sur mesure pour
          nos clients les plus exigeants.
        </p>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="mb-12 overflow-x-auto pb-4"
      >
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
          className="inline-flex"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects
          .filter((project) =>
            activeTab === "all"
              ? true
              : project.category.toLowerCase() === activeTab
          )
          .map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
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
                    <span className="text-white/70 text-sm">
                      {project.year}
                    </span>
                    <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform">
                      <HiArrowUpRight className="text-xl" />
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
