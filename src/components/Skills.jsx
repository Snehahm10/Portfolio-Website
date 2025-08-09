import React from "react";
import { motion } from "framer-motion";

const technicalSkills = [
  { category: "Frontend", skills: [
      { name: "HTML", level: "95%" },
      { name: "CSS", level: "90%" },
      { name: "JavaScript", level: "70%" },
      { name: "React", level: "70%" },
      { name: "Tailwind CSS", level: "60%" },
    ]
  },
  { category: "Backend", skills: [
      { name: "Node.js", level: "70%" },
      { name: "Express.js", level: "70%" },
      { name: "Java", level: "85%" },
      { name: "Python", level: "80%" },
    ]
  },
  { category: "Database & Coding Languages", skills: [
      { name: "MySQL", level: "70%" },
      { name: "RDBMS", level: "90%" },
      { name: "C", level: "80%" },
    ]
  },
];

const professionalSkills = [
  { name: "Communication", level: 90 },
  { name: "Problem Solving", level: 85 },
  { name: "Teamwork", level: 90 },
  { name: "Creativity", level: 85 },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 px-4 bg-gray-100 dark:bg-[#0f172a] font-poppins text-gray-900 dark:text-white"
    >
      {/* Title */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4 relative inline-block after:block after:w-14 after:h-1 after:bg-cyan-500 after:mx-auto after:mt-2"
        >
          My Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg text-cyan-700 dark:text-cyan-300"
        >
          A showcase of my technical expertise and professional abilities <br />
          that reflect my strengths and growth as a developer and team player.
        </motion.p>
      </div>

      {/* Technical Skills */}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="block text-2xl font-bold text-center mb-6 relative after:block after:w-16 after:h-1 after:bg-cyan-400 after:mx-auto after:mt-2"

      >
        Technical Skills
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        {technicalSkills.map((block, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex flex-col justify-between h-full transform transition duration-300 hover:scale-105 hover:shadow-lg hover:border hover:border-cyan-500"
          >
            <h3 className="text-xl font-semibold mb-4 text-cyan-600 dark:text-cyan-400 text-center">
              {block.category}
            </h3>
            <div className="flex-grow">
              {block.skills.map((skill, i) => (
                <div key={i} className="mb-4">
                  <div className="flex justify-between mb-1 text-sm">
                    <span>{skill.name}</span>
                    <span>{skill.level}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-300 dark:bg-gray-700 rounded overflow-hidden">
                    <motion.div
                      className="h-2 bg-cyan-500 rounded"
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Professional Skills */}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
       className="block text-2xl font-bold text-center mb-6 relative after:block after:w-16 after:h-1 after:bg-cyan-400 after:mx-auto after:mt-2"

      >
        Professional Skills
      </motion.h3>

      <div className="flex flex-wrap justify-center gap-12">
        {professionalSkills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center transition-all duration-300 hover:scale-110"
          >
            <div className="relative w-24 h-24 mb-4">
              <svg className="transform -rotate-90 w-full h-full">
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="lightgray"
                  className="dark:stroke-gray-700"
                  strokeWidth="8"
                  fill="none"
                />
                <motion.circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="#06b6d4"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray="251.2"
                  initial={{ strokeDashoffset: 251.2 }}
                  whileInView={{
                    strokeDashoffset:
                      251.2 - (skill.level / 100) * 251.2,
                  }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold">
                {skill.level}%
              </div>
            </div>
            <span className="font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
