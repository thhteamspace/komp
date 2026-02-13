'use client';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

const ChallengeSection = () => {
    return (
        <section className="bg-white relative overflow-hidden">
            <div className="grid lg:grid-cols-2 min-h-[600px]">
                <div className="flex flex-col justify-center px-8 py-16 lg:p-20 lg:pr-16 order-2 lg:order-1 border-r border-gray-100">
                    <div className="max-w-xl ml-auto">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-sm font-bold text-brand-orange tracking-widest uppercase mb-6"
                        >
                            The Challenge
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-black text-slate-900 mb-10 leading-[0.95]"
                        >
                            Growth Was Ready.<br />
                            <span className="text-slate-400">Infrastructure Wasn’t.</span>
                        </motion.h3>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="prose prose-xl text-slate-600 font-medium leading-relaxed"
                        >
                            <p className="mb-8">
                                The client had secured Series D funding with a mandate for aggressive international expansion. However, their existing operational stack was fragmented across legacy systems.
                            </p>
                            <p className="mb-8">
                                Every new market entry created an exponential increase in administrative "drag"—legal entities, payroll silos, and disjointed compliance checks were slowing velocity to a crawl.
                            </p>
                            <p>
                                The executive team found themselves trapped in a reactive loop, managing structural fires instead of driving strategic growth. They needed a way to decouple expansion from complexity.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="mt-16 flex items-center gap-12"
                        >
                            <div>
                                <div className="text-5xl font-black text-slate-900 tracking-tighter">12+</div>
                                <div className="text-sm text-slate-400 font-bold uppercase tracking-wide mt-2">Markets Blocked</div>
                            </div>
                            <div className="w-px h-16 bg-slate-200"></div>
                            <div>
                                <div className="text-5xl font-black text-slate-900 tracking-tighter">400h</div>
                                <div className="text-sm text-slate-400 font-bold uppercase tracking-wide mt-2">Lost Monthly</div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="relative h-[500px] lg:h-auto order-1 lg:order-2 bg-[#f8f6f5] p-12 lg:pr-24 lg:py-16">
                    <img
                        alt="Global Fintech Network"
                        className="relative w-full h-full object-cover transition-all duration-700 rounded-3xl"
                        src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80"
                    />
                    <div className="absolute inset-12 lg:inset-y-16 lg:left-12 lg:right-24 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent rounded-3xl"></div>
                </div>
            </div>
        </section>
    );
};

export default ChallengeSection;
