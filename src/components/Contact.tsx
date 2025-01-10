import React from "react";
import {
  HiUser,
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiArrowRight,
} from "react-icons/hi";
import { BsChatDots } from "react-icons/bs";
import Button from "./Button";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="w-full py-20 px-8 md:px-16 lg:px-32">
      <div data-aos="fade-up" className="max-w-2xl mb-20">
        <span className="text-gray-500 text-sm tracking-widest">
          Contactez-nous
        </span>
        <h2 className="text-[clamp(3rem,10vw,6rem)] font-extralight leading-[0.85] tracking-[-0.02em] text-black/80">
          Donnez Vie
          <span className="block font-thin text-black/60">à Vos Idées</span>
        </h2>
        <p className="text-lg text-gray-700 mt-6">
          Prenez rendez-vous pour une consultation personnalisée et laissez-nous
          transformer votre vision en réalité.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div data-aos="fade-right" className="space-y-8">
          <form className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full bg-gray-50 px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-black transition-all"
                />
                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400">
                  <HiUser size={20} />
                </span>
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full bg-gray-50 px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-black transition-all"
                />
                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400">
                  <HiMail size={20} />
                </span>
              </div>
              <div className="relative">
                <textarea
                  placeholder="Votre message"
                  rows={6}
                  className="w-full bg-gray-50 px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-black transition-all resize-none"
                ></textarea>
              </div>
            </div>
            <Button fullWidth type="submit" icon={<HiArrowRight />}>
              Envoyer le message
            </Button>
          </form>

          <div className="flex items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <HiPhone size={16} />
              <span>+243 994 068 185</span>
            </div>
            <div className="flex items-center gap-2">
              <HiMail size={16} />
              <span>contact@zorocouture.com</span>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-delay="200" className="space-y-12">
          <div className="relative">
            <Image
              src="/images/contact2.jpg"
              alt="Notre atelier"
              width={800}
              height={600}
              className="w-full aspect-[4/3] object-cover rounded-xl"
            />
            <div className="absolute bottom-8 left-8 bg-white p-6 rounded-lg shadow-xl">
              <p className="text-sm text-gray-500 tracking-widest">
                NOTRE ATELIER
              </p>
              <h4 className="text-xl font-bold mt-2">Goma, Himbi</h4>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <HiLocationMarker size={24} className="text-gray-700" />
              </div>
              <h5 className="text-xl font-semibold">Visitez-nous</h5>
              <p className="text-gray-600">
                Du Lundi au Samedi
                <br />
                9h - 18h
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <BsChatDots size={24} className="text-gray-700" />
              </div>
              <h5 className="text-xl font-semibold">Sur Rendez-vous</h5>
              <p className="text-gray-600">
                Consultation personnalisée
                <br />
                Sur mesure
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
