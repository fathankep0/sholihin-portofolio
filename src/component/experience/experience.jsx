import { useState, useEffect } from "react";
import {
  FaServer,
  FaCloud,
  FaCodeBranch,
  FaSun,
  FaMoon,
  FaDocker,
  FaLinux,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Experience() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const experiences = [
    {
      role: "DevOps Engineer",
      company: "PT. TIlaka Nusa Technology",
      duration: "Agustus 2023 - Februari 2024",
      description:
        "Managed CI/CD pipelines and cloud infrastructure using Proxmox and Gitlab Actions.",
    },
    {
      role: "Devops Engineer",
      company: "PT. Prosepro Solution",
      duration: "Februari 2023 - Oktober 2023",
      description:
        "Deployed scalable applications on GCP and automated infrastructure using Terraform.",
    },
    {
      role: "DevOps Engineer",
      company: "PT. TRix Technology",
      duration: "Februari 2022 - December 2022",
      description:
        "Supported internal tools and helped in server maintenance and scripting tasks.Implemented CI/CD pipelines and managed cloud resources on AWS, enhancing deployment efficiency",
    },
  ];

  const tools = [
    { icon: <FaDocker />, name: "Docker", category: "DevOps" },
    { icon: <FaAws />, name: "AWS", category: "Cloud" },
    { icon: <FaGitAlt />, name: "Git", category: "Scripting" },
    { icon: <FaLinux />, name: "Linux", category: "Scripting" },
    { icon: <FaCodeBranch />, name: "CI/CD", category: "DevOps" },
    { icon: <FaCloud />, name: "Terraform", category: "Cloud" },
  ];

  return (
    <div className="min-h-screen px-6 py-12 bg-white text-gray-800 dark:bg-gray-900 dark:text-white transition-colors duration-500">
      <div className="max-w-5xl mx-auto text-center">
        <button
          onClick={toggleDarkMode}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800"
        >
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
        </button>

        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-12 font-fira"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h1>

        <div className="relative border-l-4 border-blue-500 pl-6 space-y-12 mb-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="relative bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              <div className="absolute -left-[30px] top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900"></div>
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{exp.company} ・ {exp.duration}</p>
              <p className="mt-2 text-base">{exp.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-6 font-fira"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Tools I Use
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-center">
          {tools.map(({ icon, name, category }, index) => (
            <motion.div
              key={name}
              className="flex flex-col items-center gap-2 p-4 rounded-xl shadow bg-gray-100 dark:bg-gray-800 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-3xl text-blue-500 dark:text-blue-300">{icon}</div>
              <div className="text-sm font-medium">{name}</div>
              <span className="text-xs mt-1 px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                {category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
