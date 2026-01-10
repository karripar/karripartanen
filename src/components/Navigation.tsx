import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import { Menu, X, Info } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

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
        ? "This site is a portfolio project built with Next.js, Tailwind CSS, and React. It features responsive design, multi-language support, and integrates social media links."
        : "Tämä sivusto on portfolioprojekti, joka on rakennettu Next.js:llä, Tailwind CSS:llä ja Reactilla. Se sisältää responsiivisen suunnittelun, monikielisen tuen ja sosiaalisen median linkkien integroinnin.",
  };

  /* ----------------------------- effects ----------------------------- */

  useEffect(() => {
    document.body.style.overflow = isOpen || isInfoOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, isInfoOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setIsInfoOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  /* ----------------------------- animations ----------------------------- */

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.08 },
    }),
  };

  const iconClass =
    "relative p-2 rounded-full hover:bg-gray-200/60 transition-colors";

  /* ----------------------------- render ----------------------------- */

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-white/30 shadow-sm"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-center h-16 relative">
          {/* Logo */}

          {/* Desktop center icons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              whileHover={{ y: -2, scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              href="https://github.com/karripar"
              target="_blank"
              className={iconClass}
            >
              <FaGithub className="text-2xl text-gray-700" />
            </motion.a>

            <motion.a
              whileHover={{ y: -2, scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              href="https://www.linkedin.com/in/karri-partanen-39768b165/"
              target="_blank"
              className={iconClass}
            >
              <FaLinkedin className="text-2xl text-blue-600" />
            </motion.a>

            <motion.a
              whileHover={{ y: -2, scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              href="mailto:karri.t.partanen@gmail.com"
              className={iconClass}
            >
              <FaEnvelope className="text-2xl text-gray-700" />
            </motion.a>
          </div>

          {/* Right utilities */}
          <div className="absolute right-4 flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleLanguage}
            >
              <Image
                src={`/img/${oppositeLang}.png`}
                alt="language toggle"
                width={28}
                height={28}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsInfoOpen(true)}
              className={iconClass}
            >
              <Info className="w-5 h-5" />
            </motion.button>

            {/* Mobile menu */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2"
            >
              <Menu />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ================= MOBILE BACKDROP ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* ================= MOBILE DRAWER ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-72 bg-gray-900 text-white z-50 p-6 flex flex-col space-y-6"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
          >
            <button
              className="self-end"
              onClick={() => setIsOpen(false)}
            >
              <X />
            </button>

            {[
              {
                icon: <FaGithub />,
                label: labels.github,
                href: "https://github.com/karripar",
              },
              {
                icon: <FaLinkedin />,
                label: labels.linkedin,
                href: "https://www.linkedin.com/in/karri-partanen-39768b165/",
              },
              {
                icon: <FaEnvelope />,
                label: labels.email,
                href: "mailto:karri.t.partanen@gmail.com",
              },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                custom={i}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                href={item.href}
                className="flex items-center space-x-3 text-lg"
              >
                {item.icon}
                <span>{item.label}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= INFO MODAL ================= */}
      <AnimatePresence>
        {isInfoOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) =>
              e.currentTarget === e.target && setIsInfoOpen(false)
            }
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-xl p-8 max-w-xl text-center"
            >
              <button
                className="absolute top-6 right-6"
                onClick={() => setIsInfoOpen(false)}
              >
                <X />
              </button>

              <h2 className="text-2xl font-bold mb-4">
                {labels.infoTitle}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {labels.siteInfo}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
