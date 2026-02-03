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
                    <p className="text-gray-500 text-xl font-medium max-w-2xl mx-auto">
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
                            transition={{ type: 'spring', stiffness: 200, damping: 30 }}
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
                                <div>
                                    {/* The Stat */}
                                    <motion.div
                                        layout
                                        className="mb-6"
                                    >
                                        <div className="flex items-end gap-2 text-white leading-none">
                                            <span className={`font-black tracking-tighter ${activeId === item.id ? 'text-7xl md:text-9xl' : 'text-5xl md:text-6xl text-white/50'}`}>
                                                {item.stat}
                                            </span>
                                        </div>
                                        <span className="text-sm font-bold uppercase tracking-widest text-white/60 pl-2 block mt-2">{item.statLabel}</span>
                                    </motion.div>

                                    {/* Expanding Content */}
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            height: activeId === item.id ? 'auto' : 0,
                                            opacity: activeId === item.id ? 1 : 0
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-4 border-t border-white/10 mt-4">
                                            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">{item.title}</h3>
                                            <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-lg">
                                                {item.desc}
                                            </p>
                                            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-brand-orange text-white text-sm font-bold uppercase tracking-widest group/btn hover:bg-white hover:text-brand-black transition-colors">
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
