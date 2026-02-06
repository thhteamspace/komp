'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/Button';
import { ArrowRight, Users, Briefcase, Activity, ShieldCheck, Zap, Lock, Globe } from 'lucide-react';

const personas = [
    {
        id: 'startup',
        label: 'Startups',
        icon: <Zap className="w-5 h-5" />,
        headline: 'Hire your first global employee without setting up an entity.',
        subheadline: 'Launch your global workforce instantly without the wait for local legal registrations.',
        metrics: [
            { label: 'Hiring Speed', value: '48 Hours' },
            { label: 'Legal Cost', value: 'Save $20k+' },
            { label: 'Compliance', value: '150+ Countries' }
        ],
        dashboardImage: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2024&auto=format&fit=crop'
    },
    {
        id: 'hr',
        label: 'HR Teams',
        icon: <Users className="w-5 h-5" />,
        headline: 'Automate global onboarding, contracts, and benefits.',
        subheadline: 'One dashboard to manage every stage of the global employee lifecycle.',
        metrics: [
            { label: 'Onboarding', value: 'Automated' },
            { label: 'Employee NPS', value: '98%' },
            { label: 'Admin Time', value: '-80%' }
        ],
        dashboardImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 'finance',
        label: 'Finance',
        icon: <Activity className="w-5 h-5" />,
        headline: 'Consolidate global payroll, invoices, and FX exposure.',
        subheadline: 'Unified financial visibility and automated tax filings across 150+ countries.',
        metrics: [
            { label: 'One Invoice', value: '100+ Currencies' },
            { label: 'Audit Ready', value: 'Always' },
            { label: 'Tax Filings', value: 'Handled' }
        ],
        dashboardImage: 'https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=2070&auto=format&fit=crop'
    }
];

const SolutionsHero = () => {
    const [activePersona, setActivePersona] = useState(personas[0]);

    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-24 px-6 overflow-hidden bg-brand-white">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl animate-pulse" />
            </div>

            <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col h-full">

                {/* TOP: Navigation Bar */}
                <div className="w-full flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
                    {personas.map((persona) => (
                        <button
                            key={persona.id}
                            onClick={() => setActivePersona(persona)}
                            className={`group px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2 border ${activePersona.id === persona.id
                                ? 'bg-brand-black text-white shadow-lg scale-105 border-transparent'
                                : 'bg-white text-slate-600 hover:bg-slate-50 border-slate-200 hover:border-brand-orange/30'
                                }`}
                        >
                            {persona.icon}
                            <span>{persona.label}</span>
                        </button>
                    ))}
                </div>

                {/* BOTTOM: Content & Visual Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 lg:gap-16 items-center">

                    {/* Content (Left) */}
                    <div className="w-full text-center lg:text-left">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activePersona.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-brand-black mb-8 leading-[1.1]">
                                    {activePersona.headline}
                                </h1>
                                <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                    {activePersona.subheadline}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4">
                            <Button variant="premium" size="lg" className="px-10 h-14 text-base font-bold group w-full sm:w-auto">
                                Talk to an Expert <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button variant="ghost" size="lg" className="px-10 h-14 text-base font-bold border border-slate-200 w-full sm:w-auto">
                                View Platform
                            </Button>
                        </div>
                    </div>

                    {/* Visual (Right) */}
                    <div className="w-full -mt-12 lg:-mt-24">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activePersona.id}
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 1.05, y: -20 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="relative group w-full pl-0 lg:px-10"
                            >
                                <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] aspect-[16/10]">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent z-10 pointer-events-none" />
                                    <img
                                        src={activePersona.dashboardImage}
                                        alt={`${activePersona.label} Dashboard`}
                                        className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-1000"
                                    />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default SolutionsHero;
