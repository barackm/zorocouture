import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}>
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Tailoring Service</h1>
        <p className="text-xl mb-8">Crafting your perfect fit with precision and style.</p>
        <a href="#services" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Explore Our Services
        </a>
      </div>
    </section>
  );
};

export default Hero;