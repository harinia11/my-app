import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import SectionTitle from './components/SectionTitle';
import Modal from './components/Modal';  // Modal for displaying project details
import img1 from './components/images/image.jpg';
import neuroAssistImg from './components/images/OIP.jpeg';
import cropRecommendationImg from './components/images/CROP.jpg';
import automotiveCareImg from './components/images/OIP (1).jpeg';
import { motion } from 'framer-motion';
import './App.css';
import emailjs from 'emailjs-com'; // Import EmailJS

const App = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle scrolling and add visibility to sections
  const handleScroll = () => {
    const sections = document.querySelectorAll('.section');
    const windowHeight = window.innerHeight;

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < windowHeight * 0.8) {
        section.classList.add('visible');
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle skill click
  const handleSkillClick = (skill) => {
    setSelectedSkill(skill === selectedSkill ? null : skill);
  };

  // Function to handle project click
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Project data
  const projects = [
    {
      title: 'Automotive Care System',
      description: 'An automated system for car maintenance tracking.',
      image: automotiveCareImg,
      techStack: ['HTML', 'CSS', 'JavaScript', 'SQL', 'Xampp', 'Bootstrap'],
      liveUrl: 'https://harinia11.github.io/internship-_project/', // Example URL
      sourceUrl: 'https://github.com/harinia11/internship-_project',
    },
    {
      title: 'NeuroAssist Companion',
      description: 'AI stroke assistant with data visualization and user authentication.',
      image: neuroAssistImg,
      techStack: ['Python', 'Streamlit', 'Machine Learning', 'Tesseract', 'gTTS'],
      liveUrl: 'https://neuroassit.ccom', // Example URL
      sourceUrl: 'https://github.com/harinia11/strokecare_ai',
    },
    {
      title: 'Crop Recommendation System',
      description: 'Recommends crops based on soil and weather conditions using machine learning.',
      image: cropRecommendationImg,
      techStack: ['Python', 'Streamlit', 'Machine Learning', 'Pandas', 'Numpy'],
      liveUrl: 'https://cropai.streamlit.app/', // Example URL
      sourceUrl: 'https://github.com/harinia11/crop_ai',
    }
  ];

  // EmailJS form submit function
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f9evffn', 'template_7xsr3hz', e.target, 'ltwE2gf12DOi9cnUl')
      .then((result) => {
          console.log(result.text);
          alert("Message Sent!");
      }, (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
      });
    e.target.reset(); // Clear form after submission
  };

  return (
    <>
      <Navbar />

      {/* Home Section */}
      <section id="home" className="section">
        <motion.h1 className="home-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          Harini A
        </motion.h1>
        <motion.p className="home-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          Web Developer | Machine Learning Enthusiast
        </motion.p>
        <motion.img src={img1} alt="Profile" className="profile-photo" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} />
      </section>
      <hr />

      {/* About Me Section */}
      <section id="about" className="section">
        <SectionTitle title="About Me" />
        <motion.p className="about-description" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 1 }}>
          I’m Harini A, a passionate Web Developer and Machine Learning Enthusiast with a strong foundation in HTML, CSS, and JavaScript. I create dynamic and user-friendly applications using React.js. Currently pursuing my engineering degree, I work on innovative projects like the NeuroAssist Companion, an AI stroke assistant, a crop recommendation system utilizing machine learning, and Automotive Care systems. I thrive on continuous learning, exploring new technologies, and collaborating on solutions that make an impact.
        </motion.p>
      </section>
      <hr />

      {/* Skills Section */}
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
      <hr />

      {/* Projects Section */}
      <section id="projects" className="section">
        <SectionTitle title="Projects" />
        <div className="projects-content">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => handleProjectClick(project)}
            >
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

              {/* Buttons for viewing project and source */}
              <div className="project-buttons">
                <a href={project.liveUrl} className="cta-button" target="_blank" rel="noopener noreferrer">View Project</a>
                <a href={project.sourceUrl} className="cta-button" target="_blank" rel="noopener noreferrer">View Source</a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal for project details */}
      {isModalOpen && selectedProject && (
        <Modal show={isModalOpen} onClose={closeModal} project={selectedProject} />
      )}
      <hr />


    
      {/* Contact Section with Form */}
      <section id="contact" className="section">
        <SectionTitle title="Contact" />
        <form className="contact-form" onSubmit={sendEmail}>
  <label>Name</label>
  <input type="text" name="name" required />

  <label>Email</label>
  <input type="email" name="email" required />

  <label>Message</label>
  <textarea name="message" required />

  <button type="submit" className="cta-button">Send Message</button>
</form>
</section>
      <Footer />
    </>
  );
};

export default App;
