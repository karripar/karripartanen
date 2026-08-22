import React from "react";
import Image from "next/image";
import { ArrowBigRightDashIcon, User, Users, X } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export type ProjectProps = {
  title: string;
  solo: boolean;
  description: string;
  technologies: string[];
  url: string;
  imageUrl?: string;
  highlights?: string[];
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
  sourceUnavailable: {
    en: "Source code is private",
    fi: "Lähdekoodi on yksityinen",
  },
  workProject: {
    en: "Work project (private GitLab)",
    fi: "Työprojekti (yksityinen GitLab)",
  },
  keyPoints: {
    en: "Key points",
    fi: "Keskeiset kohdat",
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
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  React.useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    const onKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeydown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeydown);
    };
  }, [isModalOpen]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03, duration: 0.18, ease: "easeOut" }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 transition-shadow duration-150 hover:shadow-sm"
    >
      <div className="relative h-44 w-full overflow-hidden bg-slate-100 sm:h-52">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.015]"
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

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
          {language === "fi" ? "Projekti" : "Project"}{" "}
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold leading-snug text-lg sm:text-xl">
            {project.title}
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

        <p className="mt-2 line-clamp-3 text-sm text-slate-600">
          {project.description}
        </p>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="mt-3 inline-flex w-fit items-center rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800 transition-colors duration-150 hover:bg-slate-200"
        >
          {textContent.readMore[language]}
        </button>

        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">
              {textContent.keyPoints[language]}
            </p>
            <ul className="mt-1 space-y-1 text-xs text-slate-600">
              {project.highlights.slice(0, 2).map((highlight) => (
                <li key={highlight} className="line-clamp-1">
                  • {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-4 flex-1 border-t border-slate-200 pt-4">
          <div className="mb-4 flex min-h-10 flex-wrap content-start gap-1.5 overflow-hidden sm:gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] text-slate-700 sm:text-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center justify-between gap-2 text-white">
            <span className="hidden text-[11px] text-slate-500 sm:inline">
              {project.url
                ? language === "fi"
                  ? "Avaa projektin uudessa välilehdessä"
                  : "Opens project in a new tab"
                : textContent.workProject[language]}
            </span>

            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-slate-900 px-3.5 py-1.5 text-xs font-medium text-white transition-colors duration-200 hover:bg-slate-800 sm:px-4 sm:py-1.5 sm:text-sm"
                aria-label={`View project: ${project.title}`}
              >
                {textContent.viewProject[language]}
                <ArrowBigRightDashIcon className="w-4 h-4" />
              </a>
            ) : (
              <span className="inline-flex items-center rounded-full border border-slate-300 bg-slate-400 px-3.5 py-1.5 text-xs font-medium text-white sm:px-4 sm:py-1.5 sm:text-sm">
                {textContent.sourceUnavailable[language]}
              </span>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-900/55 p-4"
          onClick={() => setIsModalOpen(false)}
          role="presentation"
        >
          <div
            className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-5 shadow-xl sm:p-6"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <h4 className="text-lg font-semibold text-slate-900 sm:text-xl">
                {project.title}
              </h4>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded-full p-1.5 text-slate-500 transition-colors duration-150 hover:bg-slate-100 hover:text-slate-900"
                aria-label="Close details"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              {project.description}
            </p>

            {project.highlights && project.highlights.length > 0 && (
              <div className="mt-4 border-t border-slate-200 pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">
                  {textContent.keyPoints[language]}
                </p>
                <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>• {highlight}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
