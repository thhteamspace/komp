'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, ShieldCheck, Zap, TrendingUp } from 'lucide-react';
import Button from '@/components/Button';

const CostCalculator = () => {
    const [employees, setEmployees] = useState(10);
    const [years, setYears] = useState(1);

    // Hypothetical savings logic: $5,000 saved per employee per year vs traditional EOR fees/compliance risks
    const savings = employees * years * 5200;

    return (
        <section id="calculator" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-orange/10 blur-[100px] rounded-full -translate-x-1/2" />

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
                <div className="bg-slate-50 border border-slate-200 rounded-[3.5rem] p-6 md:p-12 shadow-2xl overflow-hidden relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Interactive Side */}
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                                    <Calculator size={20} />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">ROI Calculator</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-slate-950 mb-6 tracking-tight">
                                See the Impact of <br />
                                <span className="text-brand-orange">Optimized Expansion.</span>
                            </h2>

                            <p className="text-slate-500 font-medium mb-12 max-w-md">
                                Adjust the sliders to estimate how much your organization can save in compliance overhead and EOR aggregator fees.
                            </p>

                            <div className="space-y-12 mb-12">
                                <div>
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="text-sm font-bold text-slate-700 uppercase tracking-widest">Global Hires</span>
                                        <span className="text-2xl font-black text-brand-orange">{employees}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="1"
                                        max="100"
                                        value={employees}
                                        onChange={(e) => setEmployees(parseInt(e.target.value))}
                                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-orange"
                                    />
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="text-sm font-bold text-slate-700 uppercase tracking-widest">Scale Period (Years)</span>
                                        <span className="text-2xl font-black text-brand-orange">{years}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="1"
                                        max="5"
                                        value={years}
                                        onChange={(e) => setYears(parseInt(e.target.value))}
                                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-orange"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Result Side */}
                        <div className="relative">
                            <motion.div
                                animate={{ scale: [1, 1.01, 1] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="bg-slate-950 rounded-[2.5rem] p-8 md:p-10 text-white shadow-[0_30px_60px_rgba(0,0,0,0.2)] relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 blur-[100px] pointer-events-none" />

                                <div className="relative z-10 text-center">
                                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange mb-4">Estimated Platform ROI</div>
                                    <motion.div
                                        key={savings}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-6xl md:text-8xl font-black tracking-tighter mb-4"
                                    >
                                        ${savings.toLocaleString()}
                                    </motion.div>
                                    <p className="text-slate-400 text-sm font-medium mb-10">
                                        Projected savings in aggregator fees, tax filing automation, and risk mitigation.
                                    </p>

                                    <div className="grid grid-cols-2 gap-4 mb-10">
                                        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                            <div className="text-brand-orange mb-2"><ShieldCheck size={20} className="mx-auto" /></div>
                                            <div className="text-[10px] font-bold text-white/40 uppercase">Compliance Risk</div>
                                            <div className="text-sm font-bold">Mitigated</div>
                                        </div>
                                        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                            <div className="text-green-500 mb-2"><TrendingUp size={20} className="mx-auto" /></div>
                                            <div className="text-[10px] font-bold text-white/40 uppercase">Gains</div>
                                            <div className="text-sm font-bold">12.5% YoY</div>
                                        </div>
                                    </div>

                                    <Link href="#knowledge">
                                        <Button fullWidth variant="primary" className="h-16 rounded-2xl">
                                            Request Full Assessment <ArrowRight className="ml-2 w-5 h-5" />
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CostCalculator;
