'use client';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <header className="relative bg-[#f8f6f5] py-24 lg:py-48 border-b border-gray-200 overflow-hidden">
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-orange/10 via-transparent to-transparent"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            </div>

            <div className="relative max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center gap-3 mb-12 text-sm font-bold tracking-widest uppercase text-brand-orange/80"
                >
                    <span className="bg-brand-orange/10 px-4 py-1 rounded-full text-brand-orange">Case Study</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                    <span>Enterprise Growth</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                    <span>Global Scale</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-[6.5rem] font-black tracking-tighter text-slate-900 mb-12 leading-[0.9]"
                >
                    Scaling at <span className="text-brand-orange relative inline-block">
                        Every Stage
                        <svg className="absolute w-full h-4 -bottom-2 left-0 text-brand-orange/20" preserveAspectRatio="none" viewBox="0 0 100 10">
                            <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
                        </svg>
                    </span>, Without Rebuilding Infrastructure
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium"
                >
                    Discover how organizations navigate multi-stage operational complexity—from startup agility to enterprise control—without the need to rip and replace their foundational systems.
                </motion.p>
            </div>
        </header>
    );
};

export default Hero;
