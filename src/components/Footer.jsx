import React from 'react';
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function Footer() {
  return (
    <motion.footer
      className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white text-sm py-6 border-t border-gray-200 dark:border-gray-700"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="text-center">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-cyan-600 dark:text-cyan-400">Sneha HM</span>. All rights reserved.
        </p>
        <p className="text-xs text-cyan-700 dark:text-cyan-300 mt-1">
          Built with <span className="text-red-500 dark:text-red-400">❤️</span> using React & Tailwind CSS
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
