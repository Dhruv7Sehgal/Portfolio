// components/ProjectShowcase.js
"use client";

import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectShowcase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const projects = [
    {
      title: "Project One",
      description: "A cool project that does awesome things.",
      image: "/images/project1.jpg",
      github: "https://github.com/yourusername/project1",
      live: "https://project1.live",
    },
    {
      title: "Project Two",
      description: "Another amazing project that does even more cool stuff.",
      image: "/images/project2.jpg",
      github: "https://github.com/yourusername/project2",
      live: "https://project2.live",
    },
    // Add more projects here
  ];

  const openModal = (project: any) => {
    setCurrentProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
  };

  return (
    <div className="max-w-screen-lg mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-12 animate__animated animate__fadeIn">
        My Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:opacity-80"
            onClick={() => openModal(project)}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-bold">{project.title}</h3>
              <p className="text-white text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && currentProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate__animated animate__fadeIn animate__faster"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 sm:p-8 rounded-lg max-w-lg w-full relative transform transition-all duration-300 animate__animated animate__zoomIn animate__faster"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center animate__animated animate__fadeIn animate__delay-1s">
              {currentProject.title}
            </h2>
            <p className="text-lg sm:text-xl mb-6 text-gray-600 animate__animated animate__fadeIn animate__delay-1s">
              {currentProject.description}
            </p>
            <div className="flex justify-between animate__animated animate__fadeIn animate__delay-1s">
              <a
                href={currentProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 flex items-center gap-2 hover:underline"
              >
                <FaGithub />
                GitHub
              </a>
              <a
                href={currentProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 flex items-center gap-2 hover:underline"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
            </div>
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectShowcase;
