import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-main-layout">
                    <div className="hero-content">
                        <span className="eyebrow">The Infrastructure for Global Ambition.</span>
                        <h1>Hire Anyone, Anywhere, Without the Legal Complexity.</h1>

                        <div className="hero-cta-group">
                            <button className="btn btn-primary">Calculate Your Global Hiring Costs</button>
                            <button className="btn btn-secondary">See the Platform</button>
                        </div>
                    </div>

                    <div className="hero-media">
                        <div className="video-placeholder">
                            <div className="play-button"></div>
                        </div>
                    </div>
                </div>

                <div className="hero-bottom-row">
                    <div className="hero-description-col">
                        <p className="hero-subheadline">
                            De-risk your global expansion. KOMP automates international hiring, compliant payroll, and localized benefits in 150+ countries—so you can focus on scale, not bureaucracy.
                        </p>
                    </div>

                    <div className="hero-stats-col">
                        <div className="stat-item">
                            <span className="stat-value">1,200+</span>
                            <span className="stat-label">Global Entities</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-value">100%</span>
                            <span className="stat-label">Compliance</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-value">150+</span>
                            <span className="stat-label">Countries</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
