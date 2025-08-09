import React from 'react';
import { Calendar, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import java from '../assets/images/java.jpeg';
import web from '../assets/images/web.png';
import microsoft from '../assets/images/microsoft.jpeg';

function Certifications() {
  const certifications = [
    {
      image: java,
      title: 'Java Programming',
      description: [
        'Completed Java training with hands-on coding.',
        'Certified through Infosys Springboard.'
      ],
      publisher: 'Infosys Springboard',
      date: 'Feb 2025'
    },
    {
      image: web,
      title: 'Web Development',
      description: [
        'Frontend technologies: HTML, CSS, JS.',
        'Project-based certification with practicals.'
      ],
      publisher: 'Udemy',
      date: 'Feb 2025'
    },
    {
      image: microsoft,
      title: 'Career Essentials in Software Development',
      description: [
        'Core concepts of AI and Azure Cloud.',
        'Structured modules on Microsoft Learn.'
      ],
      publisher: 'LinkedIn Learning (Microsoft)',
      date: 'Feb 2025'
    }
  ];

  return (
    <section
      id="certifications"
      className="py-16 px-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white font-poppins"
    >
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-2">
          Cer<span className="underline decoration-cyan-400 underline-offset-8">tifica</span>tions
        </h2>
        <p className="text-lg text-cyan-600 dark:text-cyan-400">
          Recognized accomplishments in my learning journey
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-cyan-500/30"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <a href={cert.image} target="_blank" rel="noopener noreferrer">
              <img
                src={cert.image}
                alt={`${cert.title} Certification`}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            </a>
            <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-1">
              {cert.title}
            </h3>
            {cert.description.map((desc, i) => (
              <p key={i} className="text-sm text-gray-700 dark:text-gray-300">{desc}</p>
            ))}
            <div className="flex justify-center items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-3">
              <BadgeCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Publisher: {cert.publisher}</span>
            </div>
            <div className="flex justify-center items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-1">
              <Calendar className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Date: {cert.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
