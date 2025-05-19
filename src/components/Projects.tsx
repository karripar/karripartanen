import React from "react";
import Image from "next/image";
import { ArrowBigRightDashIcon, User, Users } from "lucide-react";

type ProjectProps = {
  // Define the structure of each project
  title: string;
  solo: boolean;
  description: string;
  technologies: string[];
  url: string;
  imageUrl?: string;
};

type ProjectsProps = {
  projects: ProjectProps[];
};


const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map(
            (
              project,
              index // Map through the projects array and render each project
            ) => (
              <div
                key={index}
                className="bg-blue-700 p-4 rounded-xl shadow hover:shadow-md transition flex flex-col h-full"
              >
                {project.imageUrl && (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    className="rounded-md mb-3 object-cover h-100 w-full"
                    width={400}
                    height={400}
                  />
                )}

                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg text-white">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-100 text-md">
                    {project.solo ? (
                      <User className="w-4 h-4 mr-1" />
                    ) : (
                      <Users className="w-4 h-4 mr-1" />
                    )}
                    <span>{project.solo ? "Solo" : "Team"}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-300 mt-2">
                  {project.description}
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
                  >
                    View Project
                    <ArrowBigRightDashIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
