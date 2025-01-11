import React from "react";
import {
  FiInstagram,
  FiTwitter,
  FiFacebook,
  FiArrowUpRight,
} from "react-icons/fi";
import Button from "./Button";

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      icon: <FiInstagram size={20} />,
      url: "https://www.facebook.com/johnsongs/about?locale=ms_MY",
    },
    {
      name: "Twitter",
      icon: <FiTwitter size={20} />,
      url: "https://www.facebook.com/johnsongs/about?locale=ms_MY",
    },
    {
      name: "Facebook",
      icon: <FiFacebook size={20} />,
      url: "https://www.facebook.com/johnsongs/about?locale=ms_MY",
    },
  ];

  const contactInfo = [
    { label: "Email", value: "johnfumba70@gmail.com" },
    { label: "Téléphone", value: "+243 994 068 185" },
    { label: "Adresse", value: "Goma, Himbi" },
  ];

  const quickLinks = [
    { name: "Services", url: "/services" },
    { name: "Portfolio", url: "/portfolio" },
    { name: "À propos", url: "/about" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="mx-auto px-8 md:px-16 lg:px-32">
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Zoro Couture</h2>
              <p className="text-gray-600 leading-relaxed">
                L&apos;excellence dans l&apos;art de la couture sur mesure, où
                chaque détail raconte une histoire unique.
              </p>
              <Button variant="outline" href="/contact">
                Prendre Rendez-vous
              </Button>
            </div>

            <div className="space-y-8">
              <h3 className="text-gray-400 text-sm tracking-widest">
                NAVIGATION
              </h3>
              <div className="space-y-4">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className="block text-gray-600 hover:text-black transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-gray-400 text-sm tracking-widest">CONTACT</h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <p key={item.label} className="text-gray-600">
                    <span className="block text-sm text-gray-400">
                      {item.label}
                    </span>
                    {item.value}
                  </p>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-gray-400 text-sm tracking-widest">
                SUIVEZ-NOUS
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {year} Zoro Couture. Tous droits réservés.
          </p>
          <a
            href="https://barackm.me"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors"
          >
            Développé par Promovize
            <FiArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
