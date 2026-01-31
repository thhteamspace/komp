import React from 'react';
import './KnowledgeCenter.css';

const KnowledgeCenter = () => {
    return (
        <section className="section knowledge-center-section">
            <div className="container">
                <h2 className="section-title">Master International Expansion.</h2>
                <p className="section-subtitle">Expert guides to navigate the complexities of global hiring.</p>

                <div className="resource-grid">
                    <div className="resource-card">
                        <div className="resource-category">Guide</div>
                        <h3>2026 Global Payroll Guide</h3>
                        <p>Avoiding the 5 Most Common Tax Traps when hiring internationally.</p>
                        <a href="#" className="read-more">Read Guide →</a>
                    </div>

                    <div className="resource-card">
                        <div className="resource-category">Checklist</div>
                        <h3>The Contractor vs. Employee Checklist</h3>
                        <p>Essential checklist for CEOs to prevent misclassification risks.</p>
                        <a href="#" className="read-more">Download Checklist →</a>
                    </div>

                    <div className="resource-card">
                        <div className="resource-category">Template</div>
                        <h3>Global Offer Letter Template</h3>
                        <p>Standardized compliant offer letters for 150+ jurisdictions.</p>
                        <a href="#" className="read-more">Download Template →</a>
                    </div>
                </div>

                <div className="center-cta">
                    <button className="btn btn-secondary">Get the Global Expansion Playbook</button>
                </div>
            </div>
        </section>
    );
};

export default KnowledgeCenter;
