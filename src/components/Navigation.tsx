import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const { language, toggleLanguage } = useLanguage();

  const labels = {
    about: language === "en" ? "About" : "Minusta",
    stack: language === "en" ? "Stack" : "Teknologiat",
    projects: language === "en" ? "Projects" : "Projektit",
    contact: language === "en" ? "Contact" : "Yhteystiedot",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: language === "en" ? "Email" : "Sähköposti",
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const resolvedTheme = storedTheme === "light" ? "light" : "dark";
    setTheme(resolvedTheme);
    document.documentElement.dataset.theme = resolvedTheme;
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.classList.toggle("menu-open", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.classList.remove("menu-open");
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const navItems = [
    { label: labels.about, href: "#about" },
    { label: labels.stack, href: "#stack" },
    { label: labels.projects, href: "#projects" },
    { label: labels.contact, href: "#contact" },
  ];

  const navigateTo = (href: string) => {
    const id = href.replace("#", "");
    const section = document.getElementById(id);
    if (!section) {
      return;
    }

    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", href);
    setIsOpen(false);
  };

  return (
    <>
      <motion.header
        className="site-header"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
      >
        <a href="#top" className="wordmark" aria-label="Homepage">
          <span className="mark-bracket">[</span>KP
          <span className="mark-bracket">]</span>
        </a>

        <nav className="main-nav desktop-nav" aria-label="Main navigation">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => {
                event.preventDefault();
                navigateTo(item.href);
              }}
            >
              <span>0{index + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            onClick={toggleLanguage}
            className="language-toggle"
            aria-label={
              language === "en"
                ? "Switch language to Finnish"
                : "Switch language to English"
            }
          >
            <span className={language === "en" ? "active" : ""}>EN</span>
            <i />
            <span className={language === "fi" ? "active" : ""}>FI</span>
          </button>

          <a
            href="https://github.com/karripar"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-button"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/karri-partanen-39768b165/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-button"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:karri.t.partanen@gmail.com"
            className="icon-button"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

          <button
            type="button"
            className="icon-button menu-button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X /> : <Menu />}
          </button>

          <button
            type="button"
            onClick={() =>
              setTheme((currentTheme) =>
                currentTheme === "dark" ? "light" : "dark",
              )
            }
            className="icon-button"
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
        </div>
      </motion.header>

      <div
        className={`mobile-nav-backdrop ${isOpen ? "is-open" : ""}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <nav
        className={`mobile-nav ${isOpen ? "is-open" : ""}`}
        aria-label="Mobile navigation"
      >
        {navItems.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(event) => {
              event.preventDefault();
              navigateTo(item.href);
            }}
          >
            <span>0{index + 1}</span>
            {item.label}
          </a>
        ))}
      </nav>
    </>
  );
};

export default Navigation;
