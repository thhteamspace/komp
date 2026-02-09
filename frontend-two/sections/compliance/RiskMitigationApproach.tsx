'use client';

import { motion } from 'framer-motion';
import { UserCheck, ListChecks, ShieldAlert } from 'lucide-react';
import Card from '@/components/Card';

const steps = [
    {
        icon: <UserCheck className="w-8 h-8 text-brand-blue" />,
        title: "Expert-Led Review",
        description: "Our in-house legal experts review your expansion plans."
    },
    {
        icon: <ListChecks className="w-8 h-8 text-green-500" />,
        title: "Structured Processes",
        description: "Standardized workflows that account for every local requirement."
    },
    {
        icon: <ShieldAlert className="w-8 h-8 text-brand-orange" />,
        title: "Reduced Exposure",
        description: "Systematically minimize the risk of audits and penalties."
    }
];

export default function RiskMitigationApproach() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-black text-brand-black mb-6"
                    >
                        Proactive Risk Mitigation
                    </motion.h2>
                    <p className="text-lg text-slate-600">
                        Don't wait for a problem. Our approach prevents issues before they arise.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto relative">
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10 -translate-y-1/2" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 w-full md:w-1/3 text-center flex flex-col items-center hover:shadow-lg transition-shadow"
                        >
                            <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-6 shadow-inner">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
