"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const textContent = {
  aboutMeHeading: { en: "About Me", fi: "Tietoa minusta" },
  introTag: { en: "Developer profile", fi: "Kehittäjäprofiili" },
  introLine: {
    en: "I am a fullstack-oriented web developer who focuses on shipping usable products with clean architecture and dependable execution.",
    fi: "Olen fullstack-painotteinen web-kehittäjä, joka keskittyy toimiviin tuotteisiin, selkeään arkkitehtuuriin ja luotettavaan toteutukseen.",
  },
  focusTitle: { en: "What I bring", fi: "Mitä tuon tiimiin" },
  focusItems: {
    en: [
      "Frontend craftsmanship with practical backend support",
      "Clear communication in international team environments",
      "Hands-on delivery mindset from planning to release",
    ],
    fi: [
      "Huolellinen frontend-osaaminen ja käytännönläheinen backend ammattitaito",
      "Selkeä viestintä kansainvälisissä tiimiympäristöissä",
      "Huolellinen työote suunnittelusta julkaisuun",
    ],
  },
  extraInformation: {
    en: ["In my free time you may find me from the gym, on a hiking trail, building computers or from the closest record store digging for classic vinyls."],
    fi: ["Vapaa-ajallani minut voi löytää kuntosalilta, vaelluspolulta, rakentamasta tietokoneita tai lähimmästä vinyylikaupasta etsimästä klassikkolevyjä."],
  },
  snapshotTitle: { en: "Quick Snapshot", fi: "Pikayhteenveto" },
  snapshotItems: {
    en: [
      "ICT Engineering background",
      "Experience in Agile and project collaboration",
      "Open to internship and full-time opportunities",
    ],
    fi: [
      "ICT-insinööritausta",
      "Kokemusta Agile-työstä ja projektikoordinaatiosta",
      "Avoin harjoittelu- ja kokopäivärooleille",
    ],
  },
};

const containerVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.24,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutMe() {
  const { language } = useLanguage();

  return (
    <section id="about" className="py-2">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10"
      >
        <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {textContent.aboutMeHeading[language]}
          </h2>
          <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-600">
            {textContent.introTag[language]}
          </span>
        </div>

        <div className="relative z-10 grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:gap-8">
          <motion.div variants={itemVariants} className="space-y-5">
            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              {textContent.introLine[language]}
            </p>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                {textContent.focusTitle[language]}
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700 sm:text-base">
                {textContent.focusItems[language].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-900" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm text-slate-600 sm:text-base">
                {textContent.extraInformation[language]}
              </p>
            </div>
          </motion.div>
  

          <motion.div
            variants={itemVariants}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
              {textContent.snapshotTitle[language]}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {textContent.snapshotItems[language].map((fact) => (
                <li key={fact} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-700" />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-600">
              {language === "fi"
                ? "Yhdistän teknisen toteutuksen, käyttäjälähtöisen ajattelun ja sujuvan yhteistyön."
                : "I combine technical execution, user-centered thinking, and smooth collaboration."}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
