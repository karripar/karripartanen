import React from "react";
import Image from "next/image";
import { ArrowBigRightDashIcon, User, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

type ProjectProps = {
  // Define the structure of each project
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

type ProjectsProps = {
  projects: ProjectProps[];
};

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const { language } = useLanguage();

  const textContent = {
    projects: {
      en: "Projects",
      fi: "Projektit",
    },
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

  return (
    <section className="py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-gray-800">
          {textContent.projects[language]}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map(
            (
              project,
              index // Map through the projects array and render each project
            ) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-300 via-indigo-400 to-purple-300 p-4 rounded-xl shadow hover:shadow-md transition flex flex-col h-full"
              >
                {project.imageUrl && (
                  <Image
                    src={project.imageUrl}
                    alt={project.title["en"]}
                    className="rounded-md mb-3 object-cover w-full h-48 sm:h-56 md:h-64"
                    width={400}
                    height={400}
                  />
                )}

                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg text-white">
                    {project.title[language]}
                  </h3>
                  <div className="flex items-center text-gray-100 text-md">
                    {project.solo ? (
                      <User className="w-4 h-4 mr-1" />
                    ) : (
                      <Users className="w-4 h-4 mr-1" />
                    )}
                    <span>
                      {project.solo
                        ? textContent.solo[language]
                        : textContent.team[language]}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-200 mt-2">
                  {project.description[language]}
                </p>

                {/* This wrapper ensures the tech stack + link always align to the bottom */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 my-4">
                    {project.technologies.map((tech, i) => {
                      return (
                        <span
                          key={i}
                          className={`bg-gray-200 text-gray-800 text-xs px-2.5 py-1 rounded-full`}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-gray-800 hover:bg-gray-400 text-gray-200 text-sm px-4 py-1.5 rounded-full transition-colors justify-center"
                    aria-label={`View project: ${project.title[language]}`}
                  >
                    {textContent.viewProject[language]}
                    <ArrowBigRightDashIcon className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
