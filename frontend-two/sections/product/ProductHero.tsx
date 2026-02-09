'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { ArrowRight, Globe, Layers, ShieldCheck } from 'lucide-react';

export default function ProductHero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-24 px-6 overflow-hidden bg-brand-white">
            {/* Background elements similar to existing pages */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-brand-orange/5 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] animate-pulse" />
            </div>

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-brand-blue font-bold tracking-widest text-sm mb-6 block">
                        Unified Global Workforce Platform
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="font-black tracking-tighter text-brand-black mb-8 leading-[0.9] max-w-5xl mx-auto"
                    style={{ fontSize: 'clamp(55px, 8vw, 90px)' }}
                >
                    One platform. <span className="text-brand-orange">Global scale.</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto space-y-2 flex flex-col items-center"
                >
                    <p className="flex items-center gap-2"><Layers size={18} className="text-brand-blue" /> One system to hire, manage, and pay globally</p>
                    <p className="flex items-center gap-2"><Globe size={18} className="text-brand-blue" /> Centralized visibility and control</p>
                    <p className="flex items-center gap-2"><ShieldCheck size={18} className="text-brand-blue" /> Compliance-first architecture</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button variant="primary" size="lg" className="px-10 h-14 w-full sm:w-auto text-base font-bold group">
                        Talk to a Compliance Expert <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="ghost" size="lg" className="px-10 h-14 w-full sm:w-auto text-base font-bold border border-slate-200">
                        View Platform
                    </Button>
                </motion.div>

                {/* Hero Dashboard Placeholder - Light Design */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-20 relative w-full aspect-[16/9] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 bg-white"
                >
                    {/* Light gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-white to-brand-orange/5 flex items-center justify-center">
                        <div className="text-center p-10">
                            <Layers size={64} className="text-brand-blue mx-auto mb-4 opacity-30" />
                            <h3 className="text-2xl font-bold text-brand-black mb-2">KOMP Unified Dashboard</h3>
                            <p className="text-slate-500">Manage your global workforce from a single view.</p>
                        </div>
                        {/* Simulation of UI elements - Light theme */}
                        <div className="absolute top-0 left-0 right-0 h-12 bg-white/80 backdrop-blur-sm flex items-center px-6 border-b border-slate-200">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
