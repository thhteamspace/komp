import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UseCase.css';
import { ChevronRight, Check } from 'lucide-react';

const UseCase = () => {
    // --- Hero State ---
    const [activePersona, setActivePersona] = useState('Startup');

    const renderPersonaVisual = () => {
        switch (activePersona) {
            case 'Startup': return <div className="uc-metric-card"><span className="uc-metric-value">48 Hours</span><span className="uc-metric-label">Avg. Time to Onboard</span></div>;
            case 'Finance': return <div className="uc-metric-card"><span className="uc-metric-value">1 Click</span><span className="uc-metric-label">Global Payroll Funding</span></div>;
            case 'Legal': return <div className="uc-metric-card"><span className="uc-metric-value">150+</span><span className="uc-metric-label">Jurisdictions Monitored</span></div>;
            default: return null;
        }
    };

    // --- Industry State ---
    const [activeIndustry, setActiveIndustry] = useState('SaaS & Tech');
    const industryData = {
        'SaaS & Tech': "We handle IP protection and ESOPs so your code and ownership stay secure in every jurisdiction.",
        'Fintech': "Meet strict financial security standards (SOC2/ISO) while hiring experts in any market.",
        'Healthcare': "Manage wellness experts and medical staff with a platform that understands global privacy (HIPAA/GDPR) requirements."
    };

    return (
        <div className="use-case-page">

            {/* HERO SECTION */}
            <section className="uc-hero">
                <div className="container">
                    <div className="uc-hero-content">
                        <span className="uc-eyebrow">Solutions</span>
                        <h1>Built for the way modern companies grow—without borders.</h1>
                        <p className="uc-hero-sub">
                            Scaling a business is hard enough without the nightmare of international labor laws.
                            KOMP provides the legal shield and financial engine to make global work actually work.
                        </p>

                        <div className="uc-hero-actions">
                            <button className="btn btn-primary">Talk to an Expert</button>
                            <button className="btn btn-secondary">View Platform</button>
                        </div>

                        <div className="uc-persona-switcher">
                            <div className="uc-persona-tabs">
                                {['Startup', 'Finance', 'Legal'].map(persona => (
                                    <div
                                        key={persona}
                                        className={`uc-persona-tab ${activePersona === persona ? 'active' : ''}`}
                                        onClick={() => setActivePersona(persona)}
                                    >
                                        {persona}
                                    </div>
                                ))}
                            </div>
                            <div className="uc-persona-content">
                                {renderPersonaVisual()}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SOLUTIONS BY SIZE */}
            <section className="section">
                <div className="container">
                    <div className="section-title">
                        <h2>A platform that scales with you.</h2>
                    </div>
                    <p className="section-subtitle">Built for where you are today, and where you’re going tomorrow.</p>

                    <div className="uc-feature-container" style={{ paddingTop: '60px' }}>

                        {/* Startups Deep Dive */}
                        <div className="uc-deep-dive-row">
                            <div className="uc-deep-dive-content">
                                <h3>Startups</h3>
                                <p>You don't have time for a 6-month legal setup. We give you instant access to 150+ countries so you can grab the best talent before your competitors do.</p>

                                <div className="uc-feature-grid">
                                    <div className="uc-sub-benefit">
                                        <div className="uc-sub-benefit-icon"><Check size={20} /></div>
                                        <h4>Instant Entity Access</h4>
                                        <p>Hire immediately without waiting for local entities.</p>
                                    </div>
                                    <div className="uc-sub-benefit">
                                        <div className="uc-sub-benefit-icon"><Check size={20} /></div>
                                        <h4>Compliant Contracts</h4>
                                        <p>Localized agreements for every jurisdiction.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="uc-deep-dive-visual">
                                {/* Simple Frame - Full Image */}
                                <img src="https://placehold.co/800x600/f8fafc/cbd5e1?text=Growth+Chart" alt="Fast Onboarding" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>

                        {/* Mid-Market Deep Dive (Reverse) */}
                        <div className="uc-deep-dive-row reverse">
                            <div className="uc-deep-dive-content">
                                <h3>Mid-Market</h3>
                                <p>As you grow, managing 5 different payroll tools is a recipe for errors. We bring your contractors and employees into one view, reducing overhead.</p>

                                <div className="uc-feature-grid">
                                    <div className="uc-sub-benefit">
                                        <div className="uc-sub-benefit-icon"><Check size={20} /></div>
                                        <h4>Consolidated View</h4>
                                        <p>One dashboard for all global team members.</p>
                                    </div>
                                    <div className="uc-sub-benefit">
                                        <div className="uc-sub-benefit-icon"><Check size={20} /></div>
                                        <h4>Automated Payments</h4>
                                        <p>Fund entire payroll with a single click.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="uc-deep-dive-visual">
                                {/* Simple Frame - Full Image */}
                                <img src="https://placehold.co/800x600/f8fafc/cbd5e1?text=Unified+Dashboard" alt="Unified Dashboard" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>

                        {/* Enterprise Deep Dive */}
                        <div className="uc-deep-dive-row">
                            <div className="uc-deep-dive-content">
                                <h3>Enterprise</h3>
                                <p>Large-scale expansion requires enterprise-grade security and deep integrations. We plug into your existing HRIS and Finance stacks (Workday, Netsuite).</p>

                                <div className="uc-feature-grid">
                                    <div className="uc-sub-benefit">
                                        <div className="uc-sub-benefit-icon"><Check size={20} /></div>
                                        <h4>Custom Integrations</h4>
                                        <p>Sync with Workday, Netsuite, and SAP.</p>
                                    </div>
                                    <div className="uc-sub-benefit">
                                        <div className="uc-sub-benefit-icon"><Check size={20} /></div>
                                        <h4>Dedicated Success</h4>
                                        <p>24/7 priority support and account management.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="uc-deep-dive-visual">
                                {/* Simple Frame - Full Image */}
                                <img src="https://placehold.co/800x600/f8fafc/cbd5e1?text=Enterprise+Security" alt="Enterprise Security" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SOLUTIONS BY TEAM (Relume Style) */}
            <section className="uc-feature-container" style={{ background: 'var(--white)' }}>
                <div className="container">
                    <div className="section-title" style={{ marginBottom: '100px' }}>
                        <h2>Every team wins.</h2>
                        <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
                            Empower your organization with tools built for their specific needs.
                        </p>
                    </div>

                    {/* HR Team Row (Standard L/R) */}
                    <div className="uc-feature-row">
                        <div className="uc-feature-content">
                            <h3>HR Teams</h3>
                            <p>Stop being the middleman for paperwork. Automate the boring stuff—contracts, background checks, and equipment shipping—so you can focus on culture and people.</p>

                            <div className="uc-subfeature-grid">
                                <div className="uc-subfeature">
                                    <h4><span className="uc-subfeature-icon"><Check size={14} /></span> Swift Onboarding</h4>
                                    <p>Generate locally compliant contracts in seconds.</p>
                                </div>
                                <div className="uc-subfeature">
                                    <h4><span className="uc-subfeature-icon"><Check size={14} /></span> Global Benefits</h4>
                                    <p>Enroll teams in top-tier local insurance plans.</p>
                                </div>
                            </div>
                        </div>
                        <div className="uc-feature-visual">
                            <div className="uc-window-header"><div className="uc-window-dot" /><div className="uc-window-dot" /><div className="uc-window-dot" /></div>
                            <div className="uc-window-content">
                                {/* Visual Placeholder */}
                                <img src="https://placehold.co/600x400/f8fafc/cbd5e1?text=HR+Dashboard" alt="HR Dashboard" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>

                    {/* Finance Team Row (Reverse R/L) */}
                    <div className="uc-feature-row reverse">
                        <div className="uc-feature-content">
                            <h3>Finance Teams</h3>
                            <p>Managing global payroll usually means death by a thousand spreadsheets. We fund your entire payroll in one click. We handle tax filings, social contributions, and FX risk.</p>

                            <div className="uc-subfeature-grid">
                                <div className="uc-subfeature">
                                    <h4><span className="uc-subfeature-icon"><Check size={14} /></span> 1-Click Payroll</h4>
                                    <p>Fund all currencies in a single monthly invoice.</p>
                                </div>
                                <div className="uc-subfeature">
                                    <h4><span className="uc-subfeature-icon"><Check size={14} /></span> Expense Mgmt</h4>
                                    <p>Approve and reimburse expenses in local currency.</p>
                                </div>
                            </div>
                        </div>
                        <div className="uc-feature-visual">
                            <div className="uc-window-header"><div className="uc-window-dot" /><div className="uc-window-dot" /><div className="uc-window-dot" /></div>
                            <div className="uc-window-content">
                                <img src="https://placehold.co/600x400/f8fafc/cbd5e1?text=Finance+Report" alt="Finance Report" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>

                    {/* Legal Team Row (Standard L/R) */}
                    <div className="uc-feature-row">
                        <div className="uc-feature-content">
                            <h3>Legal Teams</h3>
                            <p>Compliance is a moving target. Our AI-risk engine monitors labor law changes in 150+ countries. If a law changes in Brazil, our contracts update automatically.</p>

                            <div className="uc-subfeature-grid">
                                <div className="uc-subfeature">
                                    <h4><span className="uc-subfeature-icon"><Check size={14} /></span> IP Protection</h4>
                                    <p>Ironclad IP assignment in all jurisdictions.</p>
                                </div>
                                <div className="uc-subfeature">
                                    <h4><span className="uc-subfeature-icon"><Check size={14} /></span> Risk Engine</h4>
                                    <p>Real-time alerts on compliance changes.</p>
                                </div>
                            </div>
                        </div>
                        <div className="uc-feature-visual">
                            <div className="uc-window-header"><div className="uc-window-dot" /><div className="uc-window-dot" /><div className="uc-window-dot" /></div>
                            <div className="uc-window-content">
                                <img src="https://placehold.co/600x400/f8fafc/cbd5e1?text=Legal+Audit" alt="Legal Audit" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* SOLUTIONS BY INDUSTRY */}
            <section className="section">
                <div className="container">
                    <div className="section-title">
                        <h2>Industry-specific compliance.</h2>
                    </div>
                    <p className="section-subtitle">Specialize protection for high-stakes industries.</p>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="uc-industry-badges">
                            {Object.keys(industryData).map(ind => (
                                <div
                                    key={ind}
                                    className={`uc-badge ${activeIndustry === ind ? 'active' : ''}`}
                                    onClick={() => setActiveIndustry(ind)}
                                >
                                    {ind}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="uc-industry-detail">
                        <h3>{activeIndustry}</h3>
                        <p>{industryData[activeIndustry]}</p>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="uc-cta-section">
                <div className="container">
                    <h2>Don't let geography limit your ambition.</h2>
                    <p>You bring the vision; we’ll handle the 150+ countries, the local taxes, and the legal liability.</p>
                    <div className="uc-hero-actions" style={{ marginBottom: 0 }}>
                        <button className="btn btn-primary" style={{ boxShadow: 'none', background: 'white', color: 'var(--black)' }}>Talk to an Expert</button>
                        <button className="btn btn-outline">View the Platform</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UseCase;
