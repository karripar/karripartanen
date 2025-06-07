import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import { Menu, X, Wrench, Sun, Moon } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleInfo = () => setIsInfoOpen(!isInfoOpen);

  const { language, toggleLanguage } = useLanguage();

  const oppositeLang = language === "fi" ? "en" : "fi";

  const labels = {
    github: "GitHub",
    linkedin: "LinkedIn",
    email: language === "en" ? "Email Me" : "Lähetä sähköpostia",
    infoTitle: language === "en" ? "About this Site" : "Tietoa sivusta",
    close: language === "en" ? "Close" : "Sulje",
    siteInfo:
      language === "en"
        ? "This site is a portfolio project built with Next.js, Tailwind CSS, and React. It features responsive design, multi-language support, and integrates social media links. Feel free to explore and contact me using the links in the navigation."
        : "Tämä sivusto on portfolioprojekti, joka on rakennettu Next.js:llä, Tailwind CSS:llä ja Reactilla. Se sisältää responsiivisen suunnittelun, monikielisen tuen ja sosiaalisen median linkkien integroinnin. Voit tutustua sivustoon ja ottaa minuun yhteyttä navigaation linkkien kautta.",
  };

  useEffect(() => {
    if (isInfoOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup in case component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isInfoOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setIsDarkMode(document.documentElement.classList.contains("dark"));
  }, []);
  

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? "" : "light";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  }

  return (
    <>
      <motion.nav
        className="bg-gray-100 text-gray-900 shadow-md fixed top-0 left-0 right-0 z-50"
        role="navigation"
        aria-label="Main Navigation"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="relative max-w-6xl mx-auto px-4 flex items-center h-16">
          {/* Icons group centered absolutely - desktop only */}
          <div className="absolute left-1/2 transform -translate-x-1/2 space-x-8 items-center hidden md:flex">
            <a
              href="https://github.com/karripar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-400 transition text-4xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/karri-partanen-39768b165/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition text-4xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:karripartanen25@gmail.com"
              className="text-gray-700 hover:text-gray-400 transition text-4xl"
            >
              <FaEnvelope />
            </a>
            <motion.button
              onClick={toggleLanguage}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              className="focus:outline-none bg-transparent p-0 hover:opacity-80 transition"
              aria-label="Toggle language"
            >
              <Image
                src={`img/${oppositeLang}.png`}
                alt={`Switch to ${oppositeLang.toUpperCase()}`}
                width={40}
                height={40}
              />
            </motion.button>
          </div>

          {/* Wrench icon pinned right - always visible */}
          <div className="ml-auto flex items-center space-x-4">
            {/* Wrench icon */}
            <button
              onClick={toggleInfo}
              aria-label="Site Information"
              className="text-gray-700 hover:text-gray-400 transition text-3xl focus:outline-none"
            >
              <Wrench />
            </button>

            {/* Color theme toggle (light/dark)*/}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-400 transition text-2xl focus:outline-none"
            >
              {isDarkMode ? (
                <Sun className="w-6 h-6" />
              ) : (
                <Moon className="w-6 h-6" />
              )}
            </button>

            {/* Mobile hamburger menu toggle - visible only on mobile */}
            <button
              onClick={toggleMenu}
              className="focus:outline-none focus:ring-2 focus:ring-white md:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - only visible on mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              layout
              className="md:hidden bg-gray-900 bg-opacity-70 backdrop-blur-md px-6 py-6 flex flex-col items-start space-y-6 shadow-lg overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <a
                href="https://github.com/karripar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 flex hover:text-gray-400 transition text-3xl"
                onClick={() => setIsOpen(false)}
              >
                <FaGithub />
                <p className="ml-2 text-lg font-semibold">{labels.github}</p>
              </a>
              <a
                href="https://www.linkedin.com/in/karri-partanen-39768b165/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 flex hover:text-blue-800 transition text-3xl"
                onClick={() => setIsOpen(false)}
              >
                <FaLinkedin />
                <p className="ml-2 text-lg font-semibold">{labels.linkedin}</p>
              </a>
              <a
                href="mailto:karripartanen25@gmail.com"
                className="text-gray-200 flex hover:text-gray-400 transition text-3xl"
                onClick={() => setIsOpen(false)}
              >
                <FaEnvelope />
                <p className="ml-3 text-lg font-semibold">{labels.email}</p>
              </a>
              <motion.button
                onClick={toggleLanguage}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                className="focus:outline-none bg-transparent p-0 hover:opacity-80 transition"
                aria-label="Toggle language"
              >
                <Image
                  src={`img/${oppositeLang}.png`}
                  alt={`Switch to ${oppositeLang.toUpperCase()}`}
                  width={40}
                  height={40}
                />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Full screen info modal */}
      <AnimatePresence>
        {isInfoOpen && (
          <motion.div
            key="info-modal"
            className="fixed inset-0 bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center p-6 md:p-40 z-60 overflow-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              // Optional: close modal on clicking outside content
              if (e.target === e.currentTarget) toggleInfo();
            }}
          >
            <button
              onClick={toggleInfo}
              className="self-end mb-4 text-gray-300 hover:text-white text-3xl focus:outline-none"
              aria-label={labels.close}
            >
              <X />
            </button>

            <div className="max-w-3xl text-center text-gray-100">
              <h2 className="text-4xl font-bold mb-6">{labels.infoTitle}</h2>
              <p className="text-lg leading-relaxed">{labels.siteInfo}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
