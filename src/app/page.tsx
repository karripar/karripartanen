"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import Projects from "@/components/Projects";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import projects from "../../data/projects.json";
import Navigation from "@/components/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Typewriter } from "react-simple-typewriter";

//bg-gradient-to-br from-gray-300 via-indigo-900 to-purple-500
export default function Home() {
  const { language } = useLanguage();

  const textContent = {
    webDeveloper: {
      en: "Web Developer",
      fi: "Web-kehittäjä",
    },
    ictEngineer: {
      en: "ICT Engineer",
      fi: "ICT-insinööri",
    },
    javascriptEnthusiast: {
      en: "JavaScript Enthusiast",
      fi: "JavaScript-intoilija",
    },
    aboutMeHeading: {
      en: "About Me",
      fi: "Tietoa minusta",
    },
    aboutMe: {
      en: `I'm a passionate developer focused on building responsive, user-friendly web applications. I enjoy solving problems, exploring new technologies, and collaborating on meaningful projects.
      In my spare time, I particularly enjoy building computers and learning how everything works under the hood.

      Outside technical skills, I have extensive experience in customer service and working in international environments. I am passionate about football, nature, music and gaming. I believe that a well-rounded life leads to better creativity and problem-solving skills.
      Feel free to check out some of my latest projects below or connect with me on LinkedIn!
      
      Right now, I am actively looking for an intership or a job opportunity in various technical fields. My exchange period in New Zealand coming up in February 2026 is something I am excitedly looking forward to!`,
      fi: `Olen intohimoinen kehittäjä, joka keskittyy responsiivisten ja käyttäjäystävällisten verkkosovellusten rakentamiseen. Nautin ongelmien ratkaisemisesta, uusien teknologioiden tutkimisesta ja merkityksellisten projektien parissa tapahtuvasta yhteistyöstä.
      Vapaa-ajallani nautin erityisesti tietokoneiden kokoamisesta ja jatkuvasta selvittämisestä siitä, miten kaikki toimii käytännössä.

      Teknisten taitojen lisäksi minulla on laajaa kokemusta asiakaspalvelusta ja työskentelystä kansainvälisissä ympäristöissä. Olen intohimoinen jalkapallon, luonnon, musiikin ja pelaamisen suhteen. Uskon, että monipuolinen elämä johtaa kehittyneempään luovuuteen ja ongelmanratkaisukykyyn.
      Voit tutustua viimeisimpiin projekteihini alla olevista esittelykorteista tai ottaa yhteyttä LinkedInissä!
      
      Tällä hetkellä etsin aktiivisesti harjoittelupaikkaa tai työmahdollisuutta erilaisilla teknisillä aloilla. Vaihto-opiskelujaksoni Uudessa-Seelannissa helmikuussa 2026 on tapahtuma, jota odotan innolla!`,
    },
    contactMe: {
      en: "Get in Touch",
      fi: "Ota yhteyttä",
    },
    contactText: {
      en: "Want to work together or just say hi? Feel free to reach out! For privacy reasons, I can provide my phone number or resume upon request.",
      fi: "Haluatko työskennellä yhdessä tai vain sanoa hei? Ota rohkeasti yhteyttä! Yksityisyyden suojaamiseksi voin antaa puhelinnumeroni tai ansioluetteloni pyynnöstä.",
    },
    emailButton: {
      en: "Email Me",
      fi: "Lähetä sähköpostia",
    },
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <Navigation />

      {/* Background Image */}
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-4 mt-5 bg-gradient-to-br  from-gray-400 via-indigo-500 to-purple-400 transition-colors duration-500">

        <div className="w-[150px] h-[150px] rounded-full overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
          <Image
            src="img/karri.jpg"
            alt="Your profile photo"
            width={150}
            height={150}
            priority
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <h1 className="text-4xl text-gray-100 font-bold mt-4">
          Karri Partanen
        </h1>
        <p className="text-lg text-gray-300 mt-2">
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
        {/* Social Links */}
        <div className="flex space-x-4 mt-4">
          <a
            href="https://github.com/karripar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-gray-400 transition text-3xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/karri-partanen-39768b165/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-blue-400 transition text-3xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-3xl mx-auto px-4 py-16 mb-10 sm:py-12 sm:mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          {textContent.aboutMeHeading[language]}
        </h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg py-4">
          {textContent.aboutMe[language]}
        </p>
      </section>

      {/* Projects Section */}
      <Projects projects={projects} />

      {/* Contact Section */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl text-gray-800 font-semibold mb-4">
            {textContent.contactMe[language]}
          </h2>
          <p className="text-gray-700 mb-4">
            {textContent.contactText[language]}
          </p>
          <a
            href="mailto:karripartanen25@gmail.com"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition transform duration-300"
          >
            <Mail className="inline mr-2" />
            {textContent.emailButton[language]}
          </a>
        </div>
      </section>
    </main>
  );
}
