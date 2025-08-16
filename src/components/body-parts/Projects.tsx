import { ExternalLink, Users } from "lucide-react";

function Projects() {
  const projects = [
    {
      name: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment processing and inventory management",
      tech: ["React", "Node.js", "MongoDB", "Stripe API"],
      link: "https://github.com/username/project",
    },
    {
      name: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates and team features",
      tech: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      link: "https://github.com/username/project",
    },
  ];

  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <Users className="w-5 h-5 text-blue-600" />
        <h3 className="text-2xl font-bold text-gray-800">Featured Projects</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-3">
              <h4 className="text-lg font-semibold text-gray-800">
                {project.name}
              </h4>
              <ExternalLink className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-pointer" />
            </div>
            <p className="text-gray-600 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
