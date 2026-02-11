'use client';

import { motion } from 'framer-motion';

const CEOPerspective = () => {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
                        CEOs don’t care about <span className="text-brand-orange">“hiring.”</span> <br className="hidden md:block" />
                        They care about the speed of expansion.
                    </h2>

                    <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto mb-16">
                        They usually assume global hiring takes 6+ months and requires establishing new entities. We prove them wrong.
                    </p>

                    {/* Central Visual - Abstract Globe/Expansion Concept */}
                    <div className="relative w-full max-w-2xl mx-auto aspect-[16/9] flex items-center justify-center">
                        <div className="absolute inset-0 bg-brand-orange/5 blur-[100px] rounded-full opacity-50 pointer-events-none"></div>

                        {/* Placeholder for "optimized data AI image" - Using a subtle grid globe + data points */}
                        <div className="w-full h-full bg-slate-50 border border-slate-100 rounded-[3rem] overflow-hidden relative shadow-2xl flex items-center justify-center">
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white via-white/80 to-transparent z-10"></div>

                            {/* Abstract Globe Lines */}
                            <svg className="absolute w-[120%] h-[120%] opacity-20 animate-[spin_60s_linear_infinite]" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-brand-orange" />
                                <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-slate-400" strokeDasharray="4 2" />
                                <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-brand-orange" />
                                <path d="M10,50 L90,50 M50,10 L50,90" stroke="currentColor" strokeWidth="0.2" className="text-slate-300" />
                            </svg>

                            {/* Data Points */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="absolute top-1/4 left-1/4 w-3 h-3 bg-brand-orange rounded-full shadow-[0_0_15px_rgba(255,140,26,0.6)] z-20"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                                className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)] z-20"
                            />

                            <div className="text-center z-20 mt-32">
                                <span className="inline-block bg-white px-6 py-2 rounded-full shadow-lg border border-slate-100 text-sm font-bold text-slate-800">
                                    Global Expansion Velocity: <span className="text-green-500">10x</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CEOPerspective;
