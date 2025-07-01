// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen px-6 py-10 font-sans">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center space-y-6 py-12 md:py-24"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-blue-400 drop-shadow-lg">
          Muhammad Sufyan
        </h1>
        <p className="text-2xl md:text-4xl text-white font-medium">
          MERN Stack Developer
        </p>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Building fast, scalable, and beautiful full-stack web applications using React, Node, Express, and MongoDB.
        </p>
        <div className="flex justify-center gap-8 mt-6">
          <a
            href="https://github.com/sufyankhan25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub className="text-4xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-sufyan-804921367"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-4xl" />
          </a>
          <a
            href="/Resume.pdf"
            download="Muhammad_Sufyan_Resume.pdf"
            className="text-gray-300 hover:text-blue-500 transition duration-300"
            aria-label="Resume"
          >
            <FaDownload className="text-4xl" />
          </a>
        </div>
      </motion.section>

      {/* About Me Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-20 max-w-4xl mx-auto text-center bg-gray-800 p-10 rounded-lg shadow-lg space-y-6"
      >
        <h2 className="text-4xl font-bold text-blue-400 underline underline-offset-8 decoration-blue-500">
          About Me
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed">
          I'm a passionate MERN Stack Developer from Karachi, focused on building responsive and user-friendly web applications. With a deep understanding of the full stack, I bring together sleek frontend design and robust backend logic to deliver seamless digital experiences.
        </p>
        <a
          href="/resume.pdf"
          download="Muhammad_Sufyan_Resume.pdf"
          className="inline-block bg-blue-600 hover:bg-blue-700 active:bg-blue-800 px-8 py-3 rounded-full text-white font-semibold text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Download Resume
        </a>
      </motion.section>

      {/* Coming Soon Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-20 text-center text-gray-400 text-xl italic"
      >
        <p>✨ More pages coming soon: Projects, Skills, Experience, Contact</p>
      </motion.section>
    </div>
  );
};

export default Hero;
