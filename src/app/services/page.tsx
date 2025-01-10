import React from 'react';

const services = [
  {
    title: 'Custom Tailoring',
    description: 'Bespoke clothing tailored to your measurements and style preferences.',
  },
  {
    title: 'Alterations',
    description: 'Professional alterations to ensure your garments fit perfectly.',
  },
  {
    title: 'Bridal Services',
    description: 'Specialized services for bridal gowns and bridesmaid dresses.',
  },
  {
    title: 'Suit Rentals',
    description: 'High-quality suits available for rental for any occasion.',
  },
  {
    title: 'Fabric Consultation',
    description: 'Expert advice on fabric selection for your custom garments.',
  },
];

const ServicesPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;