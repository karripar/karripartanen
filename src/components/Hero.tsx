"use client";

import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const textContent = {
  hello: { en: "Karri Partanen", fi: "Karri Partanen" },
  eyebrow: {
    en: "Software Developer & ICT Student",
    fi: "Ohjelmistokehittäjä & ICT-opiskelija",
  },
  available: {
    en: "Available for new roles",
    fi: "Avoin uusille mahdollisuuksille",
  },
  location: {
    en: "Espoo / Helsinki",
    fi: "Espoo / Helsinki",
  },
  intro: {
    en: "Software developer studying ICT at Metropolia with a focus on web development. I build reliable full-stack applications, scalable backend APIs, and modern user interfaces.",
    fi: "Tieto- ja viestintätekniikkaa Metropoliassa opiskeleva ohjelmistokehittäjä (web-kehityksen linja). Kehitän kestäviä full-stack-sovelluksia, taustajärjestelmien rajapintoja ja moderneja käyttöliittymiä.",
  },
  detail: {
    en: "Experience working across TypeScript, React, Next.js, Node.js, and Python, with a strong interest in distributed systems, modern database architectures, and practical application engineering.",
    fi: "Kokemusta mm. TypeScript-, React-, Next.js-, Node.js- ja Python-teknologioista. Erityisenä kiinnostuksena hajautetut järjestelmät, modernit tietokannat ja käytännön ohjelmistotuotanto.",
  },
  viewWork: { en: "Selected projects", fi: "Projektit" },
  contact: { en: "Get in touch", fi: "Ota yhteyttä" },
  follow: { en: "Connect", fi: "Linkit" },
  scroll: { en: "Scroll to explore", fi: "Vieritä alas" },
};

export default function Hero() {
  const { language } = useLanguage();

  return (
    <section className="hero section-pad" id="top">
      <div className="hero-copy">
        <div className="availability">
          <span />
          {textContent.available[language]} &bull; {textContent.location[language]}
        </div>

        <p className="eyebrow">{textContent.eyebrow[language]}</p>

        <h1 className="display-title">
          {textContent.hello[language]}
        </h1>

        <p className="hero-intro">{textContent.intro[language]}</p>
        <p className="hero-detail">{textContent.detail[language]}</p>

        <div className="hero-actions">
          <a className="primary-link" href="#projects">
            {textContent.viewWork[language]}
            <ArrowUpRight size={18} />
          </a>
          <a className="text-link" href="#contact">
            {textContent.contact[language]}
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      <div className="hero-bottom">
        <div className="socials">
          <span>{textContent.follow[language]}</span>
          <a
            href="https://github.com/karripar"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/karri-partanen-39768b165/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </a>
        </div>

        <a className="scroll-cue" href="#about">
          {textContent.scroll[language]}
          <span>↓</span>
        </a>
      </div>
    </section>
  );
}