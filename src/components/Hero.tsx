"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

import { useLanguage } from "@/contexts/LanguageContext";

const textContent = {
  webDeveloper: { en: "Web Developer", fi: "Web-kehittäjä" },
  ictEngineer: { en: "ICT Engineer", fi: "ICT-insinööri" },
  javascriptEnthusiast: {
    en: "JavaScript Enthusiast",
    fi: "JavaScript-intoilija",
  },
  scrollDown: { en: "More about me", fi: "Lisää minusta" },
};

export default function Hero() {
  const { language } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl p-10 max-w-2xl w-full text-center"
      >
        <div className="mx-auto w-32 h-32 rounded-full overflow-hidden shadow-lg">
          <Image
            src="/img/karri.jpg"
            alt="Profile"
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>

        <h1 className="mt-6 text-4xl font-bold">Karri Partanen</h1>

        <p className="mt-3 text-lg text-gray-600 h-6">
          <Typewriter
            words={[
              textContent.webDeveloper[language],
              textContent.ictEngineer[language],
              textContent.javascriptEnthusiast[language],
            ]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        <div className="flex justify-center space-x-6 mt-6 text-2xl">
          <a
            href="https://github.com/karripar"
            target="_blank"
            className="hover:scale-110 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/karri-partanen-39768b165/"
            target="_blank"
            className="text-blue-600 hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>
        </div>

        <a
          href="#about"
          className="inline-flex items-center gap-2 mt-8 text-sm text-gray-500 hover:text-gray-800 transition"
        >
          {textContent.scrollDown[language]}

          <ArrowDown size={16} />
        </a>
      </motion.div>
    </section>
  );
}
