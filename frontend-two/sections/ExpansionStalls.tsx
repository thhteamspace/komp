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
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="mb-24 max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        Why Global <br />
                        Expansion Usually <span className="text-brand-orange">Stalls</span>
                    </h2>
                    <p className="text-lg text-slate-500 max-w-xl">
                        Traditional methods are slow, risky, and expensive. Don't let compliance hurdles block your C-level vision.
                        Legacy systems weren't built for velocity.
                    </p>
                </div>

                <div className="space-y-32">
                    {/* Item 1 - Image Left, Text Right */}
                    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 w-full"
                        >
                            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] w-full relative group bg-slate-100 flex items-center justify-center border border-slate-200">
                                <div className="text-slate-400 font-bold tracking-widest uppercase">Entity Maze Visual</div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 w-full"
                        >
                            <div className="w-16 h-1 bg-brand-orange mb-8" />
                            <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-brand-orange mb-6">
                                <Building2 size={24} />
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 mb-4">The Entity Trap</h3>
                            <p className="text-slate-500 text-lg leading-relaxed mb-8">
                                Setting up legal entities involves months of bureaucracy. From local bank accounts to director requirements, it's a distraction from your core business.
                            </p>
                            <div className="pl-6 border-l-2 border-brand-orange/30">
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Reality</p>
                                <p className="text-slate-900 font-bold">6-12 Months per country launch.</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Item 2 - Text Left, Image Right */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 w-full"
                        >
                            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] w-full relative group bg-brand-orange flex items-center justify-center">
                                {/* Abstract Visual for Compliance */}
                                <div className="text-white/90 text-6xl font-black tracking-tighter opacity-20 select-none">
                                    global link
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 w-full"
                        >
                            <div className="w-16 h-1 bg-brand-orange mb-8" />
                            <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-brand-orange mb-6">
                                <ShieldAlert size={24} />
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 mb-4">The Compliance Gap</h3>
                            <p className="text-slate-500 text-lg leading-relaxed mb-8">
                                Navigating local labor laws, benefits, and tax codes creates enormous legal exposure. Minor slip-ups prevent massive fines and legal integrity risks.
                            </p>
                            <div className="pl-6 border-l-2 border-brand-orange/30">
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Risk</p>
                                <p className="text-slate-900 font-bold">$100k+ fines per misclassified worker.</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Item 3 - Image Left, Text Right */}
                    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 w-full"
                        >
                            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] w-full relative group bg-slate-100 flex items-center justify-center border border-slate-200">
                                <span className="text-slate-400 font-bold tracking-widest uppercase">Financial Dashboard Visual</span>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 w-full"
                        >
                            <div className="w-16 h-1 bg-brand-orange mb-8" />
                            <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-brand-orange mb-6">
                                <Banknote size={24} />
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 mb-4">The Shadow Payroll</h3>
                            <p className="text-slate-500 text-lg leading-relaxed mb-8">
                                Managing multiple payroll providers leads to fractured data. Different spreadsheets, different currencies, and no real-time visibility into costs.
                            </p>
                            <div className="pl-6 border-l-2 border-brand-orange/30">
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Impact</p>
                                <p className="text-slate-900 font-bold">0% Real-time cost visibility.</p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ExpansionStalls;
