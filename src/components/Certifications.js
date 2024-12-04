import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws, faCheckCircle } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Certifications = () => {
    const certifications = [
        {
            id: 1,
            title: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services (AWS)",
            date: "2023",
            credentialId: "d097d8589121491b937004d187995043",
            verificationUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential",
            skills: [
                "Cloud Architecture",
                "AWS Services",
                "Cloud Security",
                "Scalable Solutions",
                "High Availability"
            ],
            logo: faAws
        }
        // Add more certifications here if needed
    ];

    return (
        <section className="certifications-section" id="certifications">
            <div className="section-container">
                <h2 className="section-title" data-aos="fade-up">
                    Certifications
                </h2>
                <div className="certifications-grid">
                    {certifications.map((cert) => (
                        <div key={cert.id} className="certification-card" data-aos="fade-up">
                            <div className="certification-icon">
                                <FontAwesomeIcon icon={cert.logo} />
                            </div>
                            <div className="certification-content">
                                <h3>{cert.title}</h3>
                                <p className="issuer">
                                    {cert.issuer} • {cert.date}
                                </p>
                                <div className="certification-skills">
                                    {cert.skills.map((skill, index) => (
                                        <span key={index} className="skill-tag">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                <div className="certification-footer">
                                    <span className="credential-id">
                                        Credential ID: {cert.credentialId}
                                    </span>
                                    <a
                                        href={cert.verificationUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="verify-btn"
                                    >
                                        <FontAwesomeIcon icon={faExternalLinkAlt} /> Verify
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
