"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { HiArrowUpRight } from "react-icons/hi2";

const TypingText = () => {
  const words = ["Couture", "Veste"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (text !== currentWord) {
            setText(currentWord.slice(0, text.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1500); // Wait before deleting
          }
        } else {
          if (text === "") {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          } else {
            setText(currentWord.slice(0, text.length - 1));
          }
        }
      },
      isDeleting ? 100 : 200
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <span className="inline-block w-[100px] font-bold">
      {text}
      <span className="animate-blink font-thin -translate-y-6">|</span>
    </span>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/about", label: "À Propos" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-white/90 backdrop-blur-lg shadow-sm"
          : "py-6 bg-white/50 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-32">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="hover:opacity-70 transition-opacity flex items-center"
          >
            <img
              src="/logo1.png"
              alt="Zoro Couture Logo"
              className="h-12 w-auto"
            />
            <span className="text-2xl font-extralight uppercase text-gray-900 ml-2">
              Zoro&nbsp;
              <TypingText />
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-12">
            <div className="flex space-x-12">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative text-gray-600 hover:text-black transition-colors text-sm uppercase tracking-wider"
                >
                  {item.label}
                  {pathname === item.href && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 top-full block h-px w-full bg-black"
                    />
                  )}
                  <span className="absolute left-0 top-full block h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
            <Button
              href="/contact"
              variant="outline"
              icon={<HiArrowUpRight />}
              className="!py-2"
            >
              Réserver
            </Button>
          </div>

          {/* Updated Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors relative"
          >
            <span className="sr-only">Toggle Menu</span>
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block h-0.5 w-5 bg-black transform transition duration-300 ease-in-out ${
                  isOpen ? "rotate-45 translate-y-0.5" : "-translate-y-0.5"
                }`}
              />
              <span
                className={`block h-0.5 bg-black transform transition-all duration-300 ease-in-out ${
                  isOpen ? "w-0 opacity-0" : "w-5 opacity-100 my-0.5"
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-black transform transition duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-0.5"
                }`}
              />
            </div>
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4"
            >
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-4 shadow-lg">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-50 rounded-xl transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="px-4 py-3">
                  <Button href="/contact" fullWidth icon={<HiArrowUpRight />}>
                    Réserver un Appel
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
