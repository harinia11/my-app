// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence from framer-motion
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev); // Toggle the state
  };

  return (
    <nav className="navbar">
      {/* Navbar brand */}
      <div className="navbar-brand">Portfolio</div>

      {/* Toggle Bar for mobile view */}
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <span className={`bar ${isOpen ? 'active' : ''}`}></span>
        <span className={`bar ${isOpen ? 'active' : ''}`}></span>
        <span className={`bar ${isOpen ? 'active' : ''}`}></span>
      </div>

      {/* Navbar Links for both desktop and mobile */}
      <div className={`navbar-links-container ${isOpen ? 'open' : ''}`}>
        <ul className="navbar-links">
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
