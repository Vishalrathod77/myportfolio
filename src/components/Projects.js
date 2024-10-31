// src/components/Projects.js
import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
    const [showModal, setShowModal] = useState({ show: false, project: null });

    const toggleModal = (project) => {
        setShowModal({ show: !showModal.show, project });
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
            <div className="row">
                {/* Project 1 */}
                <div className="col-md-4">
                    <div className="card project-card">
                        {/* <img src="https://via.placeholder.com/150" className="card-img-top" alt="Project 1" /> */}
                        <div className="card-body">
                            <h5 className="card-title">Chat Bot (Python, NLP)</h5>
                            <p className="card-text">Developed an NLP-based chatbot to enhance customer support by 40%.</p>
                            <button className="btn btn-outline-primary" onClick={() => toggleModal(1)}>
                                View Project
                            </button>
                        </div>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="col-md-4">
                    <div className="card project-card">
                        {/* <img src="https://via.placeholder.com/150" className="card-img-top" alt="Project 2" /> */}
                        <div className="card-body">
                            <h5 className="card-title">Web Application Kubernetes Orchestration</h5>
                            <p className="card-text">Built a web app orchestrated on Kubernetes for high availability.</p>
                            <button className="btn btn-outline-primary" onClick={() => toggleModal(2)}>
                                View Project
                            </button>
                        </div>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="col-md-4">
                    <div className="card project-card">
                        {/* <img src="https://via.placeholder.com/150" className="card-img-top" alt="Project 3" /> */}
                        <div className="card-body">
                            <h5 className="card-title">Credit Card Fraud Detection</h5>
                            <p className="card-text">Implemented ML models to detect fraud with 90% accuracy.</p>
                            <button className="btn btn-outline-primary" onClick={() => toggleModal(3)}>
                                View Project
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Content */}
            {showModal.show && (
                <div className="modal-overlay" onClick={() => toggleModal(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        {showModal.project === 1 && (
                            <>
                                <h2>Chat Bot (Python, NLP)</h2>
                                <p> Designed and implemented a chatbot using Natural Language Processing (NLP) techniques,
                                    reducing customer query response time by 40%. <br />
                                    • Applied feature engineering techniques, such as feature selection, extraction, stemming, and
                                    PCA, improving data processing efficiency by 20%. <br />
                                    • Developed an encoder-decoder model using LSTM neural networks, enabling coherent sequential
                                    text generation with a 95% coherence rate.</p>
                            </>
                        )}
                        {showModal.project === 2 && (
                            <>
                                <h2>Web Application Kubernetes Orchestration</h2>
                                <p>Developed a high-availability web application deployed in a Kubernetes cluster using AWS EC2 EKS. Enabled seamless scaling and uptime.</p>
                            </>
                        )}
                        {showModal.project === 3 && (
                            <>
                                <h2>Credit Card Fraud Detection</h2>
                                <p>Designed a fraud detection system using ML models, achieving 90% accuracy in identifying fraudulent transactions and reducing financial risks.</p>
                            </>
                        )}
                        <button className="btn btn-outline-danger" onClick={() => toggleModal(null)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
