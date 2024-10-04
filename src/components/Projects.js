import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';
import SectionTitle from './SectionTitle';
import automotiveCareImg from './images/OIP (1).jpeg';
import neuroAssistImg from './images/OIP.jpeg';
import cropRecommendationImg from './images/CROP.jpg';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      title: 'Automotive Care System',
      description: 'An automated system for car maintenance tracking.',
      image: automotiveCareImg,
      techStack: ['HTML', 'CSS', 'JavaScript', 'SQL', 'Xampp', 'Bootstrap'],
      liveUrl: 'https://harinia11.github.io/internship-_project/',
      sourceUrl: 'https://github.com/harinia11/internship-_project',
    },
    {
      title: 'NeuroAssist Companion',
      description: 'AI stroke assistant with data visualization and user authentication.',
      image: neuroAssistImg,
      techStack: ['Python', 'Streamlit', 'Machine Learning', 'Tesseract', 'gTTS'],
      liveUrl: 'https://neuroai.streamlit.app',
      sourceUrl: 'https://github.com/harinia11/strokecare_ai',
    },
    {
      title: 'Crop Recommendation System',
      description: 'Recommends crops based on soil and weather conditions using machine learning.',
      image: cropRecommendationImg,
      techStack: ['Python', 'Streamlit', 'Machine Learning', 'Pandas', 'Numpy'],
      liveUrl: 'https://cropai.streamlit.app/',
      sourceUrl: 'https://github.com/harinia11/crop_ai',
    }
  ];

  return (
    <>
      <section id="projects" className="section">
        <SectionTitle title="Projects" />
        <div className="projects-content">
          {projects.map((project, index) => (
            <motion.div key={index} className="project-card" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} onClick={() => handleProjectClick(project)}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="flip-card-back">
                    <img src={project.image} alt={`${project.title} Screenshot`} className="project-image" />
                  </div>
                </div>
              </div>
              <div className="badges">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="badge">{tech}</span>
                ))}
              </div>
              <div className="project-buttons">
                <a href={project.liveUrl} className="cta-button" target="_blank" rel="noopener noreferrer">View Project</a>
                <a href={project.sourceUrl} className="cta-button" target="_blank" rel="noopener noreferrer">View Source</a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {isModalOpen && selectedProject && <Modal show={isModalOpen} onClose={closeModal} project={selectedProject} />}
    </>
  );
};

export default Projects;
