import React from 'react';
import './Problems.css';

const Problems = () => {
    const problems = [
        {
            title: "Compliance Drag",
            description: "Average fines for contractor misclassification exceed $100k per hire. We stop them before they happen."
        },
        {
            title: "The Entity Trap",
            description: "Don't wait 6 months for a local legal setup. Go live in 48 hours."
        },
        {
            title: "The Retention Gap",
            description: "Global talent leaves when payroll is late. Our 99% accuracy rate ensures your team stays focused."
        }
    ];

    return (
        <section className="section problems-section">
            <div className="container">
                <h2 className="section-title">The High Cost of Fragmented Global Hiring.</h2>
                <div className="problems-grid">
                    {problems.map((problem, index) => (
                        <div key={index} className="problem-card">
                            <h3>{problem.title}</h3>
                            <p>{problem.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Problems;
