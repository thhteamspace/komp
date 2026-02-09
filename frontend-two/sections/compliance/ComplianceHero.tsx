'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { ArrowRight, ShieldCheck, Scale, FileText } from 'lucide-react';

export default function ComplianceHero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-24 px-6 overflow-hidden bg-brand-white">
            {/* Background elements */}
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
                        Global Risk & Compliance Infrastructure
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="font-black tracking-tighter text-brand-black mb-8 leading-[0.9] max-w-5xl mx-auto"
                    style={{ fontSize: 'clamp(55px, 8vw, 90px)' }}
                >
                    Compliance built into <span className="text-brand-orange">every global hire.</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto flex flex-col items-center gap-2"
                >
                    <p className="flex items-center gap-2"><Scale size={18} className="text-brand-blue" /> Expert labor law alignment for 150+ jurisdictions.</p>
                    <p className="flex items-center gap-2"><ShieldCheck size={18} className="text-brand-blue" /> Eliminate misclassification risks with automated guardrails.</p>
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
                        View Compliance Framework
                    </Button>
                </motion.div>

                {/* Hero Dashboard Placeholder - Premium Visual */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-20 relative w-full aspect-[16/8] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 bg-white group"
                >
                    <img
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop"
                        alt="Global Compliance Dashboard"
                        className="w-full h-full object-cover saturate-[0.8] group-hover:saturate-100 transition-all duration-700 blur-[1px] group-hover:blur-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />

                    {/* Floating UI Element */}
                    <div className="absolute bottom-10 left-10 right-10 z-20">
                        <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl border border-slate-200 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue shadow-inner">
                                    <ShieldCheck size={32} />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-2xl font-bold text-brand-black">100% Risk Indemnified</h3>
                                    <p className="text-slate-500 font-medium">Global employment liability, fully protected.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="text-center md:border-l border-slate-200 md:pl-8">
                                    <div className="text-2xl font-black text-brand-black">150+</div>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Countries</div>
                                </div>
                                <div className="text-center border-l border-slate-200 pl-8">
                                    <div className="text-2xl font-black text-brand-orange">Zero</div>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Fines</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
