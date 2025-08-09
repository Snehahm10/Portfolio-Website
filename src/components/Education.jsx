import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: "Bachelors of Engineering in Computer Science",
    college: 'University BDT College of Engineering',
    description:
      "Pursuing Computer Science Engineering with a strong foundation in software engineering principles, data structures, and algorithms. Enhancing skills through regular participation in competitive programming.",
    score: '9.09 CGPA',
    date: 'December 2022 - Present',
    location: 'Davanagere, Karnataka, India',
  },
  {
    degree: 'PUC',
    college: 'Siddaganga PU Science College',
    description:
      "Pursued Pre-University studies in Science and Mathematics, cultivating critical thinking and a logical approach to challenges.",
    score: '96.33%',
    date: 'August 2020 - June 2022',
    location: 'Davanagere, Karnataka, India',
  },
  {
    degree: 'SSLC',
    college: 'Bapuji Higher Primary English Medium CBSE School',
    description:
      "Achieved SSLC qualification with distinction in foundational subjects, establishing a strong base for future academic pursuits.",
      score: '81.4%',
    date: 'June 2017 - March 2020',
    location: 'Davanagere, Karnataka, India',
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-4"
    >
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-cyan-700 dark:text-gray-300 hover:text-black transition-all duration-300">
          Edu
          <span className="border-b-4 border-cyan-500 dark:border-cyan-300 mx-1">
            cat
          </span>
          ion
        </h2>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:border hover:border-cyan-500"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-cyan-700 dark:text-cyan-300 mb-1">
              {edu.degree}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
              {edu.college}
            </p>
            <p className="text-sm mb-2 italic">{edu.date}</p>
            <p className="text-sm mb-2">{edu.location}</p>
            {edu.score && (
              <p className="text-sm mb-2 font-semibold">Score: {edu.score}</p>
            )}
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
              {edu.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
