import React from 'react';
import './Resume.css';

const Resume = () => {
  const handleDownload = () => {
    const resumeUrl = process.env.PUBLIC_URL + '/assets/Vishal Resume_new.pdf';
    window.open(resumeUrl, '_blank');
  };

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <h2>Resume</h2>
        <div className="resume-content">
          <div className="resume-summary">
            <p>
              Passionate Full Stack Developer with expertise in MERN Stack and modern web technologies.
              Skilled in building responsive and user-friendly web applications with a focus on clean code and optimal performance.
            </p>
          </div>
          <div className="resume-download">
            <button onClick={handleDownload} className="download-button">
              <span className="button-icon">📄</span>
              Download Resume
            </button>
          </div>
          <div className="resume-preview">
            <div className="resume-section">
              <h3>Technical Skills</h3>
              <ul>
                <li>Frontend: React.js, JavaScript (ES6+), HTML5, CSS3, Bootstrap</li>
                <li>Backend: Node.js, Express.js, REST APIs</li>
                <li>Database: MongoDB, MySQL</li>
                <li>Tools & Others: Git, VS Code, Postman, Responsive Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
