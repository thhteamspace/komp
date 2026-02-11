'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Button from '@/components/Button';
import { ArrowRight, Shield, Globe, Layers } from 'lucide-react';

const UseCasesHero = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="min-h-screen bg-white" />;

    return (
        <section className="relative pt-32 pb-48 px-6 bg-white overflow-hidden min-h-screen flex items-center">

            {/* Subtle light glow in background */}
            <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT - Exact match of provided image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="text-[14px] font-black uppercase tracking-[0.2em] text-brand-orange mb-6 block">
                            USE CASE
                        </span>

                        <h1 className="text-5xl md:text-7xl lg:text-[5.2rem] font-bold tracking-tighter mb-8 leading-[0.95]">
                            <span className="text-brand-orange block font-black">Global Expansion</span>
                            <span className="text-slate-900 font-black">Without Structural Drag</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-xl leading-relaxed font-medium">
                            A fast-scaling technology company overcame entity setup delays, fragmented payroll, and compliance risks.
                            KOMP removed the legal and operational friction, enabling borderless, compliant hiring without long-term structural commitments.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <Button
                                variant="premium"
                                size="lg"
                                className="w-full sm:w-auto px-10 h-16 text-base font-bold rounded-full bg-brand-orange hover:bg-orange-600 border-none shadow-[0_20px_40px_-5px_rgba(255,140,26,0.35)] text-white"
                            >
                                Read the Full Case Study <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    </motion.div>

                    {/* RIGHT VISUAL - Placeholder */}
                    <div className="relative flex items-center justify-center lg:justify-end">
                        <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center bg-gray-100 rounded-3xl border-2 border-dashed border-gray-300">
                            <div className="text-center">
                                <span className="text-gray-400 font-bold text-lg">USE CASE HERO VISUAL</span>
                                <p className="text-gray-400 text-sm mt-2">Globe & animated elements placeholder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </section>
    );
};

export default UseCasesHero;
