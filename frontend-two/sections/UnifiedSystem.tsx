'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe2, CreditCard, Activity, ShieldCheck, CheckCircle2, ArrowRight, X } from 'lucide-react';

const features = [
    {
        id: 'compliance',
        icon: ShieldCheck,
        text: 'AI-Powered Compliance',
        title: 'Bulletproof Global Guardrails',
        desc: 'Automated legal guardrails for 150+ jurisdictions. We handle the complexity of local labor laws.',
        badge: 'Secure',
        color: 'from-green-500/20 to-emerald-500/20'
    },
    {
        id: 'payroll',
        icon: CreditCard,
        text: '1-Click Global Payroll',
        title: 'Fund Your Entire Team',
        desc: 'One click to pay everyone, anywhere, in their local currency. Automated tax withholding and benefits.',
        badge: 'Fast',
        color: 'from-blue-500/20 to-brand-blue/20'
    },
    {
        id: 'entities',
        icon: Globe2,
        text: '150+ Direct Entities',
        title: 'Zero Intermediaries',
        desc: 'We own the infrastructure in every country we operate, cutting out the "middle-man" aggregator tax.',
        badge: 'Global',
        color: 'from-orange-500/20 to-brand-orange/20'
    },
    {
        id: 'health',
        icon: Activity,
        text: 'Real-time Monitoring',
        title: 'Total Visibility',
        desc: 'Track every dollar and every employee in real-time with full transparency into workforce health.',
        badge: 'Live',
        color: 'from-red-500/20 to-orange-500/20'
    }
];

const UnifiedSystem = () => {
    const [activeId, setActiveId] = useState('compliance');
    const [isDetailMode, setIsDetailMode] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const activeFeature = features.find(f => f.id === activeId);

    const handleFeatureClick = (id: string) => {
        if (activeId === id && isDetailMode) {
            setIsDetailMode(false);
        } else {
            setActiveId(id);
            setIsDetailMode(true);
        }
    };

    return (
        <section className="py-32 bg-brand-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-l from-brand-blue/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left: The "Control Panel" Selection */}
                    <div className="lg:w-[45%] flex flex-col justify-center relative z-10">
                        {/* Eyebrow Animation */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8 }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center">
                                <Activity size={24} className="text-brand-orange" />
                            </div>
                            <div>
                                <div className="text-[10px] font-black text-brand-orange uppercase tracking-[0.2em]">Core Infrastructure</div>
                                <div className="text-sm font-bold text-brand-white/40">Autonomous Global Operations</div>
                            </div>
                        </motion.div>

                        {/* Heading Animation */}
                        <motion.h3
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-8xl font-bold text-brand-white mb-10 tracking-tighter leading-[1.1]"
                        >
                            One Platform. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-white to-brand-blue block mt-4">Global Scale.</span>
                        </motion.h3>

                        {/* Selection Grid Animation */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {features.map((feature) => (
                                <motion.button
                                    key={feature.id}
                                    onClick={() => handleFeatureClick(feature.id)}
                                    whileTap={{ scale: 0.95 }}
                                    className={`relative group flex items-center justify-between p-5 rounded-2xl border transition-all duration-500 overflow-hidden ${activeId === feature.id && isDetailMode
                                        ? 'bg-brand-white/10 border-brand-white/20'
                                        : 'bg-brand-white/5 border-transparent hover:border-brand-white/10'
                                        }`}
                                >
                                    <div className="flex items-center gap-4 relative z-10">
                                        <feature.icon size={20} className={`transition-colors duration-500 ${activeId === feature.id && isDetailMode ? 'text-brand-orange' : 'text-brand-white/30'}`} />
                                        <span className={`text-[13px] font-black transition-colors duration-500 ${activeId === feature.id && isDetailMode ? 'text-brand-white' : 'text-brand-white/40'}`}>
                                            {feature.text}
                                        </span>
                                    </div>

                                    {/* Active Indicator Line */}
                                    <motion.div
                                        className="absolute bottom-0 left-0 h-1 bg-brand-orange"
                                        initial={{ width: 0 }}
                                        animate={{ width: activeId === feature.id && isDetailMode ? '100%' : '0%' }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </motion.button>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: The Interactive Showcase (Flips between Image and Detail) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1 }}
                        className="lg:w-[55%] relative"
                    >
                        <div className="relative aspect-[16/11] rounded-[3.5rem] bg-[#0d0d0d] border border-white/10 shadow-[0_80px_120px_-30px_rgba(0,0,0,1)] overflow-hidden group">
                            <AnimatePresence mode="wait">
                                {!isDetailMode ? (
                                    /* State 1: Full Image View */
                                    <motion.div
                                        key="image-view"
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, y: -200, filter: 'blur(30px)' }}
                                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                        className="absolute inset-0 cursor-pointer"
                                        onClick={() => setIsDetailMode(true)}
                                    >
                                        <img
                                            src="/images/unified_visual.png"
                                            alt="Platform Dashboard"
                                            className="w-full h-full object-cover opacity-60 transition-opacity duration-700 hover:opacity-100"
                                        />

                                        {/* Chrome UI (Internal to image view) */}
                                        <div className="absolute top-8 left-12 flex items-center gap-2 pointer-events-none">
                                            <div className="w-3 h-3 rounded-full bg-white/10" />
                                            <div className="w-3 h-3 rounded-full bg-white/10" />
                                            <div className="w-3 h-3 rounded-full bg-white/10" />
                                            <div className="ml-4 text-[10px] font-black text-white/20 tracking-tighter uppercase whitespace-nowrap">Unified Dashboard v4.1</div>
                                        </div>

                                        <div className="absolute bottom-10 left-12 right-12 flex items-center justify-between pointer-events-none">
                                            <div className="flex items-center gap-4">
                                                <div className="text-[10px] font-black text-white/20 uppercase tracking-widest">Security Active</div>
                                                <CheckCircle2 size={12} className="text-green-500/50" />
                                            </div>
                                            <div className="text-[10px] font-black text-white/20 uppercase tracking-widest">KOMP OS</div>
                                        </div>
                                    </motion.div>
                                ) : (
                                    /* State 2: Detail Card View (Slides up from below) */
                                    <motion.div
                                        key="detail-view"
                                        initial={{ opacity: 0, y: 200 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 200 }}
                                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                        className="absolute inset-0 flex items-center justify-center p-8 bg-[#0a0a0a] cursor-pointer"
                                        onClick={() => setIsDetailMode(false)}
                                    >
                                        <div className="w-full max-w-sm p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 shadow-2xl relative overflow-hidden text-center group/card">
                                            {/* Corner Accent Glow */}
                                            <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${activeFeature?.color} blur-3xl opacity-50`} />

                                            <div className="relative z-10">
                                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 font-black text-[10px] uppercase tracking-widest text-white">
                                                    <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                                                    {activeFeature?.badge} View
                                                </div>

                                                <h4 className="text-4xl font-black text-white mb-6 tracking-tighter italic leading-tight">
                                                    {activeFeature?.title}
                                                </h4>

                                                <p className="text-xl text-white/50 font-medium mb-10 leading-relaxed">
                                                    {activeFeature?.desc}
                                                </p>

                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default UnifiedSystem;
