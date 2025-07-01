import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    title: "MERN Stack Intern",
    company: "XYZ Software House",
    duration: "Jan 2024 - Apr 2024",
    description:
      "Worked on real-world MERN stack projects with a focus on frontend UI components, backend APIs, and MongoDB schema design.",
  },
  {
    title: "Freelance Web Developer",
    company: "Fiverr / Upwork",
    duration: "2023 - Present",
    description:
      "Completed client projects using React, Tailwind, Firebase, and Node.js. Specialized in building responsive UIs and integrating APIs.",
  },
  {
    title: "Personal Projects",
    company: "Self-Learning",
    duration: "2022 - Present",
    description:
      "Built multiple full-stack apps like Gym Manager, Food Delivery, and Resume Builder using modern stacks and deployment tools.",
  },
];

const Experience = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl font-bold text-blue-400 underline underline-offset-8 mb-12"
      >
        Experience
      </motion.h2>

      <div className="max-w-4xl mx-auto relative border-l-4 border-blue-600 pl-6 space-y-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative"
          >
            <div className="absolute -left-7 top-1 text-blue-500 bg-gray-900 rounded-full p-2 shadow-lg">
              <FaBriefcase className="text-xl" />
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-blue-500/40 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-blue-300">
                {exp.title}
              </h3>
              <p className="text-sm text-gray-400 mb-1">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-3">{exp.duration}</p>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
