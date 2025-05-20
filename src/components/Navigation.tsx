import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const { language, toggleLanguage } = useLanguage();

  const oppositeLang = language === "en" ? "fi" : "en";

  const labels = {
    github: "GitHub",
    linkedin: "LinkedIn",
    email: language === "en" ? "Email Me" : "Lähetä sähköpostia",
  };

  return (
    <motion.nav
      className="bg-gray-100 text-gray-900 shadow-md fixed top-0 left-0 right-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center items-center h-16">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
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
              href="mailto:Karri.Partanen@metropolia.fi"
              className="text-gray-700 hover:text-gray-400 transition text-4xl"
            >
              <FaEnvelope />
            </a>
            <button
              onClick={toggleLanguage}
              className="focus:outline-none border-none bg-transparent p-0 hover:opacity-80 transition cursor-pointer"
              aria-label="Toggle language"
            >
              <Image
                src={`img/${oppositeLang}.png`}
                alt={`Switch to ${oppositeLang.toUpperCase()}`}
                width={40}
                height={40}
              />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            className="md:hidden bg-gray-700 px-4 py-4 flex flex-col items-start space-y-5 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <a
              href="https://github.com/karripar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 flex hover:text-gray-400 transition text-4xl"
            >
              <FaGithub />
              <p className="ml-2 text-xl">{labels.github}</p>
            </a>
            <a
              href="https://www.linkedin.com/in/karri-partanen-39768b165/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 flex hover:text-blue-800 transition text-4xl"
            >
              <FaLinkedin />
              <p className="ml-2 text-xl">{labels.linkedin}</p>
            </a>
            <a
              href="mailto:Karri.Partanen@metropolia.fi"
              className="text-gray-300 flex hover:text-gray-400 transition text-4xl"
            >
              <FaEnvelope />
              <p className="ml-2 text-xl">{labels.email}</p>
            </a>
            <button
              onClick={toggleLanguage}
              className="focus:outline-none border-none bg-transparent p-0 hover:opacity-80 transition cursor-pointer"
              aria-label="Toggle language"
            >
              <Image
                src={`img/${oppositeLang}.png`}
                alt={`Switch to ${oppositeLang.toUpperCase()}`}
                width={40}
                height={40}
              />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
