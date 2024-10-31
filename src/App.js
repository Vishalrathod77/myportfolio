import React, { useState, useEffect } from 'react';
import './App.css';
import Projects from './components/Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import profilePic from './profile.jpg';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setShowOverlay(true);
    setTimeout(() => setShowOverlay(false), 600);
  };

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const skills = document.querySelectorAll('.skill-badge');
    const options = { threshold: 0.3 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-up-visible');
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));
    skills.forEach((skill, index) => {
      setTimeout(() => observer.observe(skill), index * 100);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      skills.forEach((skill) => observer.unobserve(skill));
    };
  }, []);

  useEffect(() => {
    // Mouse trail effect
    const handleMouseMove = (e) => {
      const trail = document.createElement('div');
      trail.className = 'mouse-trail';
      trail.style.left = `${e.pageX}px`;
      trail.style.top = `${e.pageY}px`;
      document.body.appendChild(trail);

      // Remove the trail after a short delay
      setTimeout(() => {
        trail.remove();
      }, 500); // Adjust duration as needed
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      {showOverlay && <div className="spider-web-overlay"></div>}

      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">My Portfolio</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
          <button
            onClick={toggleDarkMode}
            className={`btn btn-secondary ml-2 dark-mode-toggle`}
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </button>
        </div>
      </nav>

      <header className="hero section">
        <div className="hero-content">
          <div className="hero-image-container">
            <img src={profilePic} alt="Vishal Rathod Nenavath" className="hero-image" />
          </div>
          <div className="hero-text">
            <h1>Vishal Rathod Nenavath</h1>
            <p className="lead">Full-stack Web Developer</p>
            <a href="#projects" className="btn btn-primary mt-4 btn-lg">View My Work</a>
          </div>
        </div>
      </header>

      <section id="about" className="about py-5 section">
        <div className="container">
          <h2 className="text-center mb-4">About Me</h2>
          <p className="lead text-center">I'm a full-stack web developer with a passion for building responsive and user-friendly websites...</p>

          <div className="skills-grid">
            {["Python", "Java", "AWS", "HTML", "CSS", "JavaScript", "React JS", "Angular JS", "MongoDB", "SQL", "Flask", "DJango",
              "Spring Boot"
            ].map((skill) => (
              <div key={skill} className="skill-badge">{skill}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="projects py-0 section">
        <div className="container">
          <h2 className="text-center mb-4">My Projects</h2>
          <Projects />
        </div>
      </section>


      <section id="contact" className="contact py-0 section">
        <div className="container">
          <h2 className="text-center mb-4">Contact Me</h2>
          <div className="contact-info-card text-center">
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" /> Your City, Country
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" /> your-email@example.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} className="contact-icon" /> +1 234 567 8901
            </p>
            <p>
              <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />{' '}
              <a href="https://www.linkedin.com/in/vishal-nenavath-0820641a8/" target="_blank" rel="noopener noreferrer">
                linkedin.com
              </a>
            </p>
          </div>
        </div>
      </section>


      <footer className="text-center py-3">
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
