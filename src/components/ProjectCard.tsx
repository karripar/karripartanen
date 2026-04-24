import React from "react";
import Image from "next/image";
import { ArrowBigRightDashIcon, User, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export type ProjectProps = {
  title: {
    en: string;
    fi: string;
  };
  solo: boolean;
  description: {
    en: string;
    fi: string;
  };
  technologies: string[];
  url: string;
  imageUrl?: string;
};

const textContent = {
  solo: {
    en: "Solo",
    fi: "Yksilö",
  },
  team: {
    en: "Team",
    fi: "Ryhmä",
  },
  viewProject: {
    en: "View Project",
    fi: "Näytä projekti",
  },
};

interface ProjectCardProps {
  project: ProjectProps;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.2, ease: "easeOut" }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm"
    >
      {/* subtle overlay on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 bg-slate-900/5" />

      {project.imageUrl && (
        <div className="relative">
          <Image
            src={project.imageUrl}
            alt={project.title["en"]}
            className="h-48 w-full object-cover transition-transform duration-200 group-hover:scale-[1.02] sm:h-56 md:h-64"
            width={400}
            height={400}
          />
          {/* solo / team pill over image on larger screens */}
          <div className="absolute right-3 top-3 hidden items-center gap-1 rounded-full border border-slate-200 bg-white/95 px-2.5 py-1 text-xs text-slate-700 sm:flex">
            {project.solo ? (
              <User className="w-3.5 h-3.5" />
            ) : (
              <Users className="w-3.5 h-3.5" />
            )}
            <span className="font-medium">
              {project.solo
                ? textContent.solo[language]
                : textContent.team[language]}
            </span>
          </div>
        </div>
      )}

      <div className="flex flex-col flex-1 p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-lg sm:text-xl leading-snug">
            {project.title[language]}
          </h3>

          {/* solo / team for small screens */}
          <div className="flex items-center rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-700 sm:hidden">
            {project.solo ? (
              <User className="w-3.5 h-3.5 mr-1" />
            ) : (
              <Users className="w-3.5 h-3.5 mr-1" />
            )}
            <span>
              {project.solo
                ? textContent.solo[language]
                : textContent.team[language]}
            </span>
          </div>
        </div>

        <p className="mt-2 text-sm text-slate-600">
          {project.description[language]}
        </p>

        <div className="mt-4 sm:mt-5 flex-1 flex flex-col">
          {/* tech badges */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] text-slate-700 sm:text-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA aligned bottom */}
          <div className="mt-auto flex justify-between items-center gap-2">
            <span className="hidden text-[11px] text-slate-500 sm:inline">
              {language === "fi"
                ? "Avaa projekti uudessa välilehdessä"
                : "Opens project in a new tab"}
            </span>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-slate-900 px-3.5 py-1.5 text-xs font-medium text-white transition-colors duration-200 hover:bg-slate-800 sm:px-4 sm:py-1.5 sm:text-sm"
              aria-label={`View project: ${project.title[language]}`}
            >
              {textContent.viewProject[language]}
              <ArrowBigRightDashIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
