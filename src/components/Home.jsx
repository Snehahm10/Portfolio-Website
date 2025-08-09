import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
  FaDownload,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import profilePic from '../assets/images/profile.jpg.jpeg';
import resume from '../assets/images/MyResume10.pdf';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } }
};

function Home() {
  return (
    <motion.section
      id="home"
      className="min-h-screen pt-28 flex flex-col justify-center items-center text-center 
                 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 transition-colors duration-300"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Profile Image */}
      <motion.img
        src={profilePic}
        alt="Sneha HM"
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover shadow-md mb-8"
        variants={imageVariants}
      />

      {/* Heading */}
      <motion.h1
        className="text-4xl sm:text-5xl font-bold mb-4"
        variants={fadeUpVariants}
      >
        Hi, I'm <span className="text-cyan-600 dark:text-cyan-400">Sneha HM</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-xl sm:text-2xl mb-6 text-gray-700 dark:text-gray-300 max-w-2xl"
        variants={fadeUpVariants}
      >
        A passionate developer <br className="hidden sm:block" />
        crafting beautiful and impactful digital experiences.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 mb-8"
        variants={fadeUpVariants}
      >
        <a
          href="#contact"
          className="px-6 py-3 text-lg bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition-all"
        >
          Get in Touch
        </a>

        <a
          href={resume}
          download
          className="px-6 py-3 text-lg bg-gray-700 text-white rounded shadow 
                     hover:bg-gray-800 hover:text-cyan-300 
                     active:bg-cyan-600 active:text-white 
                     transition-all flex items-center gap-2"
        >
          <FaDownload />
          Download CV
        </a>
      </motion.div>

      {/* Icons */}
      <motion.div
        className="flex gap-6 text-3xl mb-10"
        variants={fadeUpVariants}
      >
        <a
          href="https://github.com/Snehahm10"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition-transform hover:text-cyan-600 dark:hover:text-cyan-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/sneha-hanjgimath-0188a0257/"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition-transform hover:text-cyan-600 dark:hover:text-cyan-400"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:snehahanjgimath@gmail.com"
          className="hover:scale-110 transition-transform hover:text-cyan-600 dark:hover:text-cyan-400"
        >
          <FaEnvelope />
        </a>
      </motion.div>

      {/* Arrow Down */}
      <motion.a
        href="#about"
        className="text-4xl animate-bounce text-cyan-600 dark:text-cyan-400"
        variants={fadeUpVariants}
      >
        <FaArrowDown />
      </motion.a>
    </motion.section>
  );
}

export default Home;
