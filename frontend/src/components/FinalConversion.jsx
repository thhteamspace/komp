import React from 'react';
import './FinalConversion.css';

const FinalConversion = () => {
    return (
        <section className="section final-conversion-section">
            <div className="container">
                <div className="conversion-content">
                    <h2 className="section-title">Your Global Workforce is Waiting.</h2>
                    <p className="section-subtitle">Don't Let Compliance Hold You Back.</p>

                    <form className="email-capture-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Work Email" className="email-input" required />
                        <button type="submit" className="btn btn-primary">Get Quote</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default FinalConversion;
