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
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl font-bold text-blue-400 underline underline-offset-8 mb-16"
      >
        Contact Me
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-blue-300">Let's Connect</h3>
            <p className="text-gray-400">
              I’m open to freelance, internships, or full-time roles. Got a project or idea? Let’s talk!
            </p>
          </div>
          <div className="space-y-4">
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

        {/* Right Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800 p-8 rounded-2xl shadow-xl space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full bg-gray-700 px-4 py-3 rounded-lg focus:outline-none text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full bg-gray-700 px-4 py-3 rounded-lg focus:outline-none text-white"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full bg-gray-700 px-4 py-3 rounded-lg focus:outline-none text-white"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 w-full py-3 rounded-lg text-lg font-bold transition-transform transform hover:scale-105"
          >
            Send Message
          </button>
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
