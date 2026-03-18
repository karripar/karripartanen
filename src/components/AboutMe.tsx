"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const textContent = {
  aboutMeHeading: { en: "About Me", fi: "Tietoa minusta" },
  introTag: {
    en: "Web developer · Learner · Team player",
    fi: "Web-kehittäjä · Oppija · Tiimipelaaja",
  },
  introLine: {
    en: "I design and build responsive, user-focused web experiences with a strong eye for detail and collaboration.",
    fi: "Suunnittelen ja toteutan responsiivisia, käyttäjälähtöisiä verkkokokemuksia tarkalla huomiolla yksityiskohtiin ja yhteistyöhön.",
  },
  highlightTitle: { en: "Highlights", fi: "Vahvuuteni" },
  highlights: {
    en: [
      "Frontend-focused fullstack developer",
      "Comfortable in international, customer-facing roles",
      "Always experimenting with new tools and workflows",
    ],
    fi: [
      "Frontend-painotteinen fullstack-kehittäjä",
      "Luonteva kansainvälisissä ja asiakasrajapinnan rooleissa",
      "Kokeilen mielelläni uusia työkaluja ja teknologioita",
    ],
  },
  keyFactsTitle: { en: "A bit more", fi: "Lisää minusta" },
  keyFacts: {
    en: [
      "Background in customer service and multicultural teams",
      "Enjoy building PCs and understanding hardware",
      "Free time: football, nature, and music",
      "Actively looking for internship or full-time roles in tech",
    ],
    fi: [
      "Taustaa asiakaspalvelusta ja monikulttuurisista tiimeistä",
      "Pidän tietokoneiden kasaamisesta ja laitteiston konfiguroinnista",
      "Vapaa-aika: jalkapallo, luonto ja livemusiikki",
      "Etsin aktiivisesti harjoittelu- tai kokopäivätyöpaikkaa tekniseltä alalta",
    ],
  },
  aboutMe: {
    en: `I am a dedicated web developer with a strong focus on creating responsive and user-centric web applications. My expertise lies in problem-solving, exploring emerging technologies, and contributing to impactful projects through effective collaboration.

In addition to my technical skills, I have experience working in diverse, international environments. This has improved my communication and teamwork abilities, which I bring to every project.

I am passionate about continuous learning, whether it's building computers to deepen my understanding of hardware or staying updated with the latest advancements in technology. Outside of work, I enjoy football, exploring nature, and engaging in creative pursuits like music.

Currently, I am actively seeking internship or full-time opportunities in the tech industry where I can contribute my skills and grow professionally.`,
    fi: `Olen omistautunut web-kehittäjä, joka keskittyy responsiivisten ja käyttäjäystävällisten verkkosovellusten luomiseen. Erityisosaamistani ovat ongelmanratkaisu, uusien teknologioiden tutkiminen ja merkityksellisiin projekteihin osallistuminen tehokkaan yhteistyön kautta.

Teknisten taitojeni lisäksi minulla on kokemusta työskentelystä monimuotoisissa, kansainvälisissä ympäristöissä. Tämä on kehittänyt viestintä- ja tiimityötaitojani, joita hyödynnän kaikissa projekteissani.

Olen intohimoinen jatkuvan oppimisen suhteen, olipa kyse tietokoneiden rakentamisesta komponenttien syvällisemmän ymmärtämisen vuoksi tai uusimpien teknologisten kehitysten seuraamisesta. Vapaa-ajallani nautin jalkapallosta, luonnossa liikkumisesta ja musiikista.

Tällä hetkellä etsin aktiivisesti harjoittelu- tai kokopäivätyömahdollisuuksia tekniseltä alalta, joissa voin hyödyntää taitojani ja kehittyä ammatillisesti.`,
  },
};

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutMe() {
  const { language } = useLanguage();

  const lang = language === "fi" ? "fi" : "en";

  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 shadow-xl px-8 py-10 sm:px-10 sm:py-12"
      >
        <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(circle_at_top,_rgba(59,130,246,0.08),transparent_55%),_radial-gradient(circle_at_bottom,_rgba(14,165,233,0.08),transparent_55%)]" />

        <div className="relative z-10 flex flex-col gap-10 md:grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] md:gap-12">
          {/* Left column: heading, intro, highlights */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {textContent.introTag[lang]}
            </div>

            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                {textContent.aboutMeHeading[lang]}
              </h2>
              <p className="mt-3 text-base text-slate-600 sm:text-lg">
                {textContent.introLine[lang]}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                {textContent.highlightTitle[lang]}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {textContent.highlights[lang].map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right column: detailed text split + key facts */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 text-sm leading-relaxed text-slate-700 sm:text-base"
          >
            {textContent.aboutMe[lang]
              .split("\n\n")
              .slice(0, 3)
              .map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={itemVariants}
                  className="text-slate-700"
                >
                  {paragraph}
                </motion.p>
              ))}

            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-slate-800">
                  {textContent.keyFactsTitle[lang]}
                </h3>
                <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-emerald-600">
                  {lang === "fi" ? "Pikakatsaus" : "Quick snapshot"}
                </span>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {textContent.keyFacts[lang].map((fact) => (
                  <li key={fact} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
