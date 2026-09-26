import React, { useState } from "react";
import { ArrowUpRight, Lock, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

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
  viewLive: {
    en: "View project",
    fi: "Avaa projekti",
  },
  details: {
    en: "Key contributions",
    fi: "Vastuualueet",
  },
  sourceUnavailable: {
    en: "Closed source",
    fi: "Suljettu lähdekoodi",
  },
};

interface ProjectCardProps {
  project: ProjectProps;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { language } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const hasHighlights = project.highlights && project.highlights.length > 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.25, ease: "easeOut" }}
      className="project"
    >
      {/* 1. Restored your original wrapper class: project-copy */}
      <div className="project-copy">
        <div className="project-meta">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <p>{project.solo ? "Solo Project" : "Team Project"}</p>
        </div>

        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <ul className="tech-list" aria-label="Technologies">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        {/* 2. Inline expansion instead of an intrusive modal */}
        <AnimatePresence>
          {isExpanded && hasHighlights && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <ul className="mt-4 space-y-2 border-l-2 border-[var(--line)] pl-4 text-sm text-[var(--muted)]">
                {project.highlights!.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 3. Restored your original links container */}
        <div className="project-links">
          {project.url ? (
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {textContent.viewLive[language]}
              <ArrowUpRight size={18} />
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-sm text-[var(--muted)]">
              <Lock size={14} />
              {textContent.sourceUnavailable[language]}
            </span>
          )}

          {hasHighlights && (
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1.5 transition-colors hover:text-[var(--text)]"
            >
              {textContent.details[language]}
              <motion.span animate={{ rotate: isExpanded ? 180 : 0 }}>
                <ChevronDown size={16} />
              </motion.span>
            </button>
          )}
        </div>
      </div>

      {/* 4. Simple, clean image wrapper instead of the fake browser block */}
      {project.imageUrl && (
        <div className="project-visual aspect-[4/3] w-full overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--surface-raised)]">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={400}
            height={300}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      )}
    </motion.article>
  );
};

export default ProjectCard;