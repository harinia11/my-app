import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section id="about" className="section">
      <SectionTitle title="About " />
      <motion.p className="about-description" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 1 }}>
        I’m Harini A, a passionate Web Developer and Machine Learning Enthusiast with a strong foundation in HTML, CSS, and JavaScript. I create dynamic and user-friendly applications using React.js.
      </motion.p>
    </section>
  );
};

export default About;
