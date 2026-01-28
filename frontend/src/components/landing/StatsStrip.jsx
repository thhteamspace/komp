import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { label: "Countries Supported", value: "150+" },
    { label: "Payroll Accuracy", value: "99.9%" },
    { label: "IP Protection", value: "100%" },
    { label: "Client Retention", value: "98%" },
];

const StatsStrip = () => {
    return (
        <div className="w-full bg-white border-b border-black py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center group cursor-default"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-transparent text-stroke-black mb-2 font-sans group-hover:text-black transition-colors duration-300">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-500 font-mono tracking-wider uppercase">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StatsStrip;
