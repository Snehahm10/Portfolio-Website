
// ScrollToTopButton.js
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return visible ? (
    <a
      href="#home"
      title="Back to Top"
      className="fixed bottom-6 right-6 z-50 text-cyan-400 hover:text-white transition-transform hover:scale-110"
    >
      <FaArrowUp className="text-2xl" />
    </a>
  ) : null;
};

export default ScrollToTopButton;
