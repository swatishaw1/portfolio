import { useState } from "react";
import { projects } from "../../constants";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="py-[6vw] px-[8vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-[4vw]">
        <h2 className="text-[clamp(2rem,3vw,3rem)] font-bold text-white">
          PROJECTS
        </h2>

        <div className="w-[clamp(5rem,8vw,8rem)] h-[clamp(0.2rem,0.25vw,0.3rem)] bg-purple-500 mx-auto mt-[1vw]"></div>

        <p className="text-gray-400 mt-[1vw] text-[clamp(0.9rem,1.2vw,1.25rem)] font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-3 gap-[2vw]">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-[1vw] shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-[0.4vw] transition-transform duration-300"
          >
            <div className="p-[1vw]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[clamp(10rem,12vw,15rem)] object-cover rounded-[0.7vw]"
              />
            </div>

            <div className="p-[1.5vw]">
              <h3 className="text-[clamp(1.1rem,1.7vw,1.7rem)] font-bold text-white mb-[0.5vw]">
                {project.title}
              </h3>

              <p className="text-gray-500 mb-[1vw] pt-[0.8vw] text-[clamp(0.75rem,1vw,1rem)] line-clamp-3">
                {project.description}
              </p>

              <div className="mb-[0.8vw]">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-[clamp(0.6rem,0.75vw,0.8rem)] font-semibold text-purple-500 rounded-full px-[0.5vw] py-[0.25vw] mr-[0.4vw] mb-[0.4vw]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-[1vw]">
          <div className="bg-gray-900 rounded-[0.8vw] shadow-2xl w-[clamp(20rem,75vw,60rem)] max-h-[90vh] overflow-y-auto relative">
            <div className="flex justify-end p-[1vw]">
              <button
                onClick={handleCloseModal}
                className="text-white text-[clamp(1.8rem,2.5vw,3rem)] font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-900 px-[1vw]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-[75%] max-h-[40vh] object-contain rounded-[0.8vw] shadow-2xl"
                />
              </div>

              <div className="p-[clamp(1rem,2vw,2rem)]">
                <h3 className="text-[clamp(1.3rem,2.2vw,2.2rem)] font-bold text-white mb-[1vw]">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-400 mb-[1.5vw] text-[clamp(0.8rem,1vw,1rem)]">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-[0.5vw] mb-[1.5vw]">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-[clamp(0.6rem,0.75vw,0.8rem)] font-semibold text-purple-500 rounded-full px-[0.5vw] py-[0.25vw]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-[1vw]">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 px-[1vw] py-[0.5vw] rounded-[0.7vw] text-[clamp(0.75rem,1.1vw,1.2rem)] font-semibold text-center"
                  >
                    View Code
                  </a>

                  <a
                    href={selectedProject.webapp || "#"}
                    target={
                      selectedProject.webapp ? "_blank" : undefined
                    }
                    rel={
                      selectedProject.webapp
                        ? "noopener noreferrer"
                        : undefined
                    }
                    onClick={(e) => {
                      if (!selectedProject.webapp) e.preventDefault();
                    }}
                    className={`w-1/2 px-[1vw] py-[0.5vw] rounded-[0.7vw] text-[clamp(0.75rem,1.1vw,1.2rem)] font-semibold text-center ${
                      selectedProject.webapp
                        ? "bg-purple-600 hover:bg-purple-800 text-white cursor-pointer"
                        : "bg-gray-800 text-gray-600 border border-gray-700 cursor-not-allowed"
                    }`}
                  >
                    {!selectedProject.webapp
                      ? "Not Live Yet"
                      : selectedProject.webapp.includes(
                          "drive.google.com"
                        )
                      ? "View Live Demo Video"
                      : "View Live"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
