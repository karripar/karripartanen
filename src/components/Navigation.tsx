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
    home: language === "en" ? "Home" : "Etusivu",
    about: language === "en" ? "About" : "Minusta",
    stack: language === "en" ? "Stack" : "Teknologiat",
    projects: language === "en" ? "Projects" : "Projektit",
    contact: language === "en" ? "Contact" : "Yhteystiedot",
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
    hidden: { opacity: 0, x: 10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.04, duration: 0.18 },
    }),
  };

  const iconClass =
    "relative rounded-full p-2 text-slate-800 hover:bg-slate-100 transition-colors duration-200";

  const navLinkClass =
    "text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-slate-900";

  const navItems = [
    { label: labels.about, href: "#about" },
    { label: labels.stack, href: "#stack" },
    { label: labels.projects, href: "#projects" },
    { label: labels.contact, href: "#contact" },
  ];

  /* ----------------------------- render ----------------------------- */

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
      >
        <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <a
            href="#"
            className="text-sm font-semibold tracking-[0.14em] text-slate-900 uppercase"
          >
            KP
          </a>

          <div className="hidden items-center gap-5 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={navLinkClass}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <motion.a
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              href="https://github.com/karripar"
              target="_blank"
              className={iconClass}
            >
              <FaGithub className="text-2xl text-gray-700" />
            </motion.a>

            <motion.a
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              href="https://www.linkedin.com/in/karri-partanen-39768b165/"
              target="_blank"
              className={iconClass}
            >
              <FaLinkedin className="text-2xl text-sky-700" />
            </motion.a>

            <motion.a
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:karri.t.partanen@gmail.com"
              className={iconClass}
            >
              <FaEnvelope className="text-2xl text-gray-700" />
            </motion.a>
          </div>

          {/* Right utilities */}
          <div className="absolute right-4 flex items-center space-x-2 md:static md:ml-2">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={toggleLanguage}
              className="rounded-full border border-slate-200 bg-white p-1 shadow-sm"
            >
              <Image
                src={`/img/${oppositeLang}.png`}
                alt="language toggle"
                width={28}
                height={14}
                              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsInfoOpen(true)}
              className={iconClass}
            >
              <Info className="w-5 h-5" />
            </motion.button>

            {/* Mobile menu */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden rounded-full p-2 text-slate-800 hover:bg-slate-100"
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
            className="fixed top-0 right-0 z-50 flex h-full w-72 flex-col space-y-5 border-l border-slate-200 bg-white p-6 text-slate-900"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <button className="self-end" onClick={() => setIsOpen(false)}>
              <X />
            </button>

            <div className="space-y-2 border-b border-slate-200 pb-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                >
                  {item.label}
                </a>
              ))}
            </div>

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
                className="flex items-center space-x-3 text-base"
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) =>
              e.currentTarget === e.target && setIsInfoOpen(false)
            }
          >
            <motion.div
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative max-w-xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm"
            >
              <button
                className="absolute top-6 right-6"
                onClick={() => setIsInfoOpen(false)}
              >
                <X />
              </button>

              <h2 className="text-2xl font-bold mb-4">{labels.infoTitle}</h2>
              <p className="text-gray-600 leading-relaxed">{labels.siteInfo}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
