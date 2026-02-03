'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

const cases = [
    {
        id: 'finscale',
        company: 'FinScale',
        sector: 'FinTech',
        title: 'Global Scale.',
        desc: 'Scaled to 200 employees across 12 countries in 6 months.',
        stat: '300%',
        statLabel: 'Growth',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2932&auto=format&fit=crop', // Sleek Boardroom/Corporate
        icon: TrendingUp,
        color: '#3b82f6' // Blue
    },
    {
        id: 'medicore',
        company: 'MediCore',
        sector: 'HealthTech',
        title: 'Zero Risk.',
        desc: 'Achieved 100% HIPAA & GDPR compliance for remote teams.',
        stat: '100%',
        statLabel: 'Compliant',
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop', // Reliable Medical Tech
        icon: ShieldCheck,
        color: '#10b981' // Emerald
    },
    {
        id: 'nebula',
        company: 'Nebula',
        sector: 'SaaS',
        title: 'Instant Speed.',
        desc: 'Hired top engineering talent in Brazil & India in 48 hours.',
        stat: '48h',
        statLabel: 'To Hire',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop', // Dynamic Team
        icon: Zap,
        color: '#f97316' // Orange
    }
];

const CaseStudies = () => {
    const [activeId, setActiveId] = useState('finscale');

    return (
        <section className="py-24 bg-white text-brand-black relative overflow-hidden">
            {/* Background Texture - Gritty but light */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#f0f0f0 1px, transparent 1px), linear-gradient(90deg, #f0f0f0 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="container mx-auto px-6 relative z-10">

                {/* Header - Centered & Impactful */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-brand-black"
                    >
                        Proven Results. <span className="text-brand-orange block md:inline">Global Impact.</span>
                    </motion.h2>
                    <p className="text-brand-black/60 text-xl font-medium max-w-2xl mx-auto">
                        We don't just promise compliance. We deliver hyper-growth.
                    </p>
                </div>

                {/* The "Crazy" Elastic Layout */}
                <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[600px]">
                    {cases.map((item) => (
                        <motion.div
                            key={item.id}
                            layout
                            onHoverStart={() => setActiveId(item.id)}
                            onClick={() => setActiveId(item.id)}
                            initial={{ borderRadius: '1.5rem' }}
                            animate={{
                                flex: activeId === item.id ? 3 : 1,
                                opacity: activeId === item.id ? 1 : 0.6
                            }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className={`relative overflow-hidden cursor-pointer group bg-white border ${activeId === item.id ? 'border-brand-orange' : 'border-gray-100'} rounded-[1.5rem] shadow-xl`}
                        >
                            {/* Background Image - scales on hover */}
                            <motion.img
                                src={item.image}
                                alt={item.company}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 saturate-0 group-hover:saturate-100"
                            />

                            {/* Dark Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-b ${activeId === item.id ? 'from-black/10 via-black/10 to-black/80' : 'from-black/60 to-black/90'} transition-all duration-500`} />

                            <div className="absolute inset-0 p-8 flex flex-col justify-between">

                                {/* Top: Sector Tag */}
                                <div className="flex justify-start">
                                    <div className="bg-brand-black/20 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-[10px] uppercase font-black tracking-widest flex items-center gap-2 text-white">
                                        <div className={`w-2 h-2 rounded-full`} style={{ backgroundColor: item.color }} />
                                        {item.sector}
                                    </div>
                                </div>

                                {/* Bottom: Info */}
                                {/* Bottom: Info */}
                                <div className="mt-auto h-[400px] flex flex-col justify-start">
                                    {/* The Stat - Stable Anchor */}
                                    <div className="mb-2">
                                        <div className="flex items-end gap-2 text-white leading-none">
                                            <motion.span
                                                transition={{ duration: 0.3, ease: 'easeOut' }}
                                                style={{ originX: 0, originY: 1 }}
                                                animate={{
                                                    scale: activeId === item.id ? 1 : 0.65,
                                                    opacity: activeId === item.id ? 1 : 0.4
                                                }}
                                                className="font-black tracking-tighter text-7xl md:text-9xl block"
                                            >
                                                {item.stat}
                                            </motion.span>
                                        </div>
                                        <motion.span
                                            transition={{ duration: 0.3, ease: 'easeOut' }}
                                            className="text-sm font-bold uppercase tracking-widest text-white/50 pl-1 block mt-1"
                                        >
                                            {item.statLabel}
                                        </motion.span>
                                    </div>

                                    {/* Expanding Content */}
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            height: activeId === item.id ? 'auto' : 0,
                                            opacity: activeId === item.id ? 1 : 0,
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            ease: [0.22, 1, 0.36, 1]
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-6 border-t border-white/10 mt-4">
                                            <h3 className="text-3xl md:text-5xl font-black mb-4 text-white leading-[0.85] tracking-tighter">{item.title}</h3>
                                            <p className="text-base md:text-lg text-white/70 mb-8 leading-relaxed max-w-lg font-medium">
                                                {item.desc}
                                            </p>
                                            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-orange text-white text-sm font-black uppercase tracking-widest group/btn hover:bg-white hover:text-brand-black transition-all hover:scale-105 shadow-lg">
                                                Read Case Study
                                                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Company Name (Visible when inactive for context) */}
                                    {activeId !== item.id && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="mt-4 text-xl font-bold text-white/40"
                                        >
                                            {item.company}
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))
                    }
                </div >

            </div >
        </section >
    );
};

export default CaseStudies;
