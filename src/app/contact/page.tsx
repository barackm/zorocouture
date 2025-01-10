import React from 'react';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6">We would love to hear from you! Please fill out the form below or reach out to us via the contact information provided.</p>
      <ContactForm />
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Contact Information</h2>
        <p>Email: info@tailoringportfolio.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </div>
  );
};

export default ContactPage;