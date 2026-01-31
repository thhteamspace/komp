import React from 'react';
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Brand Column */}
                    <div className="footer-brand-col">
                        <div className="footer-logo">KOMP</div>
                        <p className="footer-tagline">
                            The unified operating system for global employment.
                        </p>

                        <div className="footer-newsletter">
                            <p className="newsletter-label">Stay updated</p>
                            <div className="newsletter-form">
                                <input type="email" placeholder="Enter your email" aria-label="Email for newsletter" />
                                <button type="button" aria-label="Subscribe">→</button>
                            </div>
                        </div>
                    </div>

                    {/* Links Grid */}
                    {/* Links Grid */}
                    <div className="footer-links-grid">
                        <div className="footer-col">
                            <h4>Hire Globally</h4>
                            <a href="#">EOR India</a>
                            <a href="#">EOR Brazil</a>
                            <a href="#">EOR Philippines</a>
                            <a href="#">EOR Canada</a>
                            <a href="#">EOR UK</a>
                            <a href="#">See all 150+ Countries</a>
                        </div>

                        <div className="footer-col">
                            <h4>Comparisons</h4>
                            <a href="#">KOMP vs Deel</a>
                            <a href="#">KOMP vs Remote</a>
                            <a href="#">KOMP vs Oyster</a>
                            <a href="#">KOMP vs Papaya</a>
                            <a href="#">Why Switch?</a>
                        </div>

                        <div className="footer-col">
                            <h4>Resources</h4>
                            <a href="#">Global Payroll Guide</a>
                            <a href="#">Contractor vs Employee</a>
                            <a href="#">Compliance Library</a>
                            <a href="#">Salary Insights</a>
                            <a href="#">API Docs</a>
                        </div>

                        <div className="footer-col">
                            <h4>Company</h4>
                            <a href="#">About Us</a>
                            <a href="#">Careers</a>
                            <a href="#">Press</a>
                            <a href="#">Trust Center</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-socials">
                        <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                        <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                        <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                    </div>

                    <div className="footer-legal">
                        <span>© 2026 KOMP Global Inc.</span>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookie Settings</a>
                    </div>
                </div>

                {/* Giant Watermark */}
                <div className="footer-watermark">KOMP</div>
            </div>
        </footer>
    );
};

export default Footer;
