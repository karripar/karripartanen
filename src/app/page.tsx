"use client";

import { Mail } from "lucide-react";
import Projects from "@/components/Projects";
import projects from "../../data/projects.json";
import TechStack from "@/components/TechStack";
import Navigation from "@/components/Navigation";
import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export default function Home() {
  const { language } = useLanguage();

  const textContent = {
    contactMe: { en: "Let\'s work together", fi: "Tehdään yhteistyötä" },
    contactText: {
      en: "Open to internship, full-time, and freelance opportunities. The fastest way to reach me is email.",
      fi: "Olen avoin harjoittelu-, vakituisiin ja freelance-rooleihin. Nopein tapa tavoittaa minut on sähköposti.",
    },
    emailButton: { en: "Send email", fi: "Lähetä sähköposti" },
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navigation />

      {/* ================= HERO ================= */}
      <Hero />

      {/* ================= ABOUT ================= */}
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-14">
        <AboutMe />
      </div>

      {/* ================= SKILLS ================= */}
      <section
        id="stack"
        className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-14"
      >
        <TechStack />
      </section>

      {/* ================= PROJECTS ================= */}
      <section
        id="projects"
        className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-14"
      >
        <Projects projects={projects} />
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="mx-auto max-w-5xl px-5 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10"
        >
          <span className="mb-3 inline-flex rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
            {language === "fi" ? "Yhteydenotto" : "Contact"}
          </span>
          <h2 className="mb-3 text-3xl font-semibold tracking-tight text-slate-900">
            {textContent.contactMe[language]}
          </h2>
          <p className="mx-auto mb-7 max-w-2xl text-slate-600">
            {textContent.contactText[language]}
          </p>

          <a
            href="mailto:karri.t.partanen@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-slate-900 bg-slate-900 px-6 py-3 font-medium !text-white transition-colors duration-200 hover:bg-slate-800"
          >
            <Mail size={18} />
            {textContent.emailButton[language]}
          </a>
        </motion.div>
      </section>
    </main>
  );
}
