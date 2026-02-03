'use client';

import { motion } from 'framer-motion';
import { Wallet, ShieldCheck, Globe, Users, TrendingUp, ArrowUpRight } from 'lucide-react';

const BentoGrid = () => {
    return (
        <section className="py-32 bg-white relative selection:bg-brand-orange/20 overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-block px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-brand-orange font-bold text-xs uppercase tracking-widest mb-6"
                    >
                        Intelligence Hub
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-slate-950 mb-6 tracking-tight"
                    >
                        Global Visibility. <br /> <span className="text-gray-400">Zero Blindspots.</span>
                    </motion.h2>
                </div>

                {/* Cohesive Light Premium Grid */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 h-auto">

                    {/* 📸 01: Workforce - Hero (Span 3) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="md:col-span-3 min-h-[500px] rounded-[3.5rem] bg-[#F8F9FB] border border-gray-100 p-12 relative overflow-hidden group hover:shadow-2xl transition-all duration-700"
                    >
                        <div className="relative z-20">
                            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 text-brand-blue">
                                <Users size={28} />
                            </div>
                            <h3 className="text-4xl font-bold text-slate-950 mb-4 tracking-tight">Workforce Command</h3>
                            <p className="text-slate-500 max-w-sm text-lg leading-relaxed">
                                A living directory of every employee, contractor, and EOR hire.
                            </p>
                        </div>

                        {/* Floating Dashboard Widget */}
                        <motion.div
                            whileHover={{ y: -10, rotate: -1 }}
                            className="absolute -right-12 -bottom-12 w-[80%] h-[60%] bg-white rounded-[2rem] shadow-[0_40px_80px_rgba(0,0,0,0.08)] border border-gray-100 p-8 pt-10 group-hover:bg-gray-50 transition-colors"
                        >
                            <img src="/images/dashboard_overview.png" className="w-[150%] max-w-none opacity-90 rounded-xl shadow-sm" alt="UI" />
                        </motion.div>
                    </motion.div>

                    {/* 💸 02: Payroll - NOW LIGHT & COHESIVE (Span 2) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="md:col-span-2 min-h-[500px] rounded-[3.5rem] bg-white border border-gray-200 p-12 relative overflow-hidden group hover:shadow-2xl transition-all duration-700"
                    >
                        <div className="relative z-20">
                            <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mb-8 text-green-600 border border-green-100">
                                <Wallet size={28} />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-950 mb-4 tracking-tight">Real-time Spend</h3>
                            <p className="text-slate-500 text-lg leading-relaxed">
                                Complete transparency into payroll costs and localized taxes.
                            </p>

                            {/* Premium Stat Widget */}
                            <div className="mt-12 p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm group-hover:bg-white transition-colors duration-500">
                                <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Monthly Burn Rate
                                </div>
                                <div className="text-5xl font-black text-slate-950 tracking-tighter mb-4">$4.2M</div>
                                <div className="flex items-center gap-2 text-green-600 text-sm font-bold">
                                    <TrendingUp size={16} /> +12.5% vs Last Month
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* ⚖️ 03: Compliance (Span 2) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="md:col-span-2 min-h-[400px] rounded-[3rem] bg-orange-50 border border-orange-100 p-12 relative overflow-hidden group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-8 text-brand-orange shadow-sm">
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-950 mb-3">Compliance Hub</h3>
                        <p className="text-slate-600 mb-8 font-medium">
                            Automated legal audits for every contract.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {['SOC2', 'GDPR', 'ISO 27001'].map((tag) => (
                                <span key={tag} className="px-3 py-1 rounded-full bg-white text-slate-600 text-[10px] font-bold border border-orange-200">{tag}</span>
                            ))}
                        </div>
                    </motion.div>

                    {/* 🌍 04: Global Presence (Span 3) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="md:col-span-3 min-h-[400px] rounded-[3rem] bg-blue-50 border border-blue-100 p-12 relative overflow-hidden group flex items-center"
                    >
                        <div className="flex-1 relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 text-brand-blue">
                                <Globe size={24} />
                            </div>
                            <h3 className="text-4xl font-bold text-slate-950 mb-4 tracking-tighter">150+ Countries. <br /> One Logic.</h3>
                            <p className="text-slate-600 max-w-xs font-medium">
                                Local entities and banking systems managed for you.
                            </p>
                        </div>

                        {/* Floating Labels */}
                        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 opacity-80">
                            {['🇺🇸 USA', '🇬🇧 UK', '🇮🇳 IND', '🇸🇬 SGP'].map((c, i) => (
                                <motion.div key={i} animate={{ x: [0, 5, 0] }} transition={{ delay: i * 0.2, duration: 4, repeat: Infinity }} className="bg-white px-4 py-2 rounded-2xl shadow-sm border border-blue-100 text-xs font-bold text-slate-700">
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
