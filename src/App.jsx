import React, { useState} from "react";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Skills from "./pages/Skills";
import Experience from "./components/Experience";
import ExperienceTimeline from "./components/Timeline";
import Testimonials from "./pages/Testimonials";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot";
import ChatToggleButton from "./components/ChatToggleButton";


const App = () => {
  const [showBot, setShowBot] = useState(false);
  return (
    <div className="bg-black text-white font-sans scroll-smooth">
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
    {/* other components */}
      {showBot && <Chatbot onClose={() => setShowBot(false)} />}
      <ChatToggleButton onClick={() => setShowBot(!showBot)} />
      <footer className="text-center py-6 bg-gray-900 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Muhammad Sufyan. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
