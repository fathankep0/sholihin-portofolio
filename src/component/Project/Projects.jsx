// Projects.jsx
import { useState, useEffect } from "react";
import {
  FaSun,
  FaMoon,
  FaDocker,
  FaAws,
  FaGithub,
  FaLinux,
} from "react-icons/fa";
import {
  SiTerraform,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";
import Image from "../../assets/CICD.png";
import monitoring from "../../assets/monitoring.webp";
import IAC  from "../../assets/iac.png";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    name: "CI/CD Automation",
    image:  Image,
    tools: ["GitHub", "Docker", "AWS"],
  },
  {
    name: "Infrastructure as Code",
    image:  IAC,
    tools: ["Terraform", "AWS", "Linux"],
  },
  {
    name: "Monitoring Stack",
    image: monitoring,
    tools: ["Prometheus", "Grafana", "Linux"],
  },
];

const toolIcons = {
  Docker: <FaDocker className="text-blue-400" />,
  AWS: <FaAws className="text-orange-400" />,
  GitHub: <FaGithub className="text-gray-500" />,
  Linux: <FaLinux className="text-yellow-500" />,
  Terraform: <SiTerraform className="text-purple-500" />,
  Prometheus: <SiPrometheus className="text-orange-500" />,
  Grafana: <SiGrafana className="text-yellow-400" />,
};

export default function Projects() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedTool, setSelectedTool] = useState("All");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const filteredProjects =
    selectedTool === "All"
      ? projects
      : projects.filter((p) => p.tools.includes(selectedTool));

  const allTools = ["All", ...new Set(projects.flatMap((p) => p.tools))];

  return (
    <div className="min-h-screen px-6 py-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-500">
      <button
        onClick={toggleDarkMode}
        title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800"
      >
        {darkMode ? (
          <FaSun className="text-yellow-400" />
        ) : (
          <FaMoon className="text-gray-700" />
        )}
      </button>

      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h1>

        {/* Tool Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {allTools.map((tool) => (
            <button
              key={tool}
              onClick={() => setSelectedTool(tool)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                selectedTool === tool
                  ? "bg-blue-500 text-white dark:bg-blue-600"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-white"
              }`}
            >
              {toolIcons[tool] || null} {tool}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="flex items-center gap-1 text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded"
                      >
                        {toolIcons[tool] || null}
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
