import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Check system preference or saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 transition duration-300">
      <nav className="container mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">Sneha HM</h1>
        <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-200 font-medium">
          {["home", "about", "skills", "projects", "education","certifications", "contact",].map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer hover:text-cyan-500 dark:hover:text-cyan-400 capitalize"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        {/* Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="ml-4 bg-cyan-500 text-white px-3 py-1 rounded-md hover:bg-cyan-600 transition duration-300"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
