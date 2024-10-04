// Modal.js
import React from 'react';
import './Modal.css'; // You can add styles for the modal here

const Modal = ({ show, onClose, project }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>{project.title}</h2>
        <img src={project.image} alt={project.title} className="modal-image" />
        <p>{project.description}</p>
        <div className="badges">
          {project.techStack.map((tech, index) => (
            <span key={index} className="badge">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
