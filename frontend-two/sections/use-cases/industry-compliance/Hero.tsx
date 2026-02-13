'use client';
import { motion } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';
import Button from '@/components/Button';

const Hero = () => {
    return (
        <header className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#f8f6f5] overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-full opacity-30 pointer-events-none overflow-hidden text-brand-orange">
                <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-3xl"></div>
                <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-wider mb-8">
                            Case Study: Interactive Explorer
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-slate-900 leading-[0.95] mb-8">
                            Specialized Compliance for <span className="text-brand-orange">High-Stakes</span> Industries
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium mb-12 max-w-lg">
                            When standard protocols fail, enterprise leaders turn to Komp. We dissect the unique regulatory frameworks of specialized sectors to deliver precision compliance that accelerates innovation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-8 items-center">
                            <Link href="#explore">
                                <Button
                                    className="bg-brand-orange hover:bg-orange-600 text-white text-lg font-bold py-5 px-10 rounded-full h-auto shadow-lg border-none transition-all hover:scale-105"
                                >
                                    Choose an Industry to Explore
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-brand-orange/20 rounded-[2.5rem] blur-3xl opacity-30"></div>
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 bg-white aspect-[4/3] group">
                            <img
                                alt="Abstract visualization of digital security network"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-10 left-10 right-10 text-white">
                                <div className="text-[10px] font-bold text-brand-orange/80 uppercase tracking-[0.2em] mb-2">Data Integrity Status</div>
                                <div className="text-2xl md:text-3xl font-black tracking-tight">SECURE • ENCRYPTED • VERIFIED</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </header>
    );
};

import Link from 'next/link';
export default Hero;
