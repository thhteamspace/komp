'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/Button';

const ResourcesHero = () => {
    return (
        <section className="relative min-h-[70vh] flex flex-col items-center justify-center pt-40 pb-24 px-6 overflow-hidden bg-slate-950">
            {/* Background Image - Full Screen Blurred */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                    alt="Background"
                    className="w-full h-full object-cover blur-[2px] opacity-40 scale-105"
                />
                <div className="absolute inset-0 bg-slate-950/80" />
                {/* Brand Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 via-transparent to-brand-orange/20 mix-blend-overlay" />
            </div>

            {/* Brand Gradients - Glows */}
            <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-brand-orange/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-blue/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

            <div className="w-full max-w-5xl mx-auto relative z-10 text-center">


                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9]"
                >
                    Intelligence for <br />
                    <span className="text-brand-orange">Global Scale.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto mb-12"
                >
                    Practical guides, playbooks, and regulatory alerts for global expansion. Navigate international markets with precision.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button variant="primary" size="lg" className="h-16 px-10 shadow-[0_0_40px_-10px_rgba(255,107,0,0.4)]">
                        Explore Guides <ArrowRight size={18} />
                    </Button>
                    <Button variant="secondary" size="lg" className="h-16 px-10 bg-white/10 border-white/10 text-white hover:bg-white/20 backdrop-blur-md">
                        View Compliance Map
                    </Button>
                </motion.div>

                {/* Bottom Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 pt-10 border-t border-white/10 flex flex-wrap justify-center gap-x-16 gap-y-8"
                >
                    {[
                        { label: 'Markets Covered', value: '150+' },
                        { label: 'Updated Daily', value: 'Real-time' },
                        { label: 'Global Guides', value: '500+' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-xs font-bold text-white/40 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ResourcesHero;
