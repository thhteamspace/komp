'use client';

import { motion } from 'framer-motion';
import { Users, CreditCard, Scale, AlertCircle, CheckCircle2 } from 'lucide-react';

const roleData = [
    {
        role: 'HR Teams',
        icon: <Users className="w-8 h-8" />,
        problem: 'Siloed data and manual paperwork for every new global hire.',
        solution: 'Sync global teams in one click. Automated contracts, compliance, and equipment provisioning.',
        metric: { label: 'Onboarding Speed', value: 'Significantly Faster' },
        features: ['Localized Contracts', 'Auto-Provisioning', 'Global Benefits'],
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop',
        alignment: 'left'
    },
    {
        role: 'Finance Teams',
        icon: <CreditCard className="w-8 h-8" />,
        problem: 'Managing multiple invoices and high FX fees across borders.',
        solution: 'One unified global invoice. Pay everyone in their local currency with zero hidden fees.',
        metric: { label: 'Accounting Effort', value: '1-Click' },
        features: ['Consolidated Invoicing', 'FX Optimization', 'Automated Tax'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
        alignment: 'right'
    },
    {
        role: 'Legal Teams',
        icon: <Scale className="w-8 h-8" />,
        problem: 'Navigating the complexity of shifting labor laws in 150+ countries.',
        solution: 'Built-in legal protection. Our local entities act as your shield, handling all liability.',
        metric: { label: 'Compliance Strategy', value: 'Expert-Led Safeguards' },
        features: ['IP Protection', 'Liability Shield', 'Labor Law Monitoring'],
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop',
        alignment: 'left'
    }
];

const RoleBasedSolutions = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <span className="text-base font-bold text-brand-blue">Role-Based Excellence</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="font-black text-brand-black tracking-tighter"
                        style={{ fontSize: '4vw', lineHeight: '1.1' }}
                    >
                        One platform. <span className="text-brand-orange">Every team wins.</span>
                    </motion.h2>
                </div>

                <div className="space-y-40">
                    {roleData.map((item, index) => (
                        <div
                            key={item.role}
                            className={`flex flex-col ${item.alignment === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-20`}
                        >
                            {/* Content Side */}
                            <motion.div
                                initial={{ opacity: 0, x: item.alignment === 'left' ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: false, amount: 0.2 }}
                                className="flex-1 space-y-8"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="text-slate-950 mb-2">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-4xl font-black text-slate-950 tracking-tight">{item.role}</h3>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-slate-400">
                                        <AlertCircle className="w-5 h-5 shrink-0" />
                                        <p className="text-lg font-medium italic">{item.problem}</p>
                                    </div>
                                    <p className="text-2xl font-bold text-slate-900 leading-snug">
                                        {item.solution}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-8 py-8 border-y border-slate-100 mt-12">
                                    <div>
                                        <span className="block text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-2">{item.metric.label}</span>
                                        <span className="text-3xl font-semibold text-brand-orange">{item.metric.value}</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        {item.features.map(f => (
                                            <div key={f} className="flex items-center gap-2">
                                                <CheckCircle2 size={14} className="text-brand-blue" />
                                                <span className="text-sm font-bold text-slate-600">{f}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Visual Side */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: false, amount: 0.2 }}
                                className="flex-1 relative"
                            >
                                <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] bg-slate-50">
                                    <img
                                        src={item.image}
                                        alt={item.role}
                                        className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                                    />

                                </div>
                                {/* Decorative behind element */}
                                <div className={`absolute -inset-4 bg-slate-50 rounded-[3.5rem] -z-10 group-hover:bg-slate-100 transition-colors`} />
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RoleBasedSolutions;
