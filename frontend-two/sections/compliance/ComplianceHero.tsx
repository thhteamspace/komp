'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { ArrowRight, ShieldCheck, Scale, FileText } from 'lucide-react';

export default function ComplianceHero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-24 px-6 overflow-hidden bg-brand-black">
            {/* Background elements */}
            <div className="absolute inset-0 bg-brand-black z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue font-medium text-sm mb-8">
                        <ShieldCheck size={16} /> Global Risk Management
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-tight max-w-5xl mx-auto"
                >
                    Compliance built into <span className="text-brand-blue">every global hire</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-3xl mx-auto flex flex-col items-center gap-2"
                >
                    <p className="flex items-center gap-2"><Scale size={18} className="text-brand-blue" /> Labor laws vary significantly by country.</p>
                    <p className="flex items-center gap-2"><FileText size={18} className="text-brand-blue" /> KOMP helps navigate complexity with structured compliance.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button variant="primary" size="lg" className="bg-brand-blue text-white hover:bg-blue-600 shadow-[0_10px_25px_rgba(59,130,246,0.3)] hover:shadow-none px-10 h-14 w-full sm:w-auto text-base font-bold group border-none">
                        Talk to a Compliance Expert <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </motion.div>

                {/* Visual Representation of Compliance */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-20 relative w-full h-[400px] border border-white/10 rounded-3xl overflow-hidden bg-slate-900 shadow-2xl flex items-center justify-center"
                >
                    <div className="absolute inset-0 bg-grid-slate-800/[0.2] bg-[length:32px_32px]" />
                    <div className="relative z-10 text-center p-8">
                        <div className="w-20 h-20 bg-brand-blue/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                            <ShieldCheck size={40} className="text-brand-blue" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">150+ Jurisdictions Covered</h3>
                        <p className="text-slate-400">Real-time legislative tracking across main global markets.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
