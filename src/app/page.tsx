"use client";

import { useMemo, useState } from "react";
import { Mail, Check, Copy } from "lucide-react";
import Projects from "@/components/Projects";
import rawProjects from "../../data/projects.json";
import TechStack from "@/components/TechStack";
import Navigation from "@/components/Navigation";
import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import { ProjectProps } from "@/components/ProjectCard";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const email = "karri.t.partanen@gmail.com";

type MultiLangText = {
  en?: string;
  fi?: string;
};

type MultiLangList = {
  en?: string[];
  fi?: string[];
};

type RawProject = {
  title: string | MultiLangText;
  solo: boolean;
  description?: string | MultiLangText;
  technologies?: string[];
  url?: string;
  imageUrl?: string;
  highlights?: string[] | MultiLangList;
  features?: string[] | MultiLangList;
};

const getLocalizedText = (
  value: string | MultiLangText | undefined,
  language: "en" | "fi",
): string => {
  if (!value) {
    return "";
  }

  if (typeof value === "string") {
    return value;
  }

  if (language === "fi") {
    return value.fi ?? value.en ?? "";
  }

  return value.en ?? value.fi ?? "";
};

const getLocalizedList = (
  value: string[] | MultiLangList | undefined,
  language: "en" | "fi",
): string[] => {
  if (!value) {
    return [];
  }

  if (Array.isArray(value)) {
    return value;
  }

  if (language === "fi") {
    return value.fi ?? value.en ?? [];
  }

  return value.en ?? value.fi ?? [];
};

export default function Home() {
  const { language } = useLanguage();
  const [emailCopied, setEmailCopied] = useState(false);

  const normalizedProjects: ProjectProps[] = useMemo(
    () =>
      (rawProjects as RawProject[]).map((project) => ({
        title: getLocalizedText(project.title, language),
        solo: project.solo,
        description: getLocalizedText(project.description, language),
        technologies: project.technologies ?? [],
        url: project.url ?? "",
        imageUrl: project.imageUrl,
        highlights: getLocalizedList(
          project.highlights ?? project.features,
          language,
        ),
      })),
    [language],
  );

  const textContent = {
    contactMe: { en: "Let\'s work together", fi: "Tehdään yhteistyötä" },
    contactText: {
      en: "Open to internship and full-time roles after Fall. Best reach: email.",
      fi: "Avoin harjoittelu- ja kokopäivärooleille syksyn jälkeen. Nopein yhteydenottotapa: sähköposti.",
    },
    emailButton: { en: "Send email", fi: "Lähetä sähköposti" },
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);

      setTimeout(() => {
        setEmailCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
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
        <Projects projects={normalizedProjects} />
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

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-900 bg-slate-900 px-6 py-3 font-medium !text-white transition-colors duration-200 hover:bg-slate-800"
            >
              <Mail size={18} />
              {textContent.emailButton[language]}
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-100"
            >
              {emailCopied ? <Check size={18} /> : <Copy size={18} />}
              {emailCopied
                ? language === "fi"
                  ? "Kopioitu!"
                  : "Copied!"
                : language === "fi"
                  ? "Kopioi sähköposti"
                  : "Copy email"}
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
