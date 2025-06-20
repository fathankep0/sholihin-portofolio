import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaSun, FaMoon } from "react-icons/fa";

export default function Footer() {
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

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-500 px-6 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold font-roboto">&copy; {new Date().getFullYear()} DevOps Portfolio</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-fira">Built with ❤️ using React, Tailwind, and DevOps Tools</p>
        </div>

        <div className="flex gap-4 text-2xl">
          <a href="https://github.com/fathankep0" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="hover:text-blue-500 transition" />
          </a>
          <a href="https://www.linkedin.com/in/sholihin-sholihin-97b222214/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="hover:text-blue-700 transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="hover:text-sky-400 transition" />
          </a>
          <button onClick={toggleDarkMode} aria-label="Toggle Theme">
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
          </button>
        </div>
      </div>
    </footer>
  );
}
