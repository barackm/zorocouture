import React from "react";
import Image from "next/image";
import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";

const Hero: React.FC = () => {
  const socialLinks = [
    { icon: <FiInstagram size={20} />, href: "#" },
    { icon: <FiTwitter size={20} />, href: "#" },
    { icon: <FiFacebook size={20} />, href: "#" },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,0,0,0.02)_0%,transparent_50%)]" />
      <div className="absolute -left-40 top-1/4 w-80 h-80 bg-gray-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute -right-40 bottom-1/4 w-80 h-80 bg-gray-50 rounded-full blur-3xl opacity-50" />

      {/* Side text - Updated with second line */}
      <div
        className="fixed hidden md:flex items-center gap-4"
        style={{
          left: "2rem",
          top: "50vh",
          transform: "translateY(-50%) rotate(90deg) translateX(-50%)",
          transformOrigin: "0 50%",
        }}
      >
        <div className="w-[200px] h-[1px] bg-black/20"></div>
        <span className="text-xs uppercase tracking-[0.2em] whitespace-nowrap text-black/60">
          Créateur de Mode — Since 2018
        </span>
        <div className="w-[200px] h-[1px] bg-black/20"></div>
      </div>

      <div className="container mx-auto px-6 md:px-16 lg:px-32 relative h-screen flex flex-col justify-between py-20">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32 flex-1">
          {/* Content */}
          <div className="flex-1 space-y-12 text-center md:text-left">
            <div className="space-y-6">
              <h1 className="text-[clamp(3rem,15vw,12rem)] font-light leading-[0.9] tracking-tighter">
                Zoro
                <span className="block font-normal">Couture</span>
              </h1>
              <p className="text-lg md:text-xl text-black/60 max-w-lg">
                — L&apos;art de la haute couture, où chaque point raconte une
                histoire d&apos;élégance.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div>
                <p className="text-5xl font-light tracking-tight">
                  200<span className="text-black/30">+</span>
                </p>
                <p className="text-sm text-black/60 mt-1">Projets réalisés</p>
              </div>
              <div>
                <p className="text-5xl font-light tracking-tight">
                  50<span className="text-black/30">+</span>
                </p>
                <p className="text-sm text-black/60 mt-1">Clients satisfaits</p>
              </div>
            </div>

            <div className="flex justify-center md:justify-start gap-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-black/60 hover:text-black transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Image - Updated */}
          <div className="relative flex-1">
            <div className="relative w-full max-w-lg mx-auto h-[500px] md:h-[600px]">
              <div className="absolute inset-0 -rotate-2 rounded-2xl bg-black/5" />
              <div className="absolute inset-0 rotate-2 rounded-2xl bg-black/5" />
              <Image
                src="/images/zoro.png"
                alt="Profil du tailleur"
                width={500}
                height={600}
                className="object-contain w-full h-full rounded-2xl relative z-10"
                priority
              />
            </div>
          </div>
        </div>

        {/* Updated Scroll indicator */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-12 flex-col items-center gap-2 text-black/40">
          <div className="h-12 w-[1px] bg-current animate-pulse" />
          <p className="text-xs uppercase tracking-[0.2em]">Scroll</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
