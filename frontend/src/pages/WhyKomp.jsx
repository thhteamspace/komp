import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './WhyKomp.css';
import { MessageSquare, Clock, CheckCircle, XCircle, User, ArrowRight, Globe, Zap, Hexagon } from 'lucide-react';

const WhyKomp = () => {
    // Scroll Animation Logic
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-active');
                }
            });
        }, { threshold: 0.3 });

        const targets = document.querySelectorAll('.wk-flow-row');
        targets.forEach(t => observer.observe(t));

        return () => targets.forEach(t => observer.unobserve(t));
    }, []);

    return (
        <div className="why-komp-page">
            {/* Split Screen Hero (SoFi Layout) */}
            <section className="wk-hero">
                <div className="wk-hero-container">

                    {/* LEFT COLUMN: Text & CTAs */}
                    <div className="wk-hero-left">
                        <h1>Why modern companies are <span className="highlight">moving</span> to KOMP.</h1>

                        <p className="wk-hero-sub">
                            The first generation of global hiring tools made it possible to hire anywhere but brought hidden fees and bot-based support. KOMP pairs 150-country infrastructure with dedicated human experts.
                        </p>

                        <div className="wk-hero-actions">
                            <button className="btn-pill-black">
                                Price Comparison <ArrowRight size={18} className="arr" />
                                <span className="price-tag">$0 Hidden Fees</span>
                            </button>
                            <Link to="#" className="btn-minimal">Book a Demo</Link>
                        </div>

                        <div className="wk-client-logos">
                            <div className="wk-logo-group"><Globe size={20} /> TechFlow</div>
                            <div className="wk-logo-group"><Zap size={20} /> SPRINT</div>
                            <div className="wk-logo-group"><Hexagon size={20} /> Vertex</div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Collage Visual */}
                    <div className="wk-hero-right">
                        {/* E2: Top Right (Old Way Snippet) */}
                        <div className="wk-collage-card col-snippet">
                            <div className="snip-label">Support Wait Time</div>
                            <div className="snip-val">72h+</div>
                            <div className="snip-bar"></div>
                            <div style={{ fontSize: '0.65rem', color: '#94a3b8', marginTop: '0.5rem' }}>Traditional EOR avg.</div>
                        </div>

                        {/* E1: Bottom Right (Portrait) */}
                        <div className="wk-collage-card col-portrait">
                            <img src="/images/komp-hero-portrait.png" alt="Dedicated Consultant" />
                        </div>

                        {/* E3: Center Feature (KOMP Feature) */}
                        <div className="wk-collage-card col-feature">
                            <div className="circle-badge"><CheckCircle size={24} /></div>
                            <div className="feat-stat">100%</div>
                            <div className="feat-label">Compliance<br />Accuracy</div>
                            <div className="feat-meta">
                                <span>Risk-free</span>
                                <span>Verified</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Comparison Section (Transparency Table) */}
            <section className="wk-comparison">
                <div className="wk-section-container">
                    <div className="wk-comp-header">
                        <h2>We don't hide our fees or our people.</h2>
                        <p>
                            When you look at the "Big Two" in the industry, the features look similar. But the experience is different. Many providers act as "Aggregators," meaning they just pass your data to a third-party partner in another country. This creates a "Telephone Game" that slows down your hiring and creates legal risks. KOMP focuses on direct control. We disclose exactly what you are paying for—from the local taxes to the currency exchange. We believe that global hiring is too important to be left to a bot.
                        </p>
                    </div>

                    <div className="transparency-table-container">
                        <div className="transparency-table">
                            {/* Header Row */}
                            <div className="table-row header">
                                <div className="col feature">Core Differences</div>
                                <div className="col others">Aggregators ("The Big Two")</div>
                                <div className="col komp">
                                    <span className="brand-badge"><Hexagon size={16} fill="currentColor" /> KOMP</span>
                                </div>
                            </div>

                            {/* Row 1: Exchange Rate Markup (Highlight) */}
                            <div className="table-row highlight-row">
                                <div className="col feature">
                                    <div className="icon-box"><Zap size={20} /></div>
                                    <span>Exchange Rate Markup</span>
                                </div>
                                <div className="col others">
                                    <span className="negative-val">2.0% - 4.0%</span>
                                    <span className="sub-val">Hidden Spread</span>
                                </div>
                                <div className="col komp">
                                    <span className="positive-val">0.0%</span>
                                    <span className="sub-val">Real Mid-Market Rate</span>
                                    <CheckCircle className="check-icon" size={24} />
                                </div>
                            </div>

                            {/* Row 2: Hidden Fees */}
                            <div className="table-row">
                                <div className="col feature">
                                    <div className="icon-box"><XCircle size={20} /></div>
                                    <span>Hidden Fees</span>
                                </div>
                                <div className="col others">
                                    <span className="val">Common</span>
                                    <span className="sub-val">Setup, Exit, & FX fees</span>
                                </div>
                                <div className="col komp">
                                    <span className="val">$0</span>
                                    <span className="sub-val">Flat Monthly Rate Only</span>
                                    <CheckCircle className="check-icon small" size={18} />
                                </div>
                            </div>

                            {/* Row 3: Support Model */}
                            <div className="table-row">
                                <div className="col feature">
                                    <div className="icon-box"><User size={20} /></div>
                                    <span>Support Model</span>
                                </div>
                                <div className="col others">
                                    <span className="val">Chatbot Queue</span>
                                    <span className="sub-val">Ticketing System</span>
                                </div>
                                <div className="col komp">
                                    <span className="val">Direct Human</span>
                                    <span className="sub-val">Dedicated Slack Channel</span>
                                    <CheckCircle className="check-icon small" size={18} />
                                </div>
                            </div>

                            {/* Row 4: Infrastructure */}
                            <div className="table-row">
                                <div className="col feature">
                                    <div className="icon-box"><Globe size={20} /></div>
                                    <span>Infrastructure</span>
                                </div>
                                <div className="col others">
                                    <span className="val">3rd Party Partners</span>
                                    <span className="sub-val">Zero Control</span>
                                </div>
                                <div className="col komp">
                                    <span className="val">100% Owned</span>
                                    <span className="sub-val">Full Legal Liability</span>
                                    <CheckCircle className="check-icon small" size={18} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Direct Control vs Aggregator */}
            <section className="wk-direct-control">
                <div className="wk-section-container">
                    <div className="wk-comp-header">
                        <h2>Why "Direct Control" matters for your legal safety.</h2>
                        <p>
                            When a provider uses an "Aggregator" model, they are just a middleman. If your employee in France has a problem, your provider has to call a local partner, who then calls a local lawyer. This "Aggregator Latency" is why payroll gets delayed and questions go unanswered.
                        </p>
                    </div>

                    <div className="wk-flowchart-wrapper">
                        {/* Flow 1: The Aggregator Way */}
                        <div className="wk-flow-row aggregator">
                            <div className="flow-label">Legacy Aggregator Model</div>
                            <div className="flow-track">
                                <div className="flow-node user delay-1"><User size={20} /> You</div>
                                <div className="flow-arrow long delay-2"></div>
                                <div className="flow-node middle delay-3">Aggregator</div>
                                <div className="flow-arrow delay-4"></div>
                                <div className="flow-node middle delay-5">Local Partner</div>
                                <div className="flow-arrow delay-6"></div>
                                <div className="flow-node middle delay-7">3rd Party Lawyer</div>
                                <div className="flow-arrow delay-8"></div>
                                <div className="flow-node employee delay-9"><Globe size={20} /> Employee</div>
                            </div>
                            <div className="flow-meta bad delay-10">
                                <XCircle size={16} /> High Latency & Risk
                            </div>
                        </div>

                        {/* Flow 2: The KOMP Way */}
                        <div className="wk-flow-row komp">
                            <div className="flow-label">The KOMP Direct Model</div>
                            <div className="flow-track">
                                <div className="flow-node user delay-1"><User size={20} /> You</div>
                                <div className="flow-arrow direct delay-2"></div>
                                <div className="flow-node komp-node delay-3"><Hexagon size={20} /> KOMP Entity</div>
                                <div className="flow-arrow direct delay-4"></div>
                                <div className="flow-node employee delay-5"><Globe size={20} /> Employee</div>
                            </div>
                            <div className="flow-meta good delay-6">
                                <CheckCircle size={16} /> Instant Support
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyKomp;
