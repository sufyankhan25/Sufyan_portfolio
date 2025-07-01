import React from "react";
import { motion } from "framer-motion";

const skills = {
  frontend: [
    { name: "React", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "HTML/CSS", level: 95 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 80 },
    { name: "MongoDB", level: 85 },
    { name: "Firebase", level: 70 },
  ],
  tools: [
    { name: "Git/GitHub", level: 90 },
    { name: "Postman", level: 80 },
    { name: "VS Code", level: 95 },
    { name: "Vercel/Render", level: 80 },
  ],
};

const SkillBar = ({ name, level }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm text-gray-300">
      <span>{name}</span>
      <span>{level}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-3">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1 }}
        className="bg-blue-500 h-3 rounded-full"
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section className="bg-gray-950 text-white py-16 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl font-bold text-blue-400 underline underline-offset-8 mb-12"
      >
        Skills
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Frontend */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-6"
        >
          <h3 className="text-2xl font-semibold text-blue-300 text-center">Frontend</h3>
          {skills.frontend.map((skill, index) => (
            <SkillBar key={index} name={skill.name} level={skill.level} />
          ))}
        </motion.div>

        {/* Backend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-6"
        >
          <h3 className="text-2xl font-semibold text-blue-300 text-center">Backend</h3>
          {skills.backend.map((skill, index) => (
            <SkillBar key={index} name={skill.name} level={skill.level} />
          ))}
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-6"
        >
          <h3 className="text-2xl font-semibold text-blue-300 text-center">Tools</h3>
          {skills.tools.map((skill, index) => (
            <SkillBar key={index} name={skill.name} level={skill.level} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
