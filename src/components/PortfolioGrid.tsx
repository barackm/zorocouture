import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of project one.',
    imageUrl: '/path/to/image1.jpg',
  },
  {
    title: 'Project Two',
    description: 'A brief description of project two.',
    imageUrl: '/path/to/image2.jpg',
  },
  {
    title: 'Project Three',
    description: 'A brief description of project three.',
    imageUrl: '/path/to/image3.jpg',
  },
  // Add more projects as needed
];

const PortfolioGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project, index) => (
        <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
          <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrid;