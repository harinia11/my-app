// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev); // Toggle the state
  };

  return (
    <nav className="navbar">
      {/* Toggle Bar */}
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <span className={`bar ${isOpen ? 'active' : ''}`}></span>
        <span className={`bar ${isOpen ? 'active' : ''}`}></span>
        <span className={`bar ${isOpen ? 'active' : ''}`}></span>
      </div>

      {/* Navbar Links */}
      {isOpen && (
        <motion.ul
          className="navbar-links"
          initial={{ opacity: 0, y: -20 }} // Initial state
          animate={{ opacity: 1, y: 0 }} // Animate to this state
          exit={{ opacity: 0, y: -20 }} // Exit animation
          transition={{ duration: 0.3 }} // Duration of the animation
        >
          <li>
            <Link to="home" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
