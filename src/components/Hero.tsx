"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

import { useLanguage } from "@/contexts/LanguageContext";

const textContent = {
  eyebrow: { en: "Web Developer Portfolio", fi: "Web-kehittäjän portfolio" },
  greeting: { en: "Hi, I'm Karri.", fi: "Hei, olen Karri." },
  roleLine: {
    en: "I build practical, fast, and maintainable web products.",
    fi: "Rakennan käytännöllisiä, nopeita ja ylläpidettäviä verkkotuotteita.",
  },
  intro: {
    en: "Software Engineer trainee at Metropolia University of Applied Sciences.",
    fi: "Ohjelmistokehittäjä-harjoittelija Metropolia ammattikorkeakoulussa.",
  },
  contact: { en: "Contact", fi: "Yhteystiedot" },
  availability: { en: "Open to work", fi: "Avoin työmahdollisuuksille" },
  location: { en: "Based in Finland", fi: "Sijainti Suomi" },
};

export default function Hero() {
  const { language } = useLanguage();

  return (
    <section className="relative flex min-h-[84vh] items-center px-5 pb-8 pt-24 sm:px-6 sm:pt-28">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.24, ease: "easeOut" }}
        className="relative z-10 mx-auto grid w-full max-w-6xl gap-8 rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center"
      >
        <div>
          <span className="inline-flex rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
            {textContent.eyebrow[language]}
          </span>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            {textContent.greeting[language]}
          </h1>

          <p className="mt-4 text-base font-medium text-slate-700 sm:text-lg">
            {textContent.roleLine[language]}
          </p>

          <p className="mt-2 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {textContent.intro[language]}
          </p>

          <div className="mt-7 flex flex-wrap gap-3 text-white">
            <a
              href="#projects"
              className="text-white inline-flex items-center rounded-full border border-slate-900 bg-slate-900 px-5 py-2.5 text-sm font-medium transition-colors duration-200 hover:bg-slate-800"
            >
              {language === "fi" ? "Katso projektini" : "View my projects"}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium !text-slate-800 transition-colors duration-200 hover:bg-slate-100"
            >
              {textContent.contact[language]}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
              {textContent.availability[language]}
            </span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
              {textContent.location[language]}
            </span>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-7">
          <div className="mx-auto h-32 w-32 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src="/img/karri.jpg"
              alt="Profile"
              width={128}
              height={128}
              className="h-full w-full object-cover"
            />
          </div>

          <h2 className="mt-5 text-center text-xl font-semibold text-slate-900">
            Karri Partanen
          </h2>

          <div className="mt-5 flex items-center justify-center gap-4 text-xl text-slate-700">
            <a
              href="https://github.com/karripar"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-200 bg-white p-2.5 transition-colors duration-200 hover:bg-slate-100"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/karri-partanen-39768b165/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-200 bg-white p-2.5 text-sky-700 transition-colors duration-200 hover:bg-slate-100"
            >
              <FaLinkedin />
            </a>
          </div>

          <p className="mt-4 text-center text-sm text-slate-600">
            {language === "fi"
              ? "Rakennan web-ratkaisut ideasta julkaisuun."
              : "I build web products from concept to launch."}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
