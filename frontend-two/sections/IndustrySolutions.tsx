'use client';

import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, HeartPulse, GraduationCap, Code2, Lock, FileLineChart as FileChart, BadgeCheck } from 'lucide-react';

const industries = [
    {
        name: 'SaaS & Tech',
        icon: <Cpu className="w-10 h-10" />,
        features: ['IP Protection', 'ESOP Handling', 'Global Engineers', 'Code & Equity Protection'],
        highlight: 'IP protection included',
        metric: '99% Audit Pass Rate',
        color: 'bg-black'
    },
    {
        name: 'Fintech',
        icon: <ShieldCheck className="w-10 h-10" />,
        features: ['SOC2 / ISO Standards', 'Financial Security', 'Audit Readiness', 'Sensitive Data Protection'],
        highlight: 'Zero Compliance Breaches',
        metric: '100% Secure Flow',
        color: 'bg-black'
    },
    {
        name: 'Healthcare',
        icon: <HeartPulse className="w-10 h-10" />,
        features: ['Medical Staff Hiring', 'Privacy Laws', 'Data Protection', 'Regulatory Compliance'],
        highlight: 'HIPAA Ready Infrastructure',
        metric: 'Global Health Standards',
        color: 'bg-rose-600'
    }
];

const IndustrySolutions = () => {
    return (
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="w-full max-w-7xl mx-auto relative z-10 px-6">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 mb-6"
                    >
                        <BadgeCheck size={14} className="text-slate-600" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Specialized Infrastructure</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-brand-black mb-6"
                    >
                        Expert compliance for <br />
                        high-stakes industries.
                    </motion.h2>
                </div>

                {/* Industry Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {industries.map((ind, idx) => (
                        <motion.div
                            key={ind.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: false }}
                            className="group relative flex flex-col bg-slate-50 rounded-[3rem] p-10 border border-slate-100 hover:border-slate-200 hover:bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden"
                        >
                            {/* Floating Metric Popup - CRAZY ELEMENT */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ delay: 0.5 + idx * 0.1 }}
                                className="absolute top-8 right-8 bg-white shadow-xl rounded-2xl p-4 border border-slate-50 z-20"
                            >
                                <div className="flex flex-col">
                                    <span className="text-[8px] font-medium uppercase text-slate-400 tracking-tighter">Performance</span>
                                    <span className="text-sm font-black text-brand-orange">{ind.metric}</span>
                                </div>
                            </motion.div>

                            <div className="text-black mb-10 group-hover:rotate-12 transition-transform duration-500">
                                {ind.icon}
                            </div>

                            <h3 className="text-3xl font-black text-brand-black mb-8">{ind.name}</h3>

                            <div className="space-y-4 mb-10">
                                {ind.features.map(f => (
                                    <div key={f} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                                        <span className="text-slate-600 font-semibold">{f}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto pt-8 border-t border-slate-100">
                                <div className="flex items-center gap-2 text-brand-blue">
                                    <Lock size={16} />
                                    <span className="text-xs font-black uppercase tracking-widest">{ind.highlight}</span>
                                </div>
                            </div>


                        </motion.div>
                    ))}
                </div>

                {/* Industry Badge Carousel / Logo Cloud idea */}
                <div className="mt-20 pt-10 border-t border-slate-100">
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 transition-all duration-700">
                        <div className="flex items-center gap-2 font-semibold text-lg text-black underline decoration-slate-200 underline-offset-8"><Code2 size={20} /> TECH_STACK</div>
                        <div className="flex items-center gap-2 font-semibold text-lg text-black underline decoration-slate-200 underline-offset-8"><Lock size={20} /> SECURE_DATA</div>
                        <div className="flex items-center gap-2 font-semibold text-lg text-black underline decoration-slate-200 underline-offset-8"><FileChart size={20} /> AUDIT_READY</div>
                        <div className="flex items-center gap-2 font-semibold text-lg text-black underline decoration-slate-200 underline-offset-8"><ShieldCheck size={20} /> GLOBAL_COMPLIANCE</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustrySolutions;
