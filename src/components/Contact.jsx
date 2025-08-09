import React from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function Contact() {
  return (
    <motion.section
      id="contact"
      className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-6 font-poppins"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      {/* Header */}
      <motion.div className="text-center mb-6" variants={fadeInUp}>
        <h2 className="text-4xl font-bold mb-4">
          Get <span className="underline decoration-cyan-400 underline-offset-8">In</span> Touch
        </h2>
        <p className="text-cyan-600 dark:text-cyan-300">
          I’m always open to discussing new opportunities or collaborations!
        </p>
      </motion.div>

      {/* Let’s Connect */}
      <motion.div className="max-w-6xl mx-auto text-center mb-6" variants={fadeInUp}>
        <p className="text-lg font-bold">Let’s connect!</p>
      </motion.div>

      {/* Contact Info Blocks */}
      <div className="space-y-6 max-w-6xl mx-auto">
        {[
          { icon: <FaEnvelope />, title: "Email", value: "snehahanjgimath@gmail.com", link: "mailto:snehahanjgimath@gmail.com" },
          { icon: <FaPhone />, title: "Phone", value: "+91 7899711396", link: "tel:+917899711396" },
          { icon: <FaMapMarkerAlt />, title: "Location", value: "Davangere, India" }
        ].map((item, i) => (
          <motion.div
            key={i}
            className="w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center space-x-6 hover:scale-105 transition-transform duration-300 hover:shadow-cyan-400/30"
            variants={fadeInUp}
          >
            <div className="text-cyan-600 dark:text-cyan-400 text-3xl">
              {item.icon}
            </div>
            <div>
              <h4 className="font-semibold text-xl">{item.title}</h4>
              {item.link ? (
                <a href={item.link} className="text-cyan-600 dark:text-cyan-300 text-lg hover:text-black dark:hover:text-white transition duration-200">
                  {item.value}
                </a>
              ) : (
                <span className="text-cyan-600 dark:text-cyan-300 text-lg">{item.value}</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Follow Me Section */}
      <motion.div className="mt-12 text-center" variants={fadeInUp}>
        <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
        <div className="flex justify-center space-x-6">
          {[
            { icon: <FaGithub />, link: "https://github.com/Snehahm10" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/sneha-hanjgimath-0188a0257/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/sneha_hanjgimath" }
          ].map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 dark:text-cyan-300 text-2xl hover:text-black dark:hover:text-white hover:scale-110 transition duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Contact;
