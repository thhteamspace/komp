import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, CreditCard, ArrowRight } from 'lucide-react';

const services = [
    {
        icon: Globe,
        title: "Global EOR",
        tagline: "Risk Mitigation & Speed",
        description: "Hire employees in 150+ countries without setting up a local entity. We handle payroll, benefits, and compliance.",
    },
    {
        icon: Users,
        title: "Contractor Management",
        tagline: "Avoid Misclassification",
        description: "Onboard, manage, and pay international contractors in minutes with automated compliance and localized contracts.",
    },
    {
        icon: CreditCard,
        title: "Global Payroll",
        tagline: "One Invoice, One Currency",
        description: "Consolidate your entire global workforce payroll into a single dashboard. Pay everyone on time, every time.",
    },
];

const ServiceGrid = () => {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
                        Components<span className="text-gray-400">.</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto font-mono text-sm">
             // Select a module to begin integration
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-0 border-t border-l border-black">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-10 border-r border-b border-black hover:bg-gray-50 transition-all duration-300"
                        >
                            <div className="w-12 h-12 border border-black flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                <service.icon size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-2">{service.title}</h3>
                            <p className="text-black text-xs font-mono uppercase tracking-wider mb-4 border-l-2 border-black pl-3">
                                {service.tagline}
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8 text-sm">
                                {service.description}
                            </p>

                            <a href="#" className="inline-flex items-center text-black font-bold text-sm hover:underline underline-offset-4">
                                View Details <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceGrid;
