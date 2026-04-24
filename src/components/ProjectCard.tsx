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
  readMore: {
    en: "Read more",
    fi: "Lue lisää",
  },
  showLess: {
    en: "Show less",
    fi: "Näytä vähemmän",
  },
};

interface ProjectCardProps {
  project: ProjectProps;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { language } = useLanguage();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.2, ease: "easeOut" }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm transition-shadow duration-200 hover:shadow-md"
    >
      {/* subtle overlay on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 bg-slate-900/5" />

      <div className="relative h-48 w-full overflow-hidden bg-slate-100 sm:h-56 md:h-64">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title["en"]}
            className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
            width={400}
            height={400}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm font-medium text-slate-500">
            {language === "fi" ? "Ei kuvaa" : "No preview image"}
          </div>
        )}

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

      <div className="flex flex-col flex-1 p-4 sm:p-5">
        <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
          {language === "fi" ? "Case" : "Case Study"}{" "}
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="flex items-start justify-between gap-3">
          <h3 className="min-h-[3.75rem] font-semibold leading-snug text-lg sm:min-h-[4.25rem] sm:text-xl">
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

        <p
          className={`mt-2 text-sm text-slate-600 ${
            expanded ? "" : "line-clamp-4"
          }`}
        >
          {project.description[language]}
        </p>

        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-2 w-fit text-xs font-medium text-slate-700 underline-offset-2 transition-colors duration-200 hover:text-slate-900 hover:underline"
        >
          {expanded
            ? textContent.showLess[language]
            : textContent.readMore[language]}
        </button>

        <div className="mt-4 flex-1 border-t border-slate-200 pt-4 sm:mt-5 sm:pt-5">
          {/* tech badges */}
          <div className="mb-4 flex h-14 flex-wrap content-start gap-1.5 overflow-hidden sm:h-16 sm:gap-2">
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
          <div className="mt-auto flex justify-between items-center gap-2 text-white">
            <span className="hidden text-[11px] text-slate-500 sm:inline">
              {language === "fi"
                ? "Avaa projektin uudessa välilehdessä"
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
