import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import ProjectCard, { ProjectProps } from "./ProjectCard";

type ProjectsProps = {
  projects: ProjectProps[];
};

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const { language } = useLanguage();

  const textContent = {
    label: { en: "02 / Selected projects", fi: "02 / Valitut projektit" },
    title: {
      en: "Work that solves real problems.",
      fi: "Työtä, joka ratkaisee oikeita ongelmia.",
    },
  };

  return (
    <section className="projects section-pad" id="projects">
      <div className="section-heading">
        <div>
          <div className="section-label">{textContent.label[language]}</div>
          <h2>{textContent.title[language]}</h2>
        </div>
      </div>

      {/* 
        Replaced the 2/3 column grid with a vertical flex column. 
        This allows the horizontal ProjectCard layout to span the full container width.
      */}
      <div className="mt-12 flex flex-col gap-16 md:gap-24">
        {projects.map((project, index) => (
          <ProjectCard
            key={`${project.title}-${index}`}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;