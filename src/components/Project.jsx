// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Gym Management System",
    description: "A full-stack gym web app with user signup/login, trainer dashboard, and BMI calculator.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/sufyankhan25/gym-mern",
    live: "https://gym-website-1-weld.vercel.app/",
    image: "data:image/jpeg;base64,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",
  },
  {
    title: "Food Delivery App",
    description: "MERN-based food ordering system with real-time order tracking and admin panel.",
    tech: ["React", "Redux", "Node.js", "MongoDB"],
    github: "https://github.com/sufyankhan25/food-app",
    live: "https://food-app-sufi.vercel.app/",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTucZGgc6RMA2HMKDRSmI5wyFJDcRs2yXmS0Q&s",
    
  },
  {
    title: "Resume Builder",
    description: "A responsive resume builder and job portal app using Firebase and React.",
    tech: ["React", "Firebase", "TailwindCSS"],
    github: "https://github.com/sufyankhan25/resume-builder",
    live: "https://resume-builder-sufyan.vercel.app/",
    image: "https://placehold.co/600x400/111/FFF?text=Resume+Builder",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-16 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl font-bold text-blue-400 underline underline-offset-8 mb-12"
      >
        Projects
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6 space-y-3">
              <h3 className="text-2xl font-semibold text-blue-300">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-600 text-white px-2 py-1 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-400 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
