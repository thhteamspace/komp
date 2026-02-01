import React from 'react';
import './TickerSlab.css';

const TickerSlab = () => {
    const row1 = [
        "150+ Countries Covered",
        "100k+ Workers Paid",
        "23+ Years of Compliance Experience",
        "21+ Global Payroll Programs"
    ];

    const row2 = [
        "35+ Active Markets",
        "2,700+ Payroll Specialists",
        "8 Global Ops Hubs",
        "Enterprise-Grade Security & Controls",
        "Trusted by over 150+ enterprises"
    ];

    // Helper to bold the starting number if present
    const formatItem = (text) => {
        // Regex to check if string starts with a number (including currency, plus, k, etc)
        // Matches "150+", "100k+", "23+", "$500M" etc at the start
        const match = text.match(/^([\d.,]+[kKmM\+]?)\s+(.*)/);

        if (match) {
            return (
                <>
                    <strong>{match[1]}</strong> {match[2]}
                </>
            );
        }

        // Special case for "Trusted by over 150+ enterprises" -> highlight 150+ 
        if (text.includes("150+ enterprises")) {
            const parts = text.split("150+");
            return <>{parts[0]}<strong>150+</strong>{parts[1]}</>;
        }

        return text;
    };

    // Duplicate arrays to create seamless loop
    const renderRow = (items) => (
        <div className="ticker-track">
            {/* 3 sets to ensure smooth infinite scroll on large screens */}
            {[...items, ...items, ...items].map((item, index) => (
                <div key={`${index}`} className="ticker-item">
                    {/* Optional: Add a small check icon or similar if desired, for now just text */}
                    {formatItem(item)}
                </div>
            ))}
        </div>
    );

    return (
        <section className="ticker-slab">
            <div className="ticker-row">
                {renderRow(row1)}
            </div>
            <div className="ticker-row">
                {renderRow(row2)}
            </div>
        </section>
    );
};

export default TickerSlab;
