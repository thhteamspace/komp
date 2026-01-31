import React from 'react';
import { ShieldCheck, Lock, FileCheck, Globe } from 'lucide-react';
import './TrustProof.css';

const TrustProof = () => {
    const badges = [
        { id: 1, label: "GDPR Compliant", icon: ShieldCheck },
        { id: 2, label: "SOC2 Type II", icon: Lock },
        { id: 3, label: "CCPA Ready", icon: FileCheck },
        { id: 4, label: "ISO 27001", icon: Globe }
    ];

    return (
        <section className="section trust-proof-section">
            <div className="container">
                <h2 className="section-title">Global Growth, Guaranteed.</h2>

                <div className="testimonial-card">
                    <blockquote>"KOMP saved us $40k in legal fees in our first month of expansion."</blockquote>
                    <div className="quote-author">
                        <cite>— Sarah Jenkins, CFO at TechFlow</cite>
                    </div>
                </div>

                <div className="trust-badges-grid">
                    {badges.map((badge) => (
                        <div key={badge.id} className="simple-badge">
                            <span className="badge-icon">
                                <badge.icon size={20} strokeWidth={2.5} />
                            </span>
                            <span className="badge-text">{badge.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default TrustProof;
