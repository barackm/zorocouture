"use client";
import React, { useEffect, useRef } from "react";
import { useFooterVisibility } from "@/context/FooterVisibilityContext";
import {
  FiInstagram,
  FiTwitter,
  FiFacebook,
  FiArrowUpRight,
} from "react-icons/fi";
import Button from "./Button";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const { setIsFooterVisible } = useFooterVisibility();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, [setIsFooterVisible]);

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
    <footer ref={footerRef} className="bg-gray-900 text-white">
      <div className="mx-auto px-8 md:px-16 lg:px-32">
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            <div className="space-y-8">
              <h2 className="text-[clamp(2.5rem,8vw,3rem)] font-extralight leading-[0.85] tracking-[-0.02em] text-white/90">
                Zoro
                <span className="block font-thin text-white/70">Couture</span>
              </h2>
              <p className="text-gray-400 leading-relaxed">
                L&apos;excellence dans l&apos;art de la couture sur mesure, où
                chaque détail raconte une histoire unique.
              </p>
              <Button
                variant="outline"
                href="/contact"
                className="border-white/20 text-white hover:bg-white/10"
              >
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
                    className="block text-gray-400 hover:text-white transition-colors"
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
                  <p key={item.label} className="text-gray-400">
                    <span className="block text-sm text-gray-500">
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
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-white hover:text-gray-900 transition-all"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {year} Zoro Couture. Tous droits réservés.
          </p>
          <a
            href="https://barackm.me"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
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
