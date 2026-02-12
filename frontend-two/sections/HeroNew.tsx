'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Play, ArrowRight } from 'lucide-react';

const HeroNew = () => {
    return (
        <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Content */}
                    <div className="flex-1 max-w-2xl text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm font-bold text-slate-500 tracking-wide uppercase mb-6"
                        >
                            Global Workforce Operating System
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl lg:text-[5rem] font-black text-slate-900 tracking-tight leading-[0.95] mb-8"
                        >
                            Hire <span className="text-brand-orange">Anyone <br /> Anywhere</span> <br />
                            Without the Legal <br />
                            Complexity
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-500 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium"
                        >
                            Turn global expansion into a predictable operational advantage.
                            KOMP provides the sovereign legal, tax, and payroll infrastructure to deploy talent in 150+ countries—instantly audit-ready.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                        >
                            <button className="h-14 px-8 bg-brand-orange hover:bg-orange-600 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/25 whitespace-nowrap">
                                Calculate Expansion Liability
                            </button>
                            <button className="h-14 px-8 bg-white border-2 border-slate-200 hover:border-brand-orange hover:text-brand-orange text-slate-900 rounded-full font-bold transition-all whitespace-nowrap">
                                See the Platform
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center justify-center lg:justify-start gap-6 mt-10"
                        >
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <img key={i} src={`https://i.pravatar.cc/100?u=${i + 20}`} className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                                ))}
                            </div>
                            <div className="text-sm font-semibold text-slate-500 max-w-[200px] text-left leading-tight">
                                Trusted by <span className="text-slate-900 font-bold">1,200+ Growth-Stage Companies</span> and Enterprises
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Visual - Global Team Overview Map */}
                    <div className="flex-1 w-full max-w-2xl lg:-mt-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 relative group cursor-pointer"
                        >
                            {/* Main Visual Image - Full Card Size */}
                            <div className="relative aspect-[4/3] w-full">
                                <Image
                                    src="/images/Gemini_Generated_Image_jumi0bjumi0bjumi.png"
                                    alt="Global Team Overview"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    priority
                                />
                            </div>
                        </motion.div>

                        {/* Background Decor */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-orange/5 to-purple-500/5 rounded-full blur-3xl -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroNew;
