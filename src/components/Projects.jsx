import React, { useState } from 'react';
import { FaGithub, FaFilePdf, FaTimes } from 'react-icons/fa';
import { motion } from "framer-motion";
import FaceRecognitionImg from '../assets/images/Facerecog.png';
import FoodOrderImg from '../assets/images/Foodorder.png';
import FaceRecognitionPDF from '../assets/images/Face REcgintion system.pdf';
import FoodOrderPDF from '../assets/images/Foof Order Sysytem.pdf';

const Projects = () => {
  const [showImage, setShowImage] = useState(null);

  const projects = [
    {
      title: 'Face Recognition System for Attendance Management',
      description:
        'Face recognition-based system to mark attendance automatically. Built using OpenCV, Python techniques.',
      image: FaceRecognitionImg,
      github: 'https://github.com/Snehahm10/Face-Recognition-System-for-Attendance-Management',
      pdf: FaceRecognitionPDF,
      technologies: ['Python', 'OpenCV', 'Flask'],
    },
    {
      title: 'Food Order System',
      description:
        'An online platform to streamline food ordering and delivery. Built using PHP, HTML, CSS, and MySQL.',
      image: FoodOrderImg,
      github: 'https://github.com/Snehahm10/Food-Order-System',
      pdf: FoodOrderPDF,
      technologies: ['PHP', 'HTML', 'CSS', 'MySQL'],
    },
  ];

  return (
    <section
      id="projects"
      className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white scroll-mt-20"
    >
      {/* Main Heading */}
      <motion.h2
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span>
          Pro
          <span className="border-b-4 border-cyan-500 pb-1">jec</span>
          ts
        </span>
      </motion.h2>

      {/* Subheading */}
      <motion.div
        className="text-center mb-10 mt-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="text-cyan-500 text-lg font-medium">
          A collection of my recent technical projects and implementations.
        </p>
      </motion.div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover cursor-pointer rounded-t-lg"
              onClick={() => setShowImage(project.image)}
            />

            {/* Project Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-center mb-2">
                {project.title}
              </h3>
              <p className="text-justify text-gray-700 dark:text-gray-300 text-sm mb-2 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Buttons */}
              <div className="flex flex-wrap justify-center gap-2 mb-3">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Icons */}
              <div className="flex justify-center gap-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 dark:text-cyan-400 hover:text-black dark:hover:text-white text-xl"
                  title="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 dark:text-red-400 hover:text-black dark:hover:text-white text-xl"
                  title="View PDF"
                >
                  <FaFilePdf />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Image Modal */}
      {showImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative max-w-3xl w-full p-4">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setShowImage(null)}
            >
              <FaTimes />
            </button>
            <img
              src={showImage}
              alt="Project Preview"
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
