import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill === selectedSkill ? null : skill);
  };

  return (
    <section id="skills" className="section">
      <SectionTitle title="Skills" />
      <div className="skills-content">
        <ul className="skills-list">
          {['HTML, CSS, JavaScript', 'React.js', 'Machine Learning', 'Data Analysis', 'Version Control', 'Streamlit'].map(skill => (
            <li key={skill} onClick={() => handleSkillClick(skill)} className="skill-item">
              {skill}
              {selectedSkill === skill && (
                <motion.div className="skill-level" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                  <p>{skill} knowledge level: <strong>Intermediate</strong></p>
                </motion.div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
