import React, { useState } from 'react';
import './ContentHub.css';

const ContentHub = () => {
    const [activeTab, setActiveTab] = useState('tech');

    const content = {
        tech: {
            title: "Technology",
            heading: "Scale Engineering teams in LATAM with zero tax risk.",
            description: "Tap into elite developer talent pools in Brazil, Mexico, and Argentina without worrying about permanent establishment or local labor lawsuits."
        },
        healthcare: {
            title: "Healthcare",
            heading: "Manage cross-border medical staff with strict regulatory compliance.",
            description: "Ensure credential verification and HIPAA/GDPR compliance for telemedicine professionals and traveling nurses across borders."
        },
        professional: {
            title: "Professional Services",
            heading: "Onboard consultants worldwide without permanent establishment risk.",
            description: "Deploy audit, legal, or strategy consultants to client sites globally while maintaining full employment liability protection."
        }
    };

    return (
        <section className="section content-hub-section">
            <div className="container">
                <h2 className="section-title">Built for Your Industry</h2>

                <div className="tabs-wrapper">
                    <div className="tabs-list">
                        <button
                            className={`tab-btn ${activeTab === 'tech' ? 'active' : ''}`}
                            onClick={() => setActiveTab('tech')}
                        >
                            Technology
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'healthcare' ? 'active' : ''}`}
                            onClick={() => setActiveTab('healthcare')}
                        >
                            Healthcare
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'professional' ? 'active' : ''}`}
                            onClick={() => setActiveTab('professional')}
                        >
                            Professional Services
                        </button>
                    </div>

                    <div className="tab-content fade-in-up">
                        <h3 className="industry-heading">{content[activeTab].heading}</h3>
                        <p className="industry-desc">{content[activeTab].description}</p>
                        <button className="btn btn-text-link">Learn More →</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContentHub;
