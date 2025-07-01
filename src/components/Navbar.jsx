// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold text-blue-500 tracking-wide">
          <span className="text-white">Sufyan</span>.dev
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 items-center text-white text-sm font-semibold uppercase tracking-wide">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.id}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer relative group transition-all"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm px-6 py-6 space-y-4 text-white text-lg font-medium">
          {navLinks.map((link) => (
            <div key={link.id} onClick={() => setOpen(false)}>
              <Link
                to={link.id}
                smooth={true}
                duration={500}
                offset={-80}
                className="block cursor-pointer py-2 border-b border-gray-700"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
