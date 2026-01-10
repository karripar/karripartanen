import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

const tech = [
  { name: "TypeScript", src: "/icons/TypeScript.svg" },
  { name: "JavaScript", src: "/icons/JavaScript.svg" },
  { name: "React", src: "/icons/React.svg" },
  { name: "Next.js", src: "/icons/Next.js.svg" },
  { name: "Node.js", src: "/icons/Node.js.svg" },
  { name: "Tailwind CSS", src: "/icons/TailwindCSS.svg" },
  { name: "Three.js", src: "/icons/Three.js.svg" },
  { name: "Git", src: "/icons/Git.svg" },
  { name: "Python", src: "/icons/Python.svg" },
  { name: "MongoDB", src: "/icons/MongoDB.svg" },
  { name: "MySQL", src: "/icons/MySQL.svg" },
  { name: "Docker", src: "/icons/Docker.svg" },
  { name: "Figma", src: "/icons/Figma.svg" },
  { name: "Linux", src: "/icons/Linux.svg" },
  { name: "Blender", src: "/icons/Blender.svg" },
  { name: "Azure", src: "/icons/Azure.svg" },
];

const translations = {
  en: {
    techStack: "Tech Stack",
    description: "Below you will not find all the technologies and tools I use, but these are the ones I work with the most.",
    },
    fi: {
    techStack: "Teknologiat",
    description: "Alta et löydä kaikkia käyttämiäni teknologioita ja työkaluja, mutta nämä ovat niitä, joiden kanssa työskentelen eniten.",
    },
};

export default function TechStack() {
    const { language } = useLanguage();
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold mb-8">
        {translations[language].techStack}
      </h2>
        <p className="text-gray-600 mb-12">
        {translations[language].description}
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center">
        {tech.map((t) => (
          <div
            key={t.name}
            className="flex items-center justify-center grayscale hover:grayscale-0 transition"
            title={t.name}
          >
            <Image
              src={t.src}
              alt={t.name}
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
