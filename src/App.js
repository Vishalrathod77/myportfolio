import React, { useState, useEffect } from 'react';
import './App.css';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import profilePic from './profile.jpg';
import darkLogo from './components/darkmode_logo.png';
import lightLogo from './components/logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BackgroundLines from './components/BackgroundLines';
import Resume from './components/Resume';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setShowOverlay(true);
    setTimeout(() => setShowOverlay(false), 500);
  };

  useEffect(() => {
    // Simulate loading time for animations to initialize
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Delay content appearance for smooth transition
    const contentTimer = setTimeout(() => {
      setContentLoaded(true);
    }, 2000);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  useEffect(() => {
    AOS.init();
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
    <div className={`App ${darkMode ? 'dark-mode' : ''} ${contentLoaded ? 'content-loaded' : ''}`}>
      <BackgroundLines />
      {showOverlay && <div className="spider-web-overlay"></div>}
      
      {/* Loading Screen */}
      <div className={`loading-screen ${isLoading ? 'visible' : ''}`}>
        <div className="loader">
          <div className="loader-circle"></div>
          <div className="loader-text">Loading...</div>
        </div>
      </div>

      {/* Background Animations */}
      <div className={`background-container ${contentLoaded ? 'visible' : ''}`}>
        {/* Matrix Rain Effect */}
        <div className="matrix-background">
          {[...Array(15)].map((_, i) => (
            <div key={`matrix-${i}`} className="matrix-column" style={{
              left: `${(i / 15) * 100}%`,
              animationDelay: `-${Math.random() * 5}s`
            }}>
              {[...Array(20)].map((_, j) => (
                <span key={`matrix-char-${j}`} style={{
                  animationDelay: `-${Math.random() * 5}s`
                }}>
                  {String.fromCharCode(33 + Math.floor(Math.random() * 94))}
                </span>
              ))}
            </div>
          ))}
        </div>

        {/* Animated Grid */}
        <div className="grid-background">
          {[...Array(100)].map((_, i) => (
            <div key={`grid-${i}`} className="grid-cell" />
          ))}
        </div>

        <div className="bubbles-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={`bubble-${i}`}
              className="bubble"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 3 + 4}s`,
                animationDelay: `-${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        <div className="animated-background">
          {/* Floating Shapes */}
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          
          {/* Gradient Orbs */}
          <div className="orb"></div>
          <div className="orb"></div>
          
          {/* Particles */}
          {[...Array(20)].map((_, index) => (
            <div key={index} className="particle" />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className={`main-content ${contentLoaded ? 'visible' : ''}`}>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#" data-aos="fade-right">
              <img 
                src={darkMode ? darkLogo : lightLogo} 
                alt="Logo" 
                className="navbar-logo"
                height="40"
              />
            </a>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav" 
              aria-controls="navbarNav" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#about" data-aos="fade-down" data-aos-delay="100">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects" data-aos="fade-down" data-aos-delay="200">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact" data-aos="fade-down" data-aos-delay="300">Contact</a>
                </li>
              </ul>
            </div>
            <button
              onClick={toggleDarkMode}
              className="btn btn-secondary ms-2 dark-mode-toggle"
              data-aos="fade-left"
            >
              <div className="icon-container">
                <div className="dark-mode-icon">
                  <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                </div>
              </div>
            </button>
          </div>
        </nav>

        <header className="hero section">
          <div className="hero-content">
            <div className="hero-image-container" data-aos="fade-right" data-aos-duration="1200">
              <img src={profilePic} alt="Vishal Rathod" className="hero-image" />
            </div>
            <div className="hero-text" data-aos="fade-left" data-aos-duration="1200">
              <h1>Vishal Rathod Nenavath</h1>
              <p className="lead">Full-stack Web Developer</p>
              <a href="#projects" className="view-work-btn">
                <span>View My Work</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
        </header>

        <section id="about" className="about py-5 section">
          <div className="container">
            <h2 className="text-center mb-4" data-aos="fade-up">About Me</h2>
            <p className="lead text-center" data-aos="fade-up" data-aos-delay="100">
              I'm a full-stack web developer with a passion for building responsive and user-friendly websites...
            </p>

            <div className="skills-grid">
              {["Python", "Java", "AWS", "HTML", "CSS", "JavaScript", "React JS", "Angular JS", "MongoDB", "SQL", "Flask", "DJango",
                "Spring Boot"
              ].map((skill, index) => (
                <div 
                  key={skill} 
                  className="skill-badge"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="certifications py-0 section">
          <div className="container">
            <h2 className="text-center mb-4" data-aos="fade-up">My Certifications</h2>
            <Certifications />
          </div>
        </section>

        <section id="projects" className="projects py-0 section">
          <div className="container">
            <h2 className="text-center mb-4" data-aos="fade-up">My Projects</h2>
            <Projects />
          </div>
        </section>

        <section id="resume" className="resume py-0 section">
          <div className="container">
            <h2 className="text-center mb-4" data-aos="fade-up">My Resume</h2>
            <Resume />
          </div>
        </section>

        <section id="contact" className="contact py-5 section">
          <div className="container">
            <h2 className="text-center mb-4" data-aos="fade-up">Get In Touch</h2>
            <Contact />
          </div>
        </section>

        <footer className="text-center py-3">
          <p>&copy; 2024 My Portfolio</p>
          <p>Thank You!!!</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
