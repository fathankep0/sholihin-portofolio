import { useState, useEffect } from "react";
import { FaSun, FaMoon, FaHome, FaUser, FaBriefcase, FaProjectDiagram, FaEnvelope } from "react-icons/fa";


const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  const navLinks = [
    { name: "Home", icon: <FaHome />, href: "#home" },
    { name: "About", icon: <FaUser />, href: "#about" },
    { name: "Experience", icon: <FaBriefcase />, href: "#experience" },
    { name: "Projects", icon: <FaProjectDiagram />, href: "#projects" },
    { name: "Contact", icon: <FaEnvelope />, href: "#contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800 dark:text-white font-fira">SHOLIHIN</div>

        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="ml-4 text-xl text-gray-700 dark:text-gray-200 hover:text-yellow-400 dark:hover:text-yellow-300"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="text-xl text-gray-700 dark:text-gray-200"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-800 dark:text-white"
          >
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 py-2 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;