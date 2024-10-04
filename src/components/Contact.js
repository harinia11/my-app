import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data via EmailJS
    emailjs
      .send(
        'service_f9evffn', // Replace with your EmailJS service ID
        'template_7xsr3hz', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'ltwE2gf12DOi9cnUl' // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Your message has been sent successfully!');
        },
        (err) => {
          console.log('FAILED...', err);
          alert('Failed to send your message, please try again.');
        }
      );

    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-section">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
