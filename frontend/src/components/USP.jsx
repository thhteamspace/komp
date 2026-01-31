import React, { useState } from 'react';
import './USP.css';

const USP = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            id: 'guardrails',
            title: 'AI-Powered Guardrails',
            highlight: 'AI Guardrails',
            description: "Our proprietary engine monitors 150+ labor laws in real-time, ensuring your workforce stays compliant automatically.",
            image: "https://placehold.co/800x800/f5f5f5/e0e0e0?text=Compliance+&+Risk+Dashboard",
        },
        {
            id: 'payroll',
            title: 'Single-Click Payroll',
            highlight: 'Global Payroll',
            description: "Fund once in USD/EUR; we distribute locally in 100+ currencies. Automated, accurate, and on-time, every time.",
            image: "https://placehold.co/800x800/f5f5f5/e0e0e0?text=Global+Payroll+Distribution",
        },
        {
            id: 'mobility',
            title: 'The Mobility Suite',
            highlight: 'Mobility Suite',
            description: "Visas, Relocation, and localized benefits managed in one window. Give your team the freedom to work from anywhere.",
            image: "https://placehold.co/800x800/f5f5f5/e0e0e0?text=Visas+&+Relocation+Tracker",
        }
    ];

    return (
        <section className="section usp-section">
            <div className="container">
                <div className="usp-header">
                    <span className="eyebrow">The Platform</span>
                    <h2 className="section-title">The Unified Operating System</h2>
                    <p className="section-subtitle">
                        Positioning your business for scale. KOMP acts as the central nervous system for your global people operations.
                    </p>
                </div>

                <div className="usp-layout-split">
                    {/* Left Column: Navigation & Text */}
                    <div className="usp-left-col">
                        <div className="usp-tabs-nav">
                            {tabs.map((tab, index) => (
                                <div
                                    key={tab.id}
                                    className={`usp-tab-title ${activeTab === index ? 'active' : ''}`}
                                    onClick={() => setActiveTab(index)}
                                >
                                    {tab.title}
                                </div>
                            ))}
                        </div>

                        <div className="usp-active-content">
                            <p className="usp-description">
                                {tabs[activeTab].description}
                            </p>
                            <button className="btn btn-primary usp-cta">
                                Explore Platform
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Visual */}
                    <div className="usp-right-col">
                        <div className="usp-image-container">
                            <img
                                key={activeTab}
                                src={tabs[activeTab].image}
                                alt={tabs[activeTab].title}
                                className="usp-placeholder-image fade-in-up"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default USP;
