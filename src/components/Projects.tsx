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
    intro: {
      en: "Selected work focused on usability, performance, and scalable implementation.",
      fi: "Valittuja töitä, joissa korostuvat käytettävyys, suorituskyky ja skaalautuva toteutus.",
    },
  };

  return (
    <section className="rounded-3xl border border-slate-200 bg-white px-5 py-10 shadow-sm sm:px-8 sm:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col gap-3 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            {textContent.projects[language]}
          </h2>
          <p className="max-w-xl text-sm text-slate-600 sm:text-base">
            {textContent.intro[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="h-full">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
