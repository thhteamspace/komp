import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import { ChevronRight, Check, X } from 'lucide-react';

const Services = () => {
    // Scroll Animation Logic
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    entry.target.classList.add('active'); // Add active for inner CSS animations
                }
            });
        }, { threshold: 0.2 });

        const hiddenElements = document.querySelectorAll('.svc-animate-on-scroll');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => hiddenElements.forEach((el) => observer.unobserve(el));
    }, []);

    return (
        <div className="services-page">

            {/* HERO SECTION - 3D Split Layout */}
            <section className="svc-hero">
                <div className="svc-hero-container">
                    {/* Left: Text Content */}
                    <div className="svc-hero-text svc-animate-on-scroll">
                        <span className="svc-eyebrow">Services</span>
                        <h1>A full global infrastructure for your business <span>ready in 48 hours.</span></h1>
                        <p className="svc-hero-sub">
                            Expanding internationally shouldn't feel like a legal battle. KOMP provides a single, unified platform that covers every stage of the employee lifecycle—from EOR to Payroll—without the "expansion headache."
                        </p>
                        <div className="svc-hero-actions">
                            <button className="btn btn-primary">Talk to an Expert</button>
                            <button className="btn btn-secondary">Product Tour</button>
                        </div>
                    </div>


                </div>
            </section>

            {/* EMPLOYER OF RECORD (EOR) - Option B */}
            <section className="svc-section">
                <div className="container">
                    <div className="svc-feature-row svc-animate-on-scroll">
                        <div className="svc-feature-content">
                            <span className="svc-eyebrow">Employer of Record</span>
                            <h2>Hire anywhere in 150+ countries with zero legal risk.</h2>
                            <p>
                                Opening a local office in a new country can cost $50,000 and take six months. With KOMP’s Employer of Record (EOR) service, you can hire in days instead of months. We assume all legal responsibility for your employees. That means we handle the local employment contracts, ensure you’re meeting mandatory benefit laws (like 13th-month pay or health insurance), and take care of all government filings. You get the talent you need; we take the risk.
                            </p>
                            <Link to="#" className="svc-feature-cta">Talk to an Expert <ChevronRight size={16} /></Link>
                        </div>
                        <div className="svc-visual-frame">
                            {/* CSS Visual: Entity Comparison Chart */}
                            <div className="svc-entity-table">
                                <h4 style={{ marginBottom: '1rem', textAlign: 'center' }}>Expansion Method</h4>
                                <div className="svc-et-row">
                                    <span>Setup Time</span>
                                    <span className="svc-et-val good"><Check size={16} /> 48 Hours</span>
                                </div>
                                <div className="svc-et-row">
                                    <span>Cost</span>
                                    <span className="svc-et-val good"><Check size={16} /> Low ($599/mo)</span>
                                </div>
                                <div className="svc-et-row">
                                    <span>Legal Entity</span>
                                    <span className="svc-et-val good"><Check size={16} /> Not Required</span>
                                </div>
                                <div className="svc-et-row" style={{ opacity: 0.5 }}>
                                    <span>Traditional</span>
                                    <span className="svc-et-val bad">6-12 Months</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AGENT OF RECORD (AOR) - Option B (Reverse) */}
            <section className="svc-section alt-bg">
                <div className="container">
                    <div className="svc-feature-row reverse svc-animate-on-scroll">
                        <div className="svc-feature-content">
                            <span className="svc-eyebrow">Agent of Record</span>
                            <h2>Onboard and pay global contractors with total confidence.</h2>
                            <p>
                                Many companies accidentally break local laws by treating contractors like full-time employees. This can lead to massive fines. Our Agent of Record (AOR) service protects you. We provide localized contracts that actually hold up in court, and our AI-powered "risk monitor" alerts you if a contractor’s working style might trigger a tax audit. One dashboard, one payment, zero legal anxiety.
                            </p>
                            <Link to="#" className="svc-feature-cta">Talk to an Expert <ChevronRight size={16} /></Link>
                        </div>
                        <div className="svc-visual-frame">
                            {/* CSS Visual: Contractor Compliance Score */}
                            <div className="svc-comp-score-card">
                                <div className="svc-score-circle">100%</div>
                                <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}><Check size={14} color="#10b981" /> Localized Contract</div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}><Check size={14} color="#10b981" /> Tax Docs Collected</div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}><Check size={14} color="#10b981" /> Misclassification Check</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* GLOBAL PAYROLL - Option B */}
            <section className="svc-section">
                <div className="container">
                    <div className="svc-feature-row svc-animate-on-scroll">
                        <div className="svc-feature-content">
                            <span className="svc-eyebrow">Global Payroll</span>
                            <h2>Error-free global payroll that grows with your team.</h2>
                            <p>
                                Global payroll is more than just sending money. It’s about calculating local social contributions, withholding the right taxes, and staying on top of changing rules. With KOMP, you send us one bulk payment in USD, EUR, or GBP. Our system automatically converts it and pays your team in their local currency. Plus, our compliance engine watches 150+ countries in real-time. If a local tax law changes, your payroll updates automatically. No spreadsheets, no manual math, no late fees.
                            </p>
                            <Link to="#" className="svc-feature-cta">Talk to an Expert <ChevronRight size={16} /></Link>
                        </div>
                        <div className="svc-visual-frame">
                            {/* CSS Visual: Animated Payout Progress */}
                            <div className="svc-payroll-card">
                                <div className="svc-progress-step">
                                    <div className="svc-step-label"><span>Funding (USD)</span><span>Complete</span></div>
                                    <div className="svc-progress-track"><div className="svc-progress-fill w-100"></div></div>
                                </div>
                                <div className="svc-progress-step">
                                    <div className="svc-step-label"><span>Conversion (FX)</span><span>Processing...</span></div>
                                    <div className="svc-progress-track"><div className="svc-progress-fill w-75"></div></div>
                                </div>
                                <div className="svc-progress-step">
                                    <div className="svc-step-label"><span>Local Payouts</span><span>Pending</span></div>
                                    <div className="svc-progress-track"><div className="svc-progress-fill w-40"></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HRIS & RELOCATION - Option B (Reverse) */}
            <section className="svc-section alt-bg">
                <div className="container">
                    <div className="svc-feature-row reverse svc-animate-on-scroll">
                        <div className="svc-feature-content">
                            <span className="svc-eyebrow">HRIS & Relocation</span>
                            <h2>Manage the entire employee lifecycle in one dashboard.</h2>
                            <p>
                                Most HR tools only work for one country. KOMP’s HRIS is built for a global team. From the moment you send an offer letter to the day an employee moves to a new country, we have you covered. Our platform handles everything from tracking vacation days across different time zones to managing visa applications and relocation logistics. It’s a first-class experience for your team, and a single source of truth for your HR department.
                            </p>
                            <Link to="#" className="svc-feature-cta">Talk to an Expert <ChevronRight size={16} /></Link>
                        </div>
                        <div className="svc-visual-frame">
                            {/* CSS Visual: Employee Profile Card */}
                            <div className="svc-profile-card">
                                <div className="svc-pro-avatar"></div>
                                <div style={{ textAlign: 'center' }}>
                                    <h4 style={{ margin: 0 }}>Alex Morgan</h4>
                                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#888' }}>Software Engineer • Berlin</p>
                                </div>
                                <div className="svc-pro-badge">Visa Sponsored</div>
                                <div style={{ width: '100%', height: '1px', background: '#f1f1f1', margin: '0.5rem 0' }}></div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', fontSize: '0.85rem' }}>
                                    <span style={{ color: '#888' }}>PTO Balance</span>
                                    <span style={{ fontWeight: '600' }}>12 Days</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA - Option B */}
            <section className="svc-cta-section">
                <div className="container">
                    <h2>Your global expansion starts here.</h2>
                    <p>
                        Don't let the technicalities of global hiring slow you down. Whether you need an EOR in India, a contractor in Brazil, or global payroll for a team of 100, we have the tools and the experts to make it happen. Join 1,200+ companies who trust KOMP to handle the details while they build the future.
                    </p>
                    <div className="svc-cta-actions">
                        <button className="svc-btn-white">Talk to an Expert</button>
                        <button className="svc-btn-outline-white">Take a Product Tour</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
