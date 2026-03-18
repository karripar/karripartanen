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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-white shadow-lg hover:shadow-xl border border-white/5 flex flex-col h-full"
    >
      {/* subtle overlay on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {project.imageUrl && (
        <div className="relative">
          <Image
            src={project.imageUrl}
            alt={project.title["en"]}
            className="h-48 sm:h-56 md:h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={400}
            height={400}
          />
          {/* solo / team pill over image on larger screens */}
          <div className="hidden sm:flex absolute top-3 right-3 items-center gap-1 rounded-full bg-black/70 px-2.5 py-1 text-xs text-gray-100 backdrop-blur-sm">
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
          <div className="flex sm:hidden items-center text-xs text-gray-200 bg-white/5 rounded-full px-2 py-1">
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

        <p className="mt-2 text-sm text-gray-200/90 ">
          {project.description[language]}
        </p>

        <div className="mt-4 sm:mt-5 flex-1 flex flex-col">
          {/* tech badges */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="bg-white/10 text-gray-100 text-[11px] sm:text-xs px-2.5 py-1 rounded-full border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA aligned bottom */}
          <div className="mt-auto flex justify-between items-center gap-2">
            <span className="hidden sm:inline text-[11px] text-gray-300/80">
              {language === "fi"
                ? "Avaa projekti uudessa välilehdessä"
                : "Opens project in a new tab"}
            </span>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-white text-slate-900 text-xs sm:text-sm font-medium px-3.5 sm:px-4 py-1.5 sm:py-1.5 transition-transform transition-colors duration-200 group-hover:bg-slate-100 hover:translate-y-0.5"
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
