import React from 'react';
import '.components/Home.css'; // Make sure to create a CSS file for styling

const Home = () => {
  return (
    <section id="home" className="home-section">
      <h1 className="name">Harini A</h1>
      <p className="greeting">Hey! Harini here</p>
      <p className="role">Web Developer | Machine Learning Enthusiast</p>
      <a href="https://www.linkedin.com/in/harini-a-69b398259/" className="linkedin-button" target="_blank" rel="noopener noreferrer">
        Visit my LinkedIn
      </a>
    </section>
  );
};

export default Home;
