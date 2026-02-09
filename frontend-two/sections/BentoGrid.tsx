'use client';

import { motion } from 'framer-motion';
import { Wallet, ShieldCheck, Globe, Users, TrendingUp, ArrowUpRight } from 'lucide-react';

const BentoGrid = () => {
    return (
        <section className="py-20 bg-white relative selection:bg-brand-orange/20 overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-block text-brand-blue font-bold text-base tracking-wide mb-10"
                    >
                        Intelligence Hub
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="font-black text-slate-950 mb-8 tracking-tighter"
                        style={{ fontSize: '5vw', lineHeight: '0.95' }}
                    >
                        Global Visibility <br /> <span className="text-brand-orange">Zero Blindspots.</span>
                    </motion.h2>
                </div>

                {/* Cohesive Light Premium Grid */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 h-auto">

                    {/* 📸 01: Workforce - Hero (Span 3) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ y: -10, rotateX: -2, rotateY: 2 }}
                        className="md:col-span-3 min-h-[500px] rounded-[3.5rem] bg-[#F8F9FB] border border-gray-100 p-12 relative overflow-hidden group hover:shadow-[0_50px_100px_rgba(0,0,0,0.06)] transition-all duration-700 perspective-[1000px]"
                    >
                        <div className="relative z-20">
                            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 text-brand-blue">
                                <Users size={28} />
                            </div>
                            <h3 className="text-4xl font-bold text-slate-950 mb-4 tracking-tight">Global Workforce OS</h3>
                            <p className="text-slate-500 max-w-sm text-lg leading-relaxed font-medium">
                                A centralized system of record for every employee, contractor, and EOR hire across 150+ jurisdictions.
                            </p>
                        </div>

                        {/* Floating Dashboard Widget - Scale up and rotate on hover */}
                        <motion.div
                            animate={{ rotate: -2 }}
                            whileHover={{ scale: 1.05, rotate: 0, y: -20 }}
                            className="absolute -right-12 -bottom-12 w-[85%] h-[65%] bg-white rounded-[2rem] shadow-[0_40px_80px_rgba(0,0,0,0.08)] border border-gray-100 p-10 pt-12 group-hover:bg-white transition-all duration-700"
                        >
                            <img src="/images/dashboard_overview.png" className="w-[140%] max-w-none opacity-100 rounded-xl shadow-lg saturate-[0.8] group-hover:saturate-100 transition-all" alt="UI" />
                        </motion.div>
                    </motion.div>

                    {/* 💸 02: Payroll - NOW LIGHT & COHESIVE (Span 2) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        whileHover={{ y: -10, rotateX: -2, rotateY: -2 }}
                        className="md:col-span-2 min-h-[500px] rounded-[3.5rem] bg-white border border-gray-200 p-12 relative overflow-hidden group hover:shadow-[0_50px_100px_rgba(0,0,0,0.06)] transition-all duration-700 perspective-[1000px]"
                    >
                        <div className="relative z-20">
                            <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mb-8 text-green-600 border border-green-100">
                                <Wallet size={28} />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-950 mb-4 tracking-tight">Unified Global Treasury</h3>
                            <p className="text-slate-500 text-lg leading-relaxed font-medium">
                                Execute multi-currency payroll in 100+ denominations with a single consolidated funding event.
                            </p>

                            {/* Premium Stat Widget */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="mt-12 p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm group-hover:bg-white transition-colors duration-500"
                            >
                                <div className="text-[10px] font-bold text-slate-400 mb-2 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-slate-400 animate-pulse" /> Monthly Spend Visibility
                                </div>
                                <div className="text-4xl font-bold text-slate-950 tracking-tight mb-4">Total Control.</div>
                                <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold">
                                    <TrendingUp size={16} /> Global Cost Consolidation
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* ⚖️ 03: Compliance (Span 2) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ scale: 0.98, rotateX: 2 }}
                        className="md:col-span-2 min-h-[400px] rounded-[3rem] bg-orange-50 border border-orange-100 p-12 relative overflow-hidden group shadow-lg flex flex-col justify-between"
                    >
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-8 text-brand-orange shadow-sm border border-orange-100">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-950 mb-3 tracking-tight">Automated Compliance Shield</h3>
                            <p className="text-slate-600 mb-8 font-medium">
                                Eliminate misclassification risk with our AI engine monitoring real-time labor law shifts globally.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {['SOC2', 'GDPR', 'ISO 27001', 'HIPAA'].map((tag) => (
                                <span key={tag} className="px-4 py-1.5 rounded-full bg-white text-slate-600 text-[10px] font-bold border border-orange-200 uppercase tracking-wider">{tag}</span>
                            ))}
                        </div>
                    </motion.div>

                    {/* 🌍 04: Global Presence (Span 3) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        whileHover={{ scale: 1.02, rotateY: 2 }}
                        className="md:col-span-3 min-h-[400px] rounded-[3rem] bg-blue-50 border border-blue-100 p-12 relative overflow-hidden group flex items-center shadow-lg"
                    >
                        <div className="flex-1 relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 text-brand-blue border border-blue-100">
                                <Globe size={24} />
                            </div>
                            <h3 className="text-4xl font-bold text-slate-950 mb-4 tracking-tighter">Global Mobility & Visas. <br /> <span className="text-brand-orange">No Entity Required.</span></h3>
                            <p className="text-slate-600 max-w-sm font-medium text-lg">
                                Sponsor visas and manage relocation logistics across 50+ markets directly through our platforms entities.
                            </p>
                        </div>

                        {/* Floating Labels - Light Theme */}
                        <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                            {['🇺🇸 United States', '🇬🇧 United Kingdom', '🇮🇳 India', '🇸🇬 Singapore'].map((c, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        x: [0, 15, 0],
                                        y: [0, i % 2 === 0 ? 5 : -5, 0]
                                    }}
                                    transition={{
                                        delay: i * 0.3,
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="bg-white px-6 py-3 rounded-2xl shadow-xl border border-blue-100 text-xs font-semibold text-slate-700"
                                >
                                    {c}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default BentoGrid;