'use client';
import { motion } from 'framer-motion';
import { BarChart3 } from 'lucide-react';

import { ArrowRight } from 'lucide-react';
import Button from '@/components/Button';

const Hero = () => {
    return (
        <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                    {/* Left Content */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="inline-flex px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-[11px] font-black tracking-widest uppercase mb-10 border border-brand-orange/20">
                                Case Study: Expansion
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-black tracking-tighter mb-10 leading-[0.9] uppercase">
                                <span className="text-brand-orange block">Global Expansion</span>
                                <span className="text-slate-950 block">Without Structural Drag</span>
                            </h1>

                            <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-xl leading-relaxed font-bold">
                                How TechFlow scaled operations into 4 new APAC markets in under 90 days using Komp's unified operating layer.
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    <img src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=64&h=64" alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                                    <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=64&h=64" alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                                    <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-500 shadow-sm">
                                        +4
                                    </div>
                                </div>
                                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-tight">
                                    Growth Team Lead <br /> & Operations
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Visual */}
                    <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
                        <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                            <div className="relative w-full h-full bg-[#f8fafc] rounded-[4rem] p-10 flex items-center justify-center border border-slate-100/50 shadow-2xl transform rotate-3">
                                <img
                                    src="/images/image copy 11.png"
                                    alt="Global Expansion Mapping"
                                    className="w-full h-full object-contain drop-shadow-xl opacity-90"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
