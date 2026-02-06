'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Ruler, ChevronRight, BarChart3, MapPin, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const explorers = [
    {
        country: 'Vietnam',
        complexity: 'Standard',
        types: ['EOR', 'Contractor'],
        metric: 'Market Access',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop',
        desc: 'Rapidly emerging as a global tech hub with a growing talent pool.'
    },
    {
        country: 'Singapore',
        complexity: 'Standard',
        types: ['EOR', 'Payroll', 'Contractor'],
        metric: 'Strategic Hub',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop',
        desc: 'The gold standard for regional HQ operations and financial compliance.'
    },
    {
        country: 'United States',
        complexity: 'In-Depth',
        types: ['EOR', 'Contractor'],
        metric: 'Nexus Logic',
        image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=2070&auto=format&fit=crop',
        desc: 'Navigate 50+ jurisdictions with state-specific labor law monitoring.'
    },
    {
        country: 'Japan',
        complexity: 'In-Depth',
        types: ['EOR', 'Payroll'],
        metric: 'Regulated',
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop',
        desc: 'Social insurance and labor guidance for one of the world’s most precise markets.'
    }
];

const CountryExplorer = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="pt-40 pb-10 bg-white relative overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="mb-8 self-center"
                    >
                        <span className="text-base font-bold text-brand-blue">Regional Overview</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="font-black text-slate-950 tracking-tighter leading-tight mb-6"
                        style={{ fontSize: '4vw' }}
                    >
                        Expansion <span className="text-brand-orange italic">Readiness.</span>
                    </motion.h2>
                    <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
                        Analyze market complexity and compliance profiles across major global jurisdictions.
                    </p>
                </div>

                {/* Cinematic Editorial Layout */}
                <div className="flex flex-col lg:flex-row gap-20 items-stretch">
                    {/* Left: Interactive Country List */}
                    <div className="w-full lg:w-1/3 space-y-2">
                        {explorers.map((exp, i) => (
                            <button
                                key={exp.country}
                                onClick={() => setActiveIndex(i)}
                                className={`w-full text-left p-6 rounded-[2rem] transition-all duration-500 flex flex-col gap-1 ${activeIndex === i ? 'bg-slate-50 border-l-4 border-l-brand-orange shadow-sm' : 'hover:bg-slate-50/50 opacity-50 hover:opacity-100'}`}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-slate-500">{exp.metric}</span>
                                    {activeIndex === i && (
                                        <motion.div layoutId="arrow" className="text-brand-orange">
                                            <ChevronRight size={18} />
                                        </motion.div>
                                    )}
                                </div>
                                <h3 className={`text-3xl font-black tracking-tighter transition-colors ${activeIndex === i ? 'text-slate-950' : 'text-slate-400'}`}>
                                    {exp.country}
                                </h3>
                                {activeIndex === i && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-4 space-y-4"
                                    >
                                        <p className="text-[13px] text-slate-500 font-medium leading-relaxed">
                                            {exp.desc}
                                        </p>

                                        <div className="pt-4 border-t border-slate-100 space-y-3">
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                                                <span className="text-[10px] font-bold text-slate-500">
                                                    {exp.complexity} Knowledge Base
                                                </span>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.types.map(t => (
                                                    <span key={t} className="px-2 py-1 bg-slate-100 rounded-md text-[10px] font-bold text-slate-600">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Right: Large Cinematic Image Frame */}
                    <div className="flex-1 w-full relative">
                        <div className="relative h-full min-h-[500px] lg:min-h-full rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 bg-white">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeIndex}
                                    src={explorers[activeIndex].image}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    alt={explorers[activeIndex].country}
                                />
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                <div className="mt-32 flex justify-center">
                    <button className="h-20 px-16 rounded-full bg-slate-950 text-white font-medium text-lg hover:bg-brand-orange transition-all duration-500 active:scale-95 group flex items-center gap-4 border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
                        Get My Custom Expansion Quote <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CountryExplorer;
