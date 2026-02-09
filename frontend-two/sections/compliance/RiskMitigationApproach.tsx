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
        <section className="py-32 bg-slate-50 relative overflow-hidden text-brand-black">
            {/* Decorative Background details */}
            <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-1/4 right-10 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-blue font-bold tracking-widest text-sm mb-4 block"
                    >
                        Proactive Strategy
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="font-black text-brand-black mb-6 tracking-tighter"
                        style={{ fontSize: 'clamp(48px, 7vw, 80px)', lineHeight: '1.1' }}
                    >
                        Risk <span className="text-brand-orange">Mitigation.</span>
                    </motion.h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
                        Don&apos;t wait for a compliance crisis. Our proactive approach systematically prevents issues before they arise across every jurisdiction.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto relative group">
                    <div className="hidden md:block absolute top-1/2 left-10 right-10 h-1 bg-slate-200 -z-10 -translate-y-1/2 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ x: "-100%" }}
                            whileInView={{ x: "0%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="w-full h-full bg-gradient-to-r from-brand-blue to-brand-orange"
                        />
                    </div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white p-10 rounded-[2.5rem] shadow-sm border-2 border-slate-100 w-full md:w-1/3 text-center flex flex-col items-center hover:shadow-2xl hover:border-brand-blue/20 transition-all duration-500 group/card"
                        >
                            <div className="w-20 h-20 rounded-[1.5rem] bg-slate-50 flex items-center justify-center mb-8 shadow-inner group-hover/card:scale-110 group-hover/card:bg-white transition-all duration-300 border border-slate-100">
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover/card:text-brand-blue transition-colors leading-tight">{step.title}</h3>
                            <p className="text-slate-600 font-medium leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
