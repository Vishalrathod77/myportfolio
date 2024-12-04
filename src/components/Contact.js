import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic will be implemented here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-info" data-aos="fade-right">
          <div>
            <h3 className="contact-heading">Let's Connect</h3>
            <p className="contact-text">
              I'm always interested in hearing about new projects and opportunities.
              Feel free to reach out through any of the following channels:
            </p>
          </div>
          
          <div className="contact-links">
            <a href="mailto:vishalnenavath1337@gmail.com" className="contact-link">
              <FontAwesomeIcon icon={faEnvelope} className="contact-link-icon" />
              vishalnenavath1337@gmail.com
            </a>
            
            <a href="tel:+17032983056" className="contact-link">
              <FontAwesomeIcon icon={faPhone} className="contact-link-icon" />
              +1 (703) 298-3056
            </a>
            
            <div className="contact-link">
              <FontAwesomeIcon icon={faLocationDot} className="contact-link-icon" />
              Virginia, USA
            </div>
            
            <a href="https://www.linkedin.com/in/vishal-nenavath-0820641a8/" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="contact-link">
              <FontAwesomeIcon icon={faLinkedin} className="contact-link-icon" />
              LinkedIn Profile
            </a>
            
            <a href="https://github.com/Vishalrathod77" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="contact-link">
              <FontAwesomeIcon icon={faGithub} className="contact-link-icon" />
              GitHub Profile
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-left">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
