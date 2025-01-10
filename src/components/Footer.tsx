import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-light mb-4">ZORO COUTURE</h3>
            <p className="text-gray-400">
              L'excellence dans l'art de la couture sur mesure
            </p>
          </div>
          <div>
            <h4 className="text-lg font-light mb-4">Contact</h4>
            <p className="text-gray-400">Email: contact@zorocouture.com</p>
            <p className="text-gray-400">Tél: +33 1 23 45 67 89</p>
            <p className="text-gray-400">Paris, France</p>
          </div>
          <div>
            <h4 className="text-lg font-light mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              {["Facebook", "Instagram", "Pinterest"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Zoro Couture. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
