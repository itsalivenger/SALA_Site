"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight, Download, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50 && !scrolled) {
      setScrolled(true);
    } else if (latest <= 50 && scrolled) {
      setScrolled(false);
    }
  });

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "À Propos", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || isOpen
          ? "bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow-sm py-4"
          : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center relative z-50">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-primary/80 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform duration-300">
                  S
                </div>
                <span className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 ${!scrolled && !isOpen ? 'md:text-white' : ''} transition-colors`}>
                  Sala
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative group px-5 py-2"
                >
                  <span className={`relative z-10 text-base font-semibold transition-colors duration-300 ${!scrolled ? "text-white group-hover:text-white" : "text-slate-600 group-hover:text-primary"}`}>
                    {link.name}
                  </span>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${!scrolled ? "bg-white" : "bg-primary"}`} />
                </Link>
              ))}
            </div>

            {/* CTA Button and Language Switcher */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/download"
                className={`group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${!scrolled
                  ? "bg-white text-slate-900 hover:bg-gray-100"
                  : "bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-primary/20"
                  }`}
              >
                <span>Télécharger</span>
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </Link>

              <div className="relative group">
                <button className={`flex items-center gap-1 font-semibold transition-colors ${!scrolled ? "text-white hover:text-white/80" : "text-gray-600 hover:text-primary"}`}>
                  <span className="uppercase">FR</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full right-0 pt-4 w-32 hidden group-hover:block">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors cursor-pointer">
                      Français
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors cursor-pointer">
                      English
                    </button>
                    <button className="w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors font-arabic cursor-pointer">
                      العربية
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden relative z-50">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-full focus:outline-none transition-colors ${!scrolled && !isOpen ? "text-white hover:bg-white/10" : "text-slate-900 hover:bg-gray-100"
                  }`}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-0 left-0 w-full bg-white z-40 flex flex-col pt-24 px-6"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-3xl font-bold text-slate-900 hover:text-primary transition-colors py-2"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="pt-8"
                >
                  <Link
                    href="/download"
                    onClick={() => setIsOpen(false)}
                    className="flex w-full items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-slate-900 text-white font-bold text-lg shadow-xl shadow-blue-900/20"
                  >
                    <span>Télécharger l'App</span>
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
