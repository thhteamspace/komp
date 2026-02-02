import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <div className="navbar-logo">
                    <Link to="/">KOMP</Link>
                </div>

                <div className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <Link to="/why-komp">Why KOMP</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/use-cases">Use Cases</Link>
                    <a href="#compliance">Compliance</a>
                    <a href="#resources">Resources</a>
                </div>

                <div className="navbar-actions">
                    <a href="#login" className="login-link">Log in</a>
                    <button className="btn btn-primary">Talk to a compliance expert</button>
                </div>

                <div className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
