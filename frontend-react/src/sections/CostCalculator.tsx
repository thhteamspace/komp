

import { Link } from 'react-router-dom';
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
        <section id="calculator" className="py-24 bg-white relative overflow-hidden scroll-mt-32">
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-orange/10 blur-[100px] rounded-full -translate-x-1/2" />

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
                <div className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-6 md:p-10 shadow-xl overflow-hidden relative max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                        {/* Interactive Side */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                                    <Calculator size={16} />
                                </div>
                                <span className="text-base font-bold text-brand-blue">ROI Calculator</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-4 tracking-tight">
                                See the Impact of <br />
                                <span className="text-brand-orange">Optimized Expansion.</span>
                            </h2>

                            <p className="text-slate-500 text-sm font-medium mb-10 max-w-sm">
                                Adjust the sliders to estimate how much your organization can save in compliance overhead and EOR aggregator fees.
                            </p>

                            <div className="space-y-8 mb-8">
                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-[11px] font-bold text-slate-700 uppercase tracking-widest">Global Hires</span>
                                        <span className="text-xl font-bold text-brand-orange">{employees}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="1"
                                        max="100"
                                        value={employees}
                                        onChange={(e) => setEmployees(parseInt(e.target.value))}
                                        className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-orange"
                                    />
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-[11px] font-bold text-slate-700 uppercase tracking-widest">Scale Period (Years)</span>
                                        <span className="text-xl font-bold text-brand-orange">{years}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="1"
                                        max="5"
                                        value={years}
                                        onChange={(e) => setYears(parseInt(e.target.value))}
                                        className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-orange"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Result Side */}
                        <div className="relative">
                            <motion.div
                                animate={{ scale: [1, 1.01, 1] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="bg-slate-950 rounded-[2rem] p-8 text-white shadow-[0_25px_50px_rgba(0,0,0,0.15)] relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/15 blur-[80px] pointer-events-none" />

                                <div className="relative z-10 text-center">
                                    <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-orange/80 mb-4">Estimated Platform ROI</div>
                                    <motion.div
                                        key={savings}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-5xl md:text-7xl font-bold tracking-tighter mb-4"
                                    >
                                        ${savings.toLocaleString()}
                                    </motion.div>
                                    <p className="text-slate-400 text-[13px] font-medium mb-8">
                                        Projected savings in aggregator fees, tax filing automation, and risk mitigation.
                                    </p>

                                    <div className="grid grid-cols-2 gap-3 mb-8">
                                        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                            <div className="text-brand-orange mb-2"><ShieldCheck size={16} className="mx-auto" /></div>
                                            <div className="text-[9px] font-bold text-white/40 uppercase">Compliance Risk</div>
                                            <div className="text-xs font-bold">Mitigated</div>
                                        </div>
                                        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                            <div className="text-green-500 mb-2"><TrendingUp size={16} className="mx-auto" /></div>
                                            <div className="text-[9px] font-bold text-white/40 uppercase">Gains</div>
                                            <div className="text-xs font-bold">12.5% YoY</div>
                                        </div>
                                    </div>

                                    <Link to="#knowledge">
                                        <Button fullWidth variant="primary" className="h-14 rounded-full text-sm font-medium">
                                            Request Full Assessment <ArrowRight className="ml-2 w-4 h-4" />
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
