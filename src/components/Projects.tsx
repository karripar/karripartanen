import React from 'react'
import Image from 'next/image'

type ProjectProps = {
  title: string;
  description: string;
  technologies: string[];
  url: string;
  imageUrl?: string;
};

type ProjectsProps = {
  projects: ProjectProps[];
};


const Projects: React.FC<ProjectsProps> = ({projects}) => {
    return (
        <section className="py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-600 p-4 rounded-xl shadow hover:shadow-md transition"
                >
                  {project.imageUrl && (
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      className="rounded-md mb-3 object-cover h-40 w-full"
                    />
                  )}
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  <p className="text-sm text-gray-300 mt-2">{project.description}</p>
                  <p className="text-xs mt-2 text-gray-400">
                    Tech: {project.technologies.join(', ')}
                  </p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline text-sm mt-3 inline-block"
                  >
                    View Project →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}

export default Projects