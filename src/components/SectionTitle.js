import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({ title }) => {
  return (
    <div className="section-title-container">
      <h2 className="section-title">{title}</h2>
    </div>
  );
};

export default SectionTitle;
