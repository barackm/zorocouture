import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="mb-4">
        I am a passionate tailor with over 10 years of experience in creating custom garments that fit perfectly and reflect individual styles. My journey in tailoring began at a young age, and I have honed my skills through various training programs and hands-on experience.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Experience</h2>
      <p className="mb-4">
        I have worked with a diverse clientele, providing tailored solutions for weddings, formal events, and everyday wear. My attention to detail and commitment to quality ensure that every piece I create is unique and made to last.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Skills</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Custom tailoring and alterations</li>
        <li>Fabric selection and sourcing</li>
        <li>Pattern making and draping</li>
        <li>Hand sewing and finishing techniques</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Client Testimonials</h2>
      <blockquote className="border-l-4 border-gray-500 pl-4 italic mb-4">
        "The best tailor I've ever worked with! My wedding dress was absolutely perfect!" - Jane D.
      </blockquote>
      <blockquote className="border-l-4 border-gray-500 pl-4 italic mb-4">
        "Exceptional service and attention to detail. Highly recommend!" - John S.
      </blockquote>
    </div>
  );
};

export default AboutPage;