'use client';

import { motion } from 'framer-motion';
import { BookOpen, ShieldAlert, BadgeCheck, Activity, CheckCircle2 } from 'lucide-react';

const features = [
    {
        icon: <BookOpen className="w-6 h-6 text-brand-blue" />,
        title: "Local Labor Law Alignment",
        description: "Stay aligned with ever-changing regulations in 150+ countries."
    },
    {
        icon: <ShieldAlert className="w-6 h-6 text-brand-orange" />,
        title: "Misclassification Risk Reduction",
        description: "Identify and mitigate classification risks before they become liabilities."
    },
    {
        icon: <BadgeCheck className="w-6 h-6 text-green-500" />,
        title: "Expert-Backed Compliance Logic",
        description: "Built on a foundation of legal expertise, constantly updated."
    },
    {
        icon: <Activity className="w-6 h-6 text-purple-500" />,
        title: "Ongoing Monitoring",
        description: "Continuous surveillance of legislative changes with pro-active alerts."
    }
];

const stats = [
    { number: "150+", label: "Countries Covered" },
    { number: "99.9%", label: "Compliance Rate" },
    { number: "24/7", label: "Monitoring" }
];

export default function ComplianceFirstInfrastructure() {
    return (
        <section className="pt-40 pb-32 bg-slate-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
                {/* Centered heading - above everything */}
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-blue font-bold tracking-widest text-sm mb-4 block"
                    >
                        Built-In Safety
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-7xl md:text-[140px] font-black text-brand-black mb-6 leading-[0.85] tracking-tighter"
                    >
                        Compliance-First <span className="text-brand-orange">Infrastructure.</span>
                    </motion.h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                        Designed to minimize risk and simplify global complexity. We help you navigate the legal landscape.
                    </p>
                </div>

                {/* Split layout below */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Feature cards */}
                    <div className="space-y-4">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-start gap-4 p-5 rounded-2xl bg-white border-2 border-slate-100 hover:border-brand-blue/40 hover:shadow-lg transition-all group"
                            >
                                {/* Checkmark icon */}
                                <div className="shrink-0 w-6 h-6 rounded-full bg-brand-blue/10 group-hover:bg-brand-blue flex items-center justify-center transition-all mt-0.5">
                                    <CheckCircle2 className="w-4 h-4 text-brand-blue group-hover:text-white transition-colors" />
                                </div>

                                {/* Text content */}
                                <div className="flex-1">
                                    <h3 className="font-bold text-slate-900 mb-1.5 text-base group-hover:text-brand-blue transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: Visual Stats */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="rounded-[3rem] bg-gradient-to-br from-brand-blue to-blue-600 p-12 text-white relative overflow-hidden">
                            {/* Background pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-10 right-10 w-40 h-40 border-4 border-white rounded-full" />
                                <div className="absolute bottom-10 left-10 w-32 h-32 border-4 border-white rounded-full" />
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-8">
                                    <ShieldAlert className="w-8 h-8" />
                                    <h3 className="text-2xl font-bold">Compliance by Numbers</h3>
                                </div>

                                <div className="space-y-6">
                                    {stats.map((stat, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                            className="border-b border-white/20 pb-4 last:border-0"
                                        >
                                            <div className="text-5xl font-bold mb-2">{stat.number}</div>
                                            <div className="text-white/80 text-sm">{stat.label}</div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-8 pt-8 border-t border-white/20">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 mt-1 shrink-0" />
                                        <p className="text-sm text-white/90">
                                            Our platform adapts to local laws automatically, keeping you compliant across all jurisdictions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
