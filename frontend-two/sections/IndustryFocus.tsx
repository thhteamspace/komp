'use client';

import { motion } from 'framer-motion';
import { Laptop, Factory, Users } from 'lucide-react';

const steps = [
    {
        icon: Laptop,
        title: "Tech Companies",
        desc: "Secure IP protection clauses, ESOP-compliant contracts, and rapid developer onboarding."
    },
    {
        icon: Factory,
        title: "Manufacturing",
        desc: "Scale plant operations with regulatory-grade safety compliance and union alignment."
    },
    {
        icon: Users,
        title: "Recruitment",
        desc: "Place candidates with bulletproof permanent establishment risk safeguards."
    }
];

const IndustryFocus = () => {
    return (
        <section className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="flex flex-col items-center group cursor-pointer"
                        >
                            <div className="w-16 h-16 text-brand-orange mb-6 transform transition-transform group-hover:scale-110">
                                <step.icon size={56} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-slate-500 max-w-xs leading-relaxed">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustryFocus;
