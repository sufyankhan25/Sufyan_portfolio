import React, { useState } from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Skills from "./pages/Skills";
import Experience from "./components/Experience";
import Testimonials from "./pages/Testimonials";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot";
import ChatToggleButton from "./components/ChatToggleButton";

const App = () => {
  const [showBot, setShowBot] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-black text-white font-sans scroll-smooth"
    >
      <Navbar />

      <section id="hero" className="pt-20">
        <Hero />
      </section>

      <section id="projects">
        <Project />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <Contact />
      </section>

      {showBot && <Chatbot onClose={() => setShowBot(false)} />}
      <ChatToggleButton onClick={() => setShowBot(!showBot)} />

      <footer className="text-center py-6 bg-gray-900 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Muhammad Sufyan. All rights reserved.
      </footer>
    </motion.div>
  );
};

export default App;
