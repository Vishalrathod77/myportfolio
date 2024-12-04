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
            <div className="icon-container" >
              {/* Dark Mode Toggle Icon */}
              <div className="dark-mode-icon">
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
              </div>
            </div>

          </button>

        </div>
      </nav >

      <header className="hero section">
        <div className="hero-content">
          <div className="hero-image-container">
            <img src={profilePic} alt="Vishal Rathod" className="hero-image" />
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
              <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" /> Fairfax, VA
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" /> vishalnenavath1337@gmail.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} className="contact-icon" /> +1 703-298-3056
            </p>
            <p>
              {/* <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />{' '} */}
              <a href="https://www.linkedin.com/in/vishal-nenavath-0820641a8/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                  <path fill="#0288d1" d="M8.4,15L8.4,15L8.4,15c2.8,0,4.6-2,4.6-4.5C12.9,7.9,11.3,6,8.5,6S4,7.9,4,10.5C4,13,5.7,15,8.4,15z"></path><rect width="9" height="26" x="4" y="17" fill="#0288d1"></rect><path fill="#0288d1" d="M44,26.5c0-5.2-4.3-9.5-9.5-9.5c-3.1,0-5.8,1.4-7.5,3.7V17h-9v26h9V28l0,0c0-2.2,1.8-4,4-4s4,1.8,4,4v15h9	C44,43,44,28,44,26.5z"></path>
                </svg>
              </a>
            </p>
          </div>
        </div>
      </section>


      <footer className="text-center py-3">
        <p>&copy; 2024 My Portfolio</p>
        <p>Thank You!!!</p>
      </footer>
    </div >
  );
}

export default App;
