import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

const tech = [
  { name: "TypeScript", src: "/icons/TypeScript.svg" },
  { name: "JavaScript", src: "/icons/JavaScript.svg" },
  { name: "Python", src: "/icons/Python.svg" },
  { name: "React", src: "/icons/React.svg" },
  { name: "Node.js", src: "/icons/Node.js.svg" },
  { name: "Next.js", src: "/icons/Next.js.svg" },
  { name: "PostgreSQL", src: "/icons/PostgresSQL.svg" },
  { name: "MongoDB", src: "/icons/MongoDB.svg" },
  { name: "Tailwind CSS", src: "/icons/TailwindCSS.svg" },
  { name: "Git", src: "/icons/Git.svg" },
  { name: "MySQL", src: "/icons/MySQL.svg" },
  { name: "Docker", src: "/icons/Docker.svg" },
  { name: "Linux", src: "/icons/Linux.svg" },
  { name: "Blender", src: "/icons/Blender.svg" },
];

const translations = {
  en: {
    techStack: "Tech Stack",
    description:
      "Core tools I use regularly in production and personal projects.",
  },
  fi: {
    techStack: "Teknologiat",
    description:
      "Päätyökalut, joita käytän säännöllisesti tuotanto- ja omissa projekteissa.",
  },
};

export default function TechStack() {
  const { language } = useLanguage();
  return (
    <section className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white px-6 py-10 shadow-sm sm:py-11">
      <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900">
        {translations[language].techStack}
      </h2>
      <p className="mb-8 max-w-3xl text-slate-600">
        {translations[language].description}
      </p>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6">
        {tech.map((t) => (
          <div
            key={t.name}
            className="group flex min-h-[7.75rem] flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-sm"
            title={t.name}
          >
            <Image
              src={t.src}
              alt={t.name}
              width={46}
              height={46}
              className="object-contain transition-transform duration-200 group-hover:scale-105"
            />

            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-[11px] font-medium tracking-[0.02em] text-slate-700">
              {t.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
