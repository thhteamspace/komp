'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Stethoscope, Briefcase, ChevronRight, Zap, Shield, Users } from 'lucide-react';

const industries = [
    {
        id: 'tech',
        label: 'Tech / SaaS',
        icon: Code2,
        title: 'Scale Fast. Stay Compliant.',
        description: 'For high-growth software companies, speed is everything. KOMP allows you to onboard developers worldwide in < 48 hours, while ensuring all IP and equity agreements are localized.',
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
        description: 'Navigate complex global healthcare regulations. We handle meticulous background checks and ensured localized labor law adherence for medical staffing.',
        stats: [
            { value: 'Zero', label: 'Compliance Gaps' },
            { value: 'Expert', label: 'Labor Advice' },
            { value: '24/7', label: 'Support' }
        ],
        gradient: 'from-emerald-500 to-teal-600'
    },
    {
        id: 'professional',
        label: 'Professional Services',
        icon: Briefcase,
        title: 'Deploy Consultants Instantly.',
        description: 'Whether it’s a short-term project or a permanent placement, deploy consultants to client sites globally without the overhead of entity setup.',
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
        <section id="industries" className="py-24 bg-white relative overflow-hidden scroll-mt-32">
            {/* Soft ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2
                        className="font-black text-slate-950 mb-6 tracking-tighter"
                        style={{ fontSize: '4vw', lineHeight: '1.2' }}
                    >
                        Built for <span className="text-brand-orange">Your Industry.</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
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
                                ? 'bg-slate-900 text-white border-slate-900 shadow-lg scale-105'
                                : 'bg-white text-slate-400 border-slate-200 hover:border-slate-300 hover:text-slate-600'
                                }`}
                        >
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
                                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-8 md:p-12 rounded-[3rem] bg-white border border-gray-100 relative overflow-hidden shadow-2xl"
                                >
                                    {/* Decorative Blob Removed */}

                                    <div>
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-white border border-slate-100 shadow-sm
                                            ${industry.id === 'tech' ? 'text-blue-600' :
                                                industry.id === 'healthcare' ? 'text-emerald-600' :
                                                    'text-brand-orange'}`}>
                                            <industry.icon size={28} />
                                        </div>
                                        <h3 className="text-3xl md:text-5xl font-bold text-slate-950 mb-6 leading-tight">
                                            {industry.title}
                                        </h3>
                                        <p className="text-slate-500 text-lg leading-relaxed mb-8">
                                            {industry.description}
                                        </p>
                                        <div className="flex items-center gap-2 text-brand-orange font-bold uppercase tracking-widest text-xs cursor-pointer group">
                                            Explore {industry.label} Solution
                                            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        {industry.stats.map((stat, index) => (
                                            <div key={index} className="bg-gray-50 border border-gray-100 p-6 rounded-2xl text-center">
                                                <motion.div
                                                    initial={{ scale: 0.5, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    transition={{ delay: 0.2 + (index * 0.1), type: "spring", stiffness: 100 }}
                                                    className={`text-2xl font-black mb-1
                                                        ${industry.id === 'tech' ? 'text-blue-600' :
                                                            industry.id === 'healthcare' ? 'text-emerald-600' :
                                                                'text-brand-orange'}`}
                                                >
                                                    {stat.value}
                                                </motion.div>
                                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
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
