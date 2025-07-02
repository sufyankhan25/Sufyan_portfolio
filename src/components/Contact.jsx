import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLocationArrow } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="relative bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-24 px-6 overflow-hidden">
      {/* Glowing Shapes */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-cyan-400 rounded-full blur-2xl opacity-20 animate-bounce"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl font-bold text-blue-400 underline underline-offset-8 mb-16"
      >
        Contact Me
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start z-10 relative">
        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 bg-white/5 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-white/10"
        >
          <h3 className="text-2xl font-semibold mb-2 text-blue-300">Let’s Connect</h3>
          <p className="text-gray-300">
            Open to freelance, internships, or full-time roles. Got a project or idea? Let’s talk!
          </p>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-500 text-xl" />
              <p>sufyan265631@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-blue-500 text-xl" />
              <p>0306-9044757</p>
            </div>
            <div className="flex items-center gap-4">
              <FaLocationArrow className="text-blue-500 text-xl" />
              <p>Karachi, Pakistan</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-xl space-y-6 border border-white/10"
        >
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full bg-gray-700 px-4 py-3 rounded-lg focus:outline-none text-white placeholder-gray-400"
            required
          />
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full bg-gray-700 px-4 py-3 rounded-lg focus:outline-none text-white placeholder-gray-400"
            required
          />
          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            name="message"
            rows="5"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full bg-gray-700 px-4 py-3 rounded-lg focus:outline-none text-white placeholder-gray-400"
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 w-full py-3 rounded-lg text-lg font-semibold text-white transition-all shadow-lg"
          >
            Send Message
          </motion.button>

          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-400 text-center font-medium"
            >
              ✅ Your message has been sent successfully!
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
