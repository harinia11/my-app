import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle'; // Adjust the import according to your file structure

const Skills = () => {
  return (
    <section id="skills" className="section">
      {/* Rotating Background Graphics */}
      <div className="rotating-graphic skills-graphic1"></div>
      <div className="rotating-graphic skills-graphic2"></div>
      <div className="rotating-graphic skills-graphic3"></div>

      <SectionTitle title="My Skills" />

      {/* Skills List */}
      <motion.div 
        className="skills-list" 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Example Skill Items */}
        <div className="skill-item">
          <h3>HTML</h3>
        </div>
        <div className="skill-item">
          <h3>CSS</h3>
        </div>
        <div className="skill-item">
          <h3>JavaScript</h3>
        </div>
        <div className="skill-item">
          <h3>React.js</h3>
        </div>
        <div className="skill-item">
          <h3>Machine Learning</h3>
        </div>
        <div className="skill-item">
          <h3>Data Analysis</h3>
        </div>
        <div className="skill-item">
          <h3>Version Control</h3>
        </div>
        <div className="skill-item">
          <h3>Streamlit</h3>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
