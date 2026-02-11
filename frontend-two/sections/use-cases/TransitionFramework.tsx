'use client';

import { motion } from 'framer-motion';
import { Rocket, ShieldCheck, BarChart3, ChevronRight } from 'lucide-react';

const steps = [
    {
        title: "Market Entry",
        icon: <Rocket className="w-10 h-10 text-brand-orange" />,
        bullets: [
            "New hires onboarded in multiple countries within days",
            "No incorporation, banking setup, or local advisory dependency"
        ]
    },
    {
        title: "Compliance Management",
        icon: <ShieldCheck className="w-10 h-10 text-brand-orange" />,
        bullets: [
            "Jurisdiction-specific contracts issued and maintained",
            "Ongoing monitoring of labor and tax obligations",
            "Liability transferred away from the client organization"
        ]
    },
    {
        title: "Payroll & Reporting",
        icon: <BarChart3 className="w-10 h-10 text-brand-orange" />,
        bullets: [
            "One consolidated payroll workflow across regions",
            "Single funding event with compliant local payouts",
            "Real-time visibility into global workforce costs"
        ]
    }
];

const TransitionFramework = () => {
    return (
        <section className="py-32 bg-[#fcfcfc] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading with Brand-Image Style Highlight */}
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter"
                    >
                        How the Transition Was <span className="relative inline-block px-1">
                            <span className="relative z-10">Implemented</span>
                            <div className="absolute -bottom-1 left-0 w-full h-5 bg-brand-orange/20 -z-0 rounded-sm blur-[1px]" />
                            <div className="absolute inset-x-[-15px] inset-y-[-5px] bg-brand-orange/5 blur-xl -z-10 rounded-full" />
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-500 max-w-3xl mx-auto font-medium"
                    >
                        A seamless, three-step execution framework enabled by the KOMP global platform.
                    </motion.p>
                </div>

                {/* Cards Grid */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-0 max-w-7xl mx-auto lg:px-6">
                    {steps.map((step, i) => (
                        <div key={i} className="flex items-center w-full lg:w-1/3 relative">
                            {/* THE CARD */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="flex-1 bg-white rounded-[2.5rem] py-12 px-6 lg:py-14 lg:px-8 border-[2px] border-brand-orange shadow-[0_45px_100px_-20px_rgba(255,140,26,0.3)] flex flex-col items-start relative h-[600px] mx-3"
                            >
                                {/* ICON CONTAINER - Centered within the card */}
                                <div className="mb-12 relative flex justify-center w-full">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-orange opacity-20 blur-3xl w-24 h-24 rounded-full" />
                                    <div className="relative w-28 h-28 bg-white rounded-full shadow-[0_15px_35px_rgba(0,0,0,0.08)] flex items-center justify-center border border-slate-50 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-transparent opacity-50" />
                                        <div className="transform transition-transform duration-500 group-hover:scale-110">
                                            {step.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* TEXT CONTENT BOX - Left Aligned to card start */}
                                <div className="w-full text-left">
                                    <h3 className="text-2xl lg:text-[1.75rem] font-black text-slate-900 mb-10 tracking-tight leading-tight">
                                        {step.title}
                                    </h3>

                                    <div className="space-y-6 w-full">
                                        {step.bullets.map((bullet, j) => (
                                            <div key={j} className="flex gap-4 items-start group/item">
                                                {/* Minimal Orange Dot with pulse-glow */}
                                                <div className="w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 relative">
                                                    <div className="w-2.5 h-2.5 bg-brand-orange rounded-full shadow-[0_0_12px_rgba(255,140,26,0.8)] z-10" />
                                                    <div className="absolute inset-0 bg-brand-orange/20 rounded-full animate-pulse blur-[2px]" />
                                                </div>
                                                <p className="text-[15.5px] text-slate-600 leading-[1.6] font-bold tracking-tight">
                                                    {bullet}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* INNER TOP SHADOW/GLOW */}
                                <div className="absolute inset-0 rounded-[2.3rem] shadow-[inset_0_20px_40px_rgba(255,140,26,0.04)] pointer-events-none" />
                            </motion.div>

                            {/* STANDALONE ARROW (Orange Color) */}
                            {i < steps.length - 1 && (
                                <div className="hidden lg:flex items-center justify-center absolute right-[-15px] top-1/2 -translate-y-1/2 z-30">
                                    <ChevronRight className="w-8 h-8 text-brand-orange stroke-[4px]" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TransitionFramework;
