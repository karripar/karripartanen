import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import ProjectCard, { ProjectProps } from "./ProjectCard";

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
  };

  return (
    <section className="py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-gray-800">
          {textContent.projects[language]}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
