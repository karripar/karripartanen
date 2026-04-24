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
    contactMe: { en: "Get in Touch", fi: "Ota yhteyttä" },
    contactText: {
      en: "Want to work together or just say hi? Feel free to reach out!",
      fi: "Haluatko työskennellä yhdessä tai vain sanoa hei? Ota rohkeasti yhteyttä!",
    },
    emailButton: { en: "Email Me", fi: "Lähetä sähköpostia" },
  };

  return (
    <main className="min-h-screen text-slate-900">
      <Navigation />

      {/* ================= HERO ================= */}
      <Hero />

      {/* ================= ABOUT ================= */}
      <AboutMe />

      {/* ================= SKILLS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <TechStack />
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <Projects projects={projects} />
      </section>

      {/* ================= CONTACT ================= */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="rounded-3xl border border-slate-200/90 bg-slate-900 p-10 text-center text-white shadow-sm"
        >
          <h2 className="text-3xl font-semibold mb-4">
            {textContent.contactMe[language]}
          </h2>
          <p className="mb-6 text-slate-300">
            {textContent.contactText[language]}
          </p>

          <a
            href="mailto:karri.t.partanen@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-slate-500 bg-slate-100 px-6 py-3 font-medium text-slate-900 transition-colors duration-200 hover:bg-white"
          >
            <Mail size={18} />
            {textContent.emailButton[language]}
          </a>
        </motion.div>
      </section>
    </main>
  );
}
