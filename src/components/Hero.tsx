"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

import { useLanguage } from "@/contexts/LanguageContext";

const textContent = {
  roleLine: {
    en: "Web Developer | ICT Engineer | JavaScript Enthusiast",
    fi: "Web-kehittäjä | ICT-insinööri | JavaScript-intoilija",
  },
  scrollDown: { en: "More about me", fi: "Lisää minusta" },
};

export default function Hero() {
  const { language } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="relative z-10 w-full max-w-2xl rounded-3xl border border-slate-200 bg-white/92 p-10 text-center shadow-sm"
      >
        <div className="mx-auto h-32 w-32 overflow-hidden rounded-full border border-slate-200 shadow-sm">
          <Image
            src="/img/karri.jpg"
            alt="Profile"
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight">
          Karri Partanen
        </h1>

        <p className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-slate-600 sm:text-base">
          {textContent.roleLine[language]}
        </p>

        <div className="mt-6 flex justify-center space-x-6 text-2xl text-slate-700">
          <a
            href="https://github.com/karripar"
            target="_blank"
            className="transition-colors duration-200 hover:text-slate-900"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/karri-partanen-39768b165/"
            target="_blank"
            className="text-sky-700 transition-colors duration-200 hover:text-sky-800"
          >
            <FaLinkedin />
          </a>
        </div>

        <a
          href="#about"
          className="mt-8 inline-flex items-center gap-2 text-sm text-slate-500 transition-colors duration-200 hover:text-slate-800"
        >
          {textContent.scrollDown[language]}

          <ArrowDown size={16} />
        </a>
      </motion.div>
    </section>
  );
}
