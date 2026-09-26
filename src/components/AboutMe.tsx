"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const textContent = {
  label: { en: "01 / About", fi: "01 / Minusta" },
  title: {
    en: "Software developer focused on building things that work.",
    fi: "Ohjelmistokehittäjä, joka keskittyy toimivien asioiden rakentamiseen.",
  },
  body: {
    en: "I'm an ICT student and software developer with a background in web development. Recently, I've been focusing more on backend development, AI applications, and cybersecurity.",
    fi: "Olen ICT-opiskelija ja ohjelmistokehittäjä, jonka tausta on web-kehityksessä. Viime aikoina olen keskittynyt enemmän backend-kehitykseen, tekoälysovelluksiin ja kyberturvallisuuteen.",
  },
  aside: {
    en: "I like understanding how things work and making them better.",
    fi: "Haluan ymmärtää, miten asiat toimivat, ja tehdä niistä parempia.",
  },
};

export default function AboutMe() {
  const { language } = useLanguage();

  return (
    <section className="about section-pad" id="about">
      <div className="section-label">{textContent.label[language]}</div>
      <div className="about-grid">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
        >
          {textContent.title[language]}
        </motion.h2>
        <div className="about-copy">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.24, ease: "easeOut", delay: 0.05 }}
          >
            {textContent.body[language]}
          </motion.p>
          <motion.blockquote
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.24, ease: "easeOut", delay: 0.1 }}
          >
            {textContent.aside[language]}
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
