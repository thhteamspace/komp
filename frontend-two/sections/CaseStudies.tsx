'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, AlertCircle, Zap, ShieldCheck, Globe } from 'lucide-react';
import Button from '@/components/Button';

const cases = [
    {
        id: 'tech-scaling',
        company: 'CloudStream SaaS',
        sector: 'Tech / SaaS',
        title: 'Fast Engineering Scale.',
        problem: 'Needed 45 engineers in 3 countries without local offices.',
        solution: 'KOMP Activate enabled compliant hiring in under 48 hours.',
        result: 'Saved $1.2M and hit hiring goals early.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop',
        icon: Zap,
        color: '#f97316'
    },
    {
        id: 'healthcare-compliance',
        company: 'VitalsGlobal',
        sector: 'Healthcare',
        title: 'Global Risk Shield.',
        problem: 'Managing remote specialists across 15 countries was a legal risk.',
        solution: 'KOMP Governance fixed all compliance gaps and updated contracts.',
        result: 'Zero legal issues and 100% risk reduction.',
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop',
        icon: ShieldCheck,
        color: '#10b981'
    },
    {
        id: 'professional-mobility',
        company: 'Strata Partners',
        sector: 'Professional Services',
        title: 'Global Staff Mobility.',
        problem: 'Fast visa needs for staff moving between London and Dubai.',
        solution: 'KOMP Mobility handled relocation and payroll without local entities.',
        result: 'Visa time cut by 70%; 99% satisfaction rate.',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2932&auto=format&fit=crop',
        icon: Globe,
        color: '#3b82f6'
    }
];

const CaseStudies = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-32 bg-slate-50 relative overflow-hidden scroll-mt-40">
            <div className="w-full max-w-7xl mx-auto px-6 relative z-10">

                <div className="flex flex-col items-center text-center mb-20 gap-8">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="text-brand-blue font-bold text-base mb-6 inline-block"
                        >
                            Expansion Stories
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="font-black text-slate-950 tracking-tighter leading-[0.9]"
                            style={{ fontSize: '4vw' }}
                        >
                            Human Impact. <span className="text-brand-orange">Technical Precision.</span>
                        </motion.h2>
                    </div>
                </div>

                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 0.98, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 1.02, y: -20 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white rounded-[3rem] border border-slate-200 overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.05)] flex flex-col lg:flex-row min-h-[500px]"
                        >
                            {/* Left: Content Area */}
                            <div className="flex-1 p-10 md:p-14 flex flex-col justify-between order-2 lg:order-1">
                                <div>
                                    <div className="flex items-center gap-4 mb-10">
                                        <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-950">
                                            {(() => {
                                                const Icon = cases[activeIndex].icon;
                                                return <Icon size={24} />;
                                            })()}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-slate-950 tracking-tight">{cases[activeIndex].company}</h3>
                                            <p className="text-[10px] font-bold tracking-wider text-slate-400">{cases[activeIndex].sector}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
                                                    <AlertCircle size={16} />
                                                </div>
                                                <span className="text-[11px] font-black tracking-[0.2em] uppercase text-slate-400">The Challenge</span>
                                            </div>
                                            <p className="text-xl font-bold text-slate-900 leading-snug">
                                                {cases[activeIndex].problem}
                                            </p>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue">
                                                    <Zap size={16} />
                                                </div>
                                                <span className="text-[11px] font-black tracking-[0.2em] uppercase text-slate-400">Our Strategy</span>
                                            </div>
                                            <p className="text-xl font-medium text-slate-600 leading-snug">
                                                {cases[activeIndex].solution}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-8">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-500 flex-shrink-0">
                                            <CheckCircle2 size={32} />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-400 mb-1">Impact Delivered</div>
                                            <p className="text-3xl font-black text-slate-950 tracking-tight leading-none">
                                                {cases[activeIndex].result}
                                            </p>
                                        </div>
                                    </div>
                                    <Button variant="premium" className="rounded-full px-10 h-14 whitespace-nowrap">
                                        Read Case Study
                                    </Button>
                                </div>
                            </div>

                            {/* Right: Visual Area */}
                            <div className="w-full lg:w-[40%] relative overflow-hidden min-h-[300px] lg:min-h-full order-1 lg:order-2">
                                <img
                                    src={cases[activeIndex].image}
                                    alt={cases[activeIndex].company}
                                    className="absolute inset-0 w-full h-full object-cover saturate-0 opacity-40 group-hover:saturate-100 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/5 to-white pointer-events-none" />

                                {/* Overlay Accent */}
                                <div className="absolute top-12 right-12 bottom-12 left-12 border-2 border-white/20 rounded-[3rem] pointer-events-none" />
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Dots Below Card */}
                    <div className="flex justify-center mt-12 gap-4">
                        {cases.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={`h-2 rounded-full transition-all duration-500 ${activeIndex === i ? 'bg-brand-orange w-24' : 'bg-slate-300 w-12 hover:bg-slate-400'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};


export default CaseStudies;
