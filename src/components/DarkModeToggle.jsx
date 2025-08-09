// components/DarkModeToggle.js
import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white dark:bg-gray-800 text-yellow-500 dark:text-white shadow-md transition duration-300 hover:scale-110"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
    </button>
  );
};

export default DarkModeToggle;


