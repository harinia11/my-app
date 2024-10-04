import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Importing icons from react-icons

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Harini A. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/harini-a-69b398259/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/harinia11" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="mailto:harini.ug22.cs@francisxavier.ac.in" target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
