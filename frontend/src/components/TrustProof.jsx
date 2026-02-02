import React, { useState, useEffect } from 'react';
import { ShieldCheck, Lock, FileCheck, Globe, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import './TrustProof.css';

const TrustProof = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            quote: "KOMP saved us $40k in legal fees in our first month. It’s the only platform that actually feels safer than doing it ourselves.",
            author: "Sarah Jenkins",
            role: "CFO at TechFlow",
            avatar: "SJ",
            company: "TechFlow"
        },
        {
            id: 2,
            quote: "We scaled from 5 to 50 contractors in Europe without a single compliance headache. The direct infrastructure makes a massive difference.",
            author: "David Chen",
            role: "Head of People at Vertex",
            avatar: "DC",
            company: "Vertex"
        },
        {
            id: 3,
            quote: "Finally, an EOR that doesn't hide behind a Zendesk queue. Our dedicated account manager resolved our complex visa issue in 24 hours.",
            author: "Elena Rodriguez",
            role: "COO at SPRINT",
            avatar: "ER",
            company: "SPRINT"
        }
    ];

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Auto-advance
    useEffect(() => {
        const interval = setInterval(nextTestimonial, 8000);
        return () => clearInterval(interval);
    }, []);

    const badges = [
        { id: 1, label: "GDPR Compliant", icon: ShieldCheck },
        { id: 2, label: "SOC2 Type II", icon: Lock },
        { id: 3, label: "CCPA Ready", icon: FileCheck },
        { id: 4, label: "ISO 27001", icon: Globe }
    ];

    return (
        <section className="section trust-proof-section">
            <div className="container">
                <div className="trust-header">
                    <h2 className="section-title-dark">Global Growth, <span className="highlight-text">Guaranteed.</span></h2>
                    <p className="section-sub-dark">Trusted by high-growth teams who value speed and safety.</p>
                </div>

                <div className="testimonial-wrapper">
                    {/* Navigation Buttons */}
                    <button className="nav-btn prev" onClick={prevTestimonial} aria-label="Previous">
                        <ChevronLeft size={24} />
                    </button>

                    <div className="testimonial-slider">
                        <div className="testimonial-card key={activeIndex}">
                            <div className="stars">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#F59E0B" stroke="none" />)}
                            </div>
                            <blockquote>"{testimonials[activeIndex].quote}"</blockquote>
                            <div className="quote-author">
                                <div className="author-avatar">{testimonials[activeIndex].avatar}</div>
                                <div className="author-info">
                                    <cite>{testimonials[activeIndex].author}</cite>
                                    <span className="author-role">{testimonials[activeIndex].role}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="nav-btn next" onClick={nextTestimonial} aria-label="Next">
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Pagination Dots Removed */}


                <div className="trust-badges-grid">
                    {badges.map((badge) => (
                        <div key={badge.id} className="simple-badge">
                            <span className="badge-icon">
                                <badge.icon size={18} strokeWidth={2.5} />
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
