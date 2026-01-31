import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
    const steps = [
        {
            number: "1",
            title: "Identify Talent",
            description: "Find your hire or let us source them via automated sourcing tools."
        },
        {
            number: "2",
            title: "Generate Localized Contracts",
            description: "Legally-vetted agreements in 2 minutes. Localized for 150+ countries."
        },
        {
            number: "3",
            title: "Approve & Automate",
            description: "One monthly invoice; we handle taxes, benefits, and local filings."
        }
    ];

    return (
        <section className="section how-it-works-section">
            <div className="container">
                <div className="hiw-header-mobile">
                    <h2 className="section-title">The 3-Step Global Launch</h2>
                </div>

                <div className="hiw-layout-split">
                    <div className="hiw-left-col">
                        <h2 className="section-title hiw-header-desktop">The 3-Step Global Launch</h2>

                        <div className="hiw-steps-list">
                            {steps.map((step, index) => (
                                <div key={index} className="hiw-step-item">
                                    <div className="hiw-step-number-col">
                                        <span className="hiw-number">{step.number}</span>
                                        {index !== steps.length - 1 && <div className="hiw-line"></div>}
                                    </div>
                                    <div className="hiw-step-content">
                                        <h3>{step.title}</h3>
                                        <p>{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="btn btn-primary hiw-cta">Get Started</button>
                    </div>

                    <div className="hiw-right-col">
                        <div className="hiw-image-container">
                            <img
                                src="https://placehold.co/600x600/ffffff/e0e0e0?text=Worker+Onboarding+UI"
                                alt="Global Hiring Platform"
                                className="hiw-visual"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
