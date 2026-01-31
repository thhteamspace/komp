import React from 'react';
import './Differentiation.css';

const Differentiation = () => {
    return (
        <section className="section diff-section">
            <div className="container">
                <div className="diff-header">
                    <h2 className="section-title">Why Modern Leaders are Moving to KOMP.</h2>
                    <p className="section-subtitle">We don't just provide software; we provide the legal shield your CFO demands.</p>
                </div>

                <div className="diff-comparison-grid">
                    {/* Traditional Card */}
                    <div className="diff-card traditional">
                        <h3 className="diff-card-title">Traditional EOR</h3>
                        <p className="diff-card-desc">The standard, slow, and opaque way.</p>

                        <ul className="diff-feature-list">
                            <li className="diff-item muted">
                                <span className="diff-icon">✕</span>
                                <div className="diff-text">
                                    <strong>Slow Onboarding</strong>
                                    <span>Takes weeks to set up entities</span>
                                </div>
                            </li>
                            <li className="diff-item muted">
                                <span className="diff-icon">✕</span>
                                <div className="diff-text">
                                    <strong>Hidden FX Fees</strong>
                                    <span>Unpredictable costs every month</span>
                                </div>
                            </li>
                            <li className="diff-item muted">
                                <span className="diff-icon">✕</span>
                                <div className="diff-text">
                                    <strong>Bot-based Support</strong>
                                    <span>No direct compliance line</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* KOMP Card */}
                    <div className="diff-card komp-advantage">
                        <div className="diff-badge">The Advantage</div>
                        <h3 className="diff-card-title">KOMP Global</h3>
                        <p className="diff-card-desc">The modern operating system for scale.</p>

                        <ul className="diff-feature-list">
                            <li className="diff-item active">
                                <span className="diff-icon">✓</span>
                                <div className="diff-text">
                                    <strong>Instant Onboarding</strong>
                                    <span>Deploy contracts in 48 hours</span>
                                </div>
                            </li>
                            <li className="diff-item active">
                                <span className="diff-icon">✓</span>
                                <div className="diff-text">
                                    <strong>Mid-Market Pricing</strong>
                                    <span>Transparent, flat-fee structure</span>
                                </div>
                            </li>
                            <li className="diff-item active">
                                <span className="diff-icon">✓</span>
                                <div className="diff-text">
                                    <strong>24/7 Human Experts</strong>
                                    <span>Dedicated compliance officers</span>
                                </div>
                            </li>
                        </ul>

                        <div className="diff-cta-wrapper">
                            <button className="btn btn-white">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Differentiation;
