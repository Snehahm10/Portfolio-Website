import React from 'react';
import { FaLaptopCode, FaDatabase, FaJava, FaHtml5 } from 'react-icons/fa';
import { motion } from 'framer-motion';

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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

function About() {
  return (
    <motion.section
      id="about"
      className="bg-gray-100 dark:bg-[#081b29] text-gray-900 dark:text-[#ededed] py-16 font-[Poppins,sans-serif]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Animates when scrolled into view
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-center dark:text-white text-gray-900 mb-2"
          variants={fadeUpVariants}
        >
          About Me
          <div className="h-[2px] w-24 bg-cyan-400 mx-auto mt-2"></div>
        </motion.h2>

        <div className="md:flex md:space-x-10 items-start mt-10">
          
          {/* Left Column - About Info */}
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            variants={fadeUpVariants}
          >
            <p className="text-2xl font-bold mb-6 text-cyan-400">
              Passionate software developer.
            </p>

            <p className="text-lg text-justify leading-relaxed mb-4">
              I'm Sneha H.M, a passionate Full Stack Developer with a growing skill set in both frontend and backend technologies. I enjoy building responsive and interactive web applications.
            </p>
            <p className="text-lg text-justify leading-relaxed">
              I’m enthusiastic about learning new technologies, solving real-world problems,
              and creating seamless digital experiences that leave a positive impact.
            </p>
          </motion.div>

          {/* Right Column - Skill Cards */}
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            {[
              { icon: <FaLaptopCode />, title: "Full Stack Development", text: "Frontend & Backend Skills", bg: "bg-white dark:bg-[#0a253b]" },
              { icon: <FaJava />, title: "Java Programming", text: "Strong OOPs & Logic", bg: "bg-white dark:bg-[#112e42]" },
              { icon: <FaDatabase />, title: "Database Design", text: "MySQL & SQL Queries", bg: "bg-white dark:bg-[#0a253b]" },
              { icon: <FaHtml5 />, title: "Web Technologies", text: "HTML, CSS, JS", bg: "bg-white dark:bg-[#112e42]" }
            ].map((skill, index) => (
              <motion.div
                key={index}
                className={`${skill.bg} p-4 rounded-lg shadow-md text-center transform hover:scale-105 hover:shadow-cyan-500/50 transition-all duration-300`}
                variants={cardVariants}
              >
                <div className="text-3xl text-cyan-400 mb-2 mx-auto">
                  {skill.icon}
                </div>
                <h3 className="text-base font-semibold">{skill.title}</h3>
                <p className="text-xs mt-1">{skill.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;

