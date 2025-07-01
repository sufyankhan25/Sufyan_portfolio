import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ahmed Qaiser",
    role: "Senior Developer",
    feedback:
      "Sufyan is a brilliant MERN developer. His UI/UX sense and backend knowledge make him stand out. Highly recommend for modern web projects.",
  },
  {
    name: "Vineeta",
    role: "Team Lead",
    feedback:
      "Incredible dedication and consistent delivery. Sufyan always goes above and beyond in every team project.",
  },
  {
    name: "Owais Gul",
    role: "Project Partner",
    feedback:
      "A valuable teammate. His full-stack skills and communication help us finish our GoTaxi app with excellence.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl font-bold text-blue-400 underline underline-offset-8 mb-16"
      >
        Testimonials
      </motion.h2>

      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-blue-500/40 transition-all"
          >
            <p className="text-gray-300 italic mb-4">“{t.feedback}”</p>
            <h4 className="text-blue-400 font-semibold">{t.name}</h4>
            <p className="text-sm text-gray-400">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
