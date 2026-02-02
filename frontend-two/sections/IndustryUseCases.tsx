'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Stethoscope, Briefcase, ChevronRight, Zap, Shield, Users } from 'lucide-react';

const industries = [
    {
        id: 'tech',
        label: 'Technology',
        icon: Code2,
        title: 'Ship Faster, Hire Anywhere.',
        description: 'For tech companies, speed is survival. KOMP allows you to onboard developers in Brazil, Poland, and India in < 48 hours, while protecting your IP globally.',
        stats: [
            { value: '48h', label: 'Onboarding Time' },
            { value: '100%', label: 'IP Protection' },
            { value: '150+', label: 'Countries' }
        ],
        gradient: 'from-blue-500 to-indigo-600'
    },
    {
        id: 'healthcare',
        label: 'Healthcare',
        icon: Stethoscope,
        title: 'Compliance is Non-Negotiable.',
        description: 'Navigate complex healthcare regulations with ease. We handle meticulous background checks, credential verification, and HIPAA-compliant contracting.',
        stats: [
            { value: 'Zero', label: 'Compliance Gaps' },
            { value: 'HIPAA', label: 'Ready Contracts' },
            { value: '24/7', label: 'Support' }
        ],
        gradient: 'from-emerald-500 to-teal-600'
    },
    {
        id: 'professional',
        label: 'Prof. Services',
        icon: Briefcase,
        title: 'Deploy Consultants Instantly.',
        description: 'Whether it’s a 3-month project or a permanent placement, deploy consultants to client sites globally without triggering permanent establishment risks.',
        stats: [
            { value: 'Flex', label: 'Contract Terms' },
            { value: 'No', label: 'Entity Needed' },
            { value: 'Global', label: 'Mobility' }
        ],
        gradient: 'from-brand-orange to-red-600'
    }
];

const IndustryUseCases = () => {
    const [activeTab, setActiveTab] = useState(industries[0].id);

    return (
        <section className="py-24 bg-brand-black relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-brand-white mb-6 tracking-tighter">
                        Built for <span className="text-brand-white/40 italic">Your Industry.</span>
                    </h2>
                    <p className="text-brand-white/40 max-w-2xl mx-auto text-lg">
                        Specific challenges require specific solutions. See how KOMP adapts to your sector.
                    </p>
                </motion.div>

                {/* Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {industries.map((industry) => (
                        <button
                            key={industry.id}
                            onClick={() => setActiveTab(industry.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${activeTab === industry.id
                                ? 'bg-brand-white text-brand-black border-brand-white'
                                : 'bg-transparent text-brand-white/40 border-brand-white/10 hover:border-brand-white/30 hover:text-brand-white'
                                }`}
                        >
                            <industry.icon size={18} />
                            <span className="font-bold tracking-wide text-sm">{industry.label}</span>
                        </button>
                    ))}
                </motion.div>

                {/* Content Area */}
                <div className="max-w-5xl mx-auto min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {industries.map((industry) => (
                            activeTab === industry.id && (
                                <motion.div
                                    key={industry.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-8 md:p-12 rounded-[3rem] bg-[#0f0f0f] border border-brand-white/10 relative overflow-hidden"
                                >
                                    {/* Decorative Gradient Blob */}
                                    <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br ${industry.gradient} opacity-10 blur-[100px] rounded-full pointer-events-none`} />

                                    <div>
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center mb-8 text-white shadow-lg`}>
                                            <industry.icon size={28} />
                                        </div>
                                        <h3 className="text-3xl md:text-5xl font-bold text-brand-white mb-6 leading-tight">
                                            {industry.title}
                                        </h3>
                                        <p className="text-brand-white/40 text-lg leading-relaxed mb-8">
                                            {industry.description}
                                        </p>
                                        <div className="flex items-center gap-2 text-brand-orange font-bold uppercase tracking-widest text-xs cursor-pointer group">
                                            Explore {industry.label} Solution
                                            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        {industry.stats.map((stat, index) => (
                                            <div key={index} className="bg-brand-black/50 border border-brand-white/5 p-6 rounded-2xl text-center backdrop-blur-sm">
                                                <motion.div
                                                    initial={{ scale: 0.5, opacity: 0 }}
                                                    whileInView={{ scale: 1, opacity: 1 }}
                                                    viewport={{ once: false }}
                                                    transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                                                    className={`text-2xl font-black bg-gradient-to-br ${industry.gradient} bg-clip-text text-transparent mb-1`}
                                                >
                                                    {stat.value}
                                                </motion.div>
                                                <div className="text-[10px] font-bold text-brand-white/30 uppercase tracking-wider">
                                                    {stat.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default IndustryUseCases;
