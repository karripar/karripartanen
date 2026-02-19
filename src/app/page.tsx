"use client";

import Image from "next/image";
import { Mail, ArrowDown } from "lucide-react";
import Projects from "@/components/Projects";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import projects from "../../data/projects.json";
import TechStack from "@/components/TechStack";
import Navigation from "@/components/Navigation";

import { useLanguage } from "@/contexts/LanguageContext";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Home() {
  const { language } = useLanguage();

  const textContent = {
    webDeveloper: { en: "Web Developer", fi: "Web-kehittäjä" },
    ictEngineer: { en: "ICT Engineer", fi: "ICT-insinööri" },
    javascriptEnthusiast: {
      en: "JavaScript Enthusiast",
      fi: "JavaScript-intoilija",
    },
    aboutMeHeading: { en: "About Me", fi: "Tietoa minusta" },
    aboutMe: {
      en: `I am a dedicated web developer with a strong focus on creating responsive and user-centric web applications. My expertise lies in problem-solving, exploring emerging technologies, and contributing to impactful projects through effective collaboration.

In addition to my technical skills, I have a solid background in customer service and experience working in diverse, international environments. This has improved my communication and teamwork abilities, which I bring to every project.

I am passionate about continuous learning, whether it's building computers to deepen my understanding of hardware or staying updated with the latest advancements in technology. Outside of work, I enjoy football, exploring nature, and engaging in creative pursuits like music.

Currently, I am actively seeking internship or full-time opportunities in the tech industry where I can contribute my skills and grow professionally.`,
      fi: `Olen omistautunut web-kehittäjä, joka keskittyy responsiivisten ja käyttäjäystävällisten verkkosovellusten luomiseen. Erityisosaamistani ovat ongelmanratkaisu, uusien teknologioiden tutkiminen ja merkityksellisiin projekteihin osallistuminen tehokkaan yhteistyön kautta.

Teknisten taitojeni lisäksi minulla on vahva tausta asiakaspalvelussa ja kokemusta työskentelystä monimuotoisissa, kansainvälisissä ympäristöissä. Tämä on kehittänyt viestintä- ja tiimityötaitojani, joita hyödynnän kaikissa projekteissani.

Olen intohimoinen jatkuvan oppimisen suhteen, olipa kyse tietokoneiden rakentamisesta komponenttien syvällisemmän ymmärtämisen vuoksi tai uusimpien teknologisten kehitysten seuraamisesta. Vapaa-ajallani nautin jalkapallosta, luonnossa liikkumisesta ja luovista harrastuksista, kuten musiikista.

Tällä hetkellä etsin aktiivisesti harjoittelu- tai kokopäivätyömahdollisuuksia tekniseltä alalta, joissa voin hyödyntää taitojani ja kehittyä ammatillisesti.`,
    },
    contactMe: { en: "Get in Touch", fi: "Ota yhteyttä" },
    contactText: {
      en: "Want to work together or just say hi? Feel free to reach out!",
      fi: "Haluatko työskennellä yhdessä tai vain sanoa hei? Ota rohkeasti yhteyttä!",
    },
    emailButton: { en: "Email Me", fi: "Lähetä sähköpostia" },
    scrollDown: { en: "More about me", fi: "Lisää minusta" },
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 text-gray-900">
      <Navigation />

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl" />

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

      {/* ================= ABOUT ================= */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-lg p-10"
        >
          <h2 className="text-3xl font-semibold mb-6">
            {textContent.aboutMeHeading[language]}
          </h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
            {textContent.aboutMe[language]}
          </p>
        </motion.div>
      </section>

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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-10 text-center text-white shadow-xl"
        >
          <h2 className="text-3xl font-semibold mb-4">
            {textContent.contactMe[language]}
          </h2>
          <p className="mb-6 text-white/90">
            {textContent.contactText[language]}
          </p>

          <a
            href="mailto:karri.t.partanen@gmail.com"
            className="inline-flex items-center gap-2 bg-white text-indigo-700 px-6 py-3 rounded-full font-medium hover:scale-105 transition"
          >
            <Mail size={18} />
            {textContent.emailButton[language]}
          </a>
        </motion.div>
      </section>
    </main>
  );
}
