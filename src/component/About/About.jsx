import { useState, useEffect } from "react";
import { FaServer, FaCloud, FaCodeBranch, FaTools, FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";
import profileImage from "../../assets/profile.jpg"; // Adjust the path as necessary

export default function About() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      setDarkMode(stored === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const icons = [
    { icon: <FaServer />, label: "Infrastructure" },
    { icon: <FaCloud />, label: "Cloud" },
    { icon: <FaCodeBranch />, label: "CI/CD" },
    { icon: <FaTools />, label: "Automation" },
  ];

  return (
    <div className="min-h-screen px-6 py-12 bg-white text-gray-800 dark:bg-gray-900 dark:text-white transition-colors duration-500">
      <div className="max-w-4xl mx-auto text-center">
        <button
          onClick={toggleDarkMode}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800"
          title="Toggle Dark Mode"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
        </button>

        <motion.div
          className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-10 flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-400 dark:border-blue-300 shadow-md object-cover"
          />
          <h2 className="text-3xl md:text-4xl font-bold font-fira">About Me</h2>
          <p className="text-md text-gray-700 dark:text-gray-300 max-w-xl font-roboto">
            Passionate about infrastructure automation, cloud deployment, and CI/CD. I love bridging the gap between development and operations.
          </p>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Tech Focus
        </motion.h1>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {icons.map(({ icon, label }, i) => (
            <motion.div
              key={label}
              className="flex flex-col items-center gap-2 p-4 rounded-xl shadow-md bg-gray-100 dark:bg-gray-800 hover:shadow-lg transition"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl text-blue-500 dark:text-blue-300">{icon}</div>
              <div className="font-medium text-sm sm:text-base text-center">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
