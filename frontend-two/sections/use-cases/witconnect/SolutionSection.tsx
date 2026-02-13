'use client';
import { motion } from 'framer-motion';
import { Layers, CheckCircle2 } from 'lucide-react';

const SolutionSection = () => {
    return (
        <section className="py-32 lg:py-48 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold text-brand-orange tracking-widest uppercase mb-4"
                    >
                        The Solution
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative bg-[#f8f6f5] rounded-[3rem] border border-slate-100 p-8 md:p-20 overflow-hidden group hover:border-brand-orange/30 transition-colors duration-500 shadow-sm"
                >
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl group-hover:bg-brand-orange/10 transition-colors duration-500"></div>

                    <div className="relative z-10 grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-5">
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="bg-brand-orange text-white p-12 md:p-16 rounded-[2.5rem] shadow-2xl shadow-brand-orange/30 transform transition-all duration-500"
                            >
                                <Layers className="w-16 h-16 mb-8 text-white/90" />
                                <h3 className="text-4xl md:text-5xl font-black mb-6 leading-[0.95] tracking-tighter">Unified <br /> Operating Layer</h3>
                                <div className="w-16 h-1.5 bg-white/40 mb-8 rounded-full"></div>
                                <p className="text-white/90 font-bold text-xl leading-relaxed">
                                    A single source of truth for all global entities.
                                </p>
                            </motion.div>
                        </div>

                        <div className="lg:col-span-7">
                            <h4 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 tracking-tight">Structural Integration & Deployment</h4>
                            <p className="text-xl text-slate-500 font-medium mb-12 leading-relaxed">
                                Komp implemented a Unified Operating Layer that sat above the client's fragmented local systems. Instead of replacing every local provider, Komp acted as the translation layer, ingesting data from 12 different payroll and legal endpoints and normalizing it into one command center dashboard.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-10">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold text-slate-900">API Normalization</h5>
                                        <p className="text-slate-500 font-medium mt-1">Standardized data streams from all regions.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold text-slate-900">Real-time Compliance</h5>
                                        <p className="text-slate-500 font-medium mt-1">Automated flagging of regulatory risks.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SolutionSection;
