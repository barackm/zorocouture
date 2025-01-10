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
    <section className="relative min-h-screen w-full px-6 sm:px-8 md:px-16 lg:px-40 overflow-hidden">
      <div
        className="fixed hidden lg:flex items-center gap-4"
        style={{
          left: "4rem",
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

      <div className="min-h-screen flex flex-col items-center lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2 relative z-10 pt-32 lg:pt-0">
          <div className="space-y-8">
            <h1 className="text-[clamp(6rem,20vw,9rem)] font-extralight leading-[0.85] tracking-[-0.02em] text-black/80">
              Zoro
              <span className="block font-thin text-black/60">Couture</span>
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-2xl text-black/60 max-w-lg">
              — L&apos;art de la haute couture, où chaque point raconte une
              histoire d&apos;élégance.
            </p>
          </div>

          <div className="flex flex-row justify-start gap-16 mt-12">
            <div>
              <p className="text-4xl sm:text-5xl font-light tracking-tight">
                200<span className="text-black/30">+</span>
              </p>
              <p className="text-sm sm:text-base text-black/60 mt-1">
                Projets réalisés
              </p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-light tracking-tight">
                50<span className="text-black/30">+</span>
              </p>
              <p className="text-sm sm:text-base text-black/60 mt-1">
                Clients satisfaits
              </p>
            </div>
          </div>

          <div className="flex gap-8 mt-12">
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

        <div className="w-full h-[60vh] lg:h-screen lg:absolute lg:right-32 lg:top-0 lg:w-[55%] mt-4 lg:mt-0 -translate-y-12 lg:translate-y-0">
          <div className="relative h-full w-full">
            <Image
              src="/images/zoro.png"
              alt="Profil du tailleur"
              fill
              sizes="(max-width: 768px) 100vw, 70vw"
              className="object-contain object-center lg:object-right-bottom scale-110"
              priority
              quality={90}
            />
          </div>
        </div>

        <div className="hidden md:flex fixed lg:absolute left-1/2 -translate-x-1/2 bottom-8 flex-col items-center gap-2 text-black/40">
          <div className="h-12 w-[1px] bg-current animate-pulse" />
          <p className="text-xs uppercase tracking-[0.2em]">Scroll</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
