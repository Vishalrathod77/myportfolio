import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCode, faTimes, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Chat Bot (Python, NLP)",
            description: "AI-powered chatbot with NLP capabilities",
            details: `• Designed and implemented a chatbot using Natural Language Processing
• Applied feature engineering techniques improving efficiency by 20%
• Developed encoder-decoder model using LSTM neural networks
• Achieved 95% coherence rate in text generation
• Implemented real-time response capabilities`,
            technologies: ["Python", "NLP", "LSTM", "TensorFlow", "Flask"],
            image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            github: "https://github.com/yourusername/chatbot",
            demo: "https://your-demo-link.com",
            video: "https://youtube.com/your-video"
        },
        {
            id: 2,
            title: "AI Travel Planner (In Progress)",
            description: "An intelligent travel planning application that leverages AI to create personalized travel itineraries. Currently being developed with Django, React, and SQL. Features will include personalized trip suggestions, itinerary management, and interactive planning tools.",
            details: [
                "Building backend infrastructure with Django REST Framework",
                "Implementing database schema design in SQL",
                "Developing frontend interface with React",
                "Creating user authentication system",
                "Status: Backend API structure in progress"
            ],
            technologies: ["Django", "React", "SQL", "REST API", "JWT Auth"],
            image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            github: "#",
            demo: "Coming Soon"
        },
        {
            id: 3,
            title: "Credit Card Fraud Detection",
            description: "ML-based fraud detection system",
            details: `• Built real-time credit card fraud detection system
• Implemented feature engineering and data preprocessing
• Used ensemble learning with Random Forest and XGBoost
• Developed anomaly detection algorithms
• Achieved 90% accuracy in fraud detection`,
            technologies: ["Python", "Scikit-learn", "XGBoost", "PostgreSQL", "Redis"],
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            github: "https://github.com/yourusername/fraud-detection"
        }
    ];

    return (
        <div className="projects-section">
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card" data-aos="fade-up">
                        <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}>
                            <div className="project-overlay">
                                <div className="tech-stack">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-links">
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                )}
                                {project.demo && (
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                                    </a>
                                )}
                                {project.video && (
                                    <a href={project.video} target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </a>
                                )}
                                <button onClick={() => setSelectedProject(project)} style={{color: "black"}}>
                                    <FontAwesomeIcon icon={faCode} style={{color: "black"}}/> Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="close-button" onClick={() => setSelectedProject(null)}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        
                        <div className="modal-image" style={{ backgroundImage: `url(${selectedProject.image})` }}>
                            <div className="modal-image-overlay"></div>
                        </div>
                        
                        <div className="modal-body">
                            <h2 className="modal-title">{selectedProject.title}</h2>
                            
                            <div className="tech-stack modal-tech-stack">
                                {selectedProject.technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            
                            <div className="project-details">
                                {Array.isArray(selectedProject.details) ? 
                                    selectedProject.details.map((detail, index) => (
                                        <p key={index}>{detail}</p>
                                    )) 
                                    : 
                                    selectedProject.details.split('\n').map((detail, index) => (
                                        <p key={index}>{detail}</p>
                                    ))}
                            </div>
                            
                            <div className="modal-links">
                                {selectedProject.github && (
                                    <a href={selectedProject.github} 
                                       target="_blank" 
                                       rel="noopener noreferrer"
                                       className="github-link">
                                        <FontAwesomeIcon icon={faGithub} /> View Code
                                    </a>
                                )}
                                {selectedProject.demo && (
                                    <a href={selectedProject.demo} 
                                       target="_blank" 
                                       rel="noopener noreferrer"
                                       className="demo-link">
                                        <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                                    </a>
                                )}
                                {selectedProject.video && (
                                    <a href={selectedProject.video} 
                                       target="_blank" 
                                       rel="noopener noreferrer"
                                       className="video-link">
                                        <FontAwesomeIcon icon={faYoutube} /> Watch Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
