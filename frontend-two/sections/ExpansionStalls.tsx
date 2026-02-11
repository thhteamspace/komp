'use client';

import { motion } from 'framer-motion';
import { Building2, ShieldAlert, Banknote, ArrowRight } from 'lucide-react';

const expansionStalls = [
    {
        title: "The Entity Trap",
        description: "Local legal setup usually takes 6+ months per country.",
        komp: "KOMP enables full-compliant global go-live in just 48 hours.",
        icon: Building2,
        color: 'text-amber-600',
        bg: 'bg-amber-50'
    },
    {
        title: "The Compliance Loss",
        description: "Contractor misclassification fines can exceed $100k per hire.",
        komp: "We provide the legal guardrails to protect your balance sheet.",
        icon: ShieldAlert,
        color: 'text-red-500',
        bg: 'bg-red-50'
    },
    {
        title: "The Wasted Payroll",
        description: "Payroll delays cause immediate attrition and distrust.",
        komp: "We maintain a 99.8% on-time payroll accuracy rate.",
        icon: Banknote,
        color: 'text-emerald-600',
        bg: 'bg-emerald-50'
    },
];

const ExpansionStalls = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4"
                    >
                        Why <span className="text-brand-orange">Global Expansion</span> Usually Stalls
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 font-medium text-lg"
                    >
                        Legacy providers are not built for speed. We are.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {expansionStalls.map((stall, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 hover:shadow-xl hover:bg-white transition-all duration-300 group flex flex-col items-center text-center"
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${stall.bg} ${stall.color}`}>
                                <stall.icon size={32} />
                            </div>

                            <h4 className="text-xl font-bold text-slate-900 mb-3">{stall.title}</h4>

                            <p className="text-slate-500 mb-8 text-sm leading-relaxed font-medium">
                                {stall.description}
                            </p>

                            <div className="mt-auto w-full pt-6 border-t border-slate-200/50">
                                <div className="flex items-center justify-center gap-2 mb-1">
                                    <div className="w-4 h-4 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">K</div>
                                    <span className="text-xs font-bold text-slate-900">KOMP Advantage</span>
                                </div>
                                <p className="text-xs font-bold text-slate-600 leading-tight">
                                    {stall.komp}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="inline-flex items-center gap-2 text-slate-900 font-bold border-b-2 border-brand-orange hover:text-brand-orange cursor-pointer transition-colors pb-1"
                    >
                        See Full Risk Analysis <ArrowRight size={18} />
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default ExpansionStalls;
