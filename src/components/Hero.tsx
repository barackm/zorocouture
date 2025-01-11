"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";
import { useFooterVisibility } from "@/context/FooterVisibilityContext";

const Hero: React.FC = () => {
  const { isFooterVisible } = useFooterVisibility();
  const [isIntersecting, setIsIntersecting] = useState(false);
  const fixedTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -80% 0px",
      }
    );

    if (fixedTextRef.current) {
      observer.observe(fixedTextRef.current);
    }

    return () => {
      if (fixedTextRef.current) {
        observer.unobserve(fixedTextRef.current);
      }
    };
  }, []);

  const shouldBeWhite = isFooterVisible && isIntersecting;

  const socialLinks = [
    {
      icon: <FiInstagram size={20} />,
      href: "https://www.facebook.com/johnsongs/about?locale=ms_MY",
    },
    {
      icon: <FiTwitter size={20} />,
      href: "https://www.facebook.com/johnsongs/about?locale=ms_MY",
    },
    {
      icon: <FiFacebook size={20} />,
      href: "https://www.facebook.com/johnsongs/about?locale=ms_MY",
    },
  ];

  return (
    <section className="relative min-h-screen w-full px-6 sm:px-8 md:px-16 lg:px-40 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orb - Increased size and opacity */}
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-rose-200/30 to-violet-200/30 rounded-full blur-[80px] z-0 animate-float" />

        {/* Additional Gradient Orb */}
        <div className="absolute -bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-l from-sky-200/20 to-emerald-200/20 rounded-full blur-[100px] z-0 animate-float animation-delay-400" />

        {/* Subtle Grid Pattern - Increased opacity */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:48px_48px] z-0" />

        {/* Decorative Circles - Made more visible */}
        <div className="absolute top-20 right-[15%] w-4 h-4 border-2 border-black/20 rounded-full animate-float animation-delay-200" />
        <div className="absolute top-32 right-[25%] w-3 h-3 border-2 border-black/15 rounded-full animate-float animation-delay-400" />
        <div className="absolute bottom-32 left-[20%] w-5 h-5 border-2 border-black/20 rounded-full animate-float animation-delay-600" />

        {/* Subtle Lines - Made thicker and more visible */}
        <div className="absolute top-40 right-20 w-32 h-[2px] bg-black/10 rotate-45" />
        <div className="absolute bottom-40 left-20 w-32 h-[2px] bg-black/10 -rotate-45" />

        {/* Additional decorative elements */}
        <div className="absolute top-1/3 left-20 w-24 h-24 border border-black/10 rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-32 w-16 h-16 border border-black/10 rotate-45" />
      </div>

      <div
        ref={fixedTextRef}
        className="fixed hidden lg:flex items-center gap-4 transition-colors duration-300"
        style={{
          left: "4rem",
          top: "50vh",
          transform: "translateY(-50%) rotate(90deg) translateX(-50%)",
          transformOrigin: "0 50%",
        }}
      >
        <div
          className={`w-[200px] h-[1px] ${
            shouldBeWhite ? "bg-white/20" : "bg-black/20"
          } transition-colors duration-300`}
        ></div>
        <span
          className={`text-xs uppercase tracking-[0.2em] whitespace-nowrap ${
            shouldBeWhite ? "text-white/60" : "text-black/60"
          } transition-colors duration-300`}
        >
          Créateur de Mode — Depuis 2018
        </span>
        <div
          className={`w-[200px] h-[1px] ${
            shouldBeWhite ? "bg-white/20" : "bg-black/20"
          } transition-colors duration-300`}
        ></div>
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
