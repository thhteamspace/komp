'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/Button';

export default function HeroModern() {
    return (
        <section className="pt-32 pb-20 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="relative z-10 text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 inline-block"
                    >
                        <span className="px-3 py-1 rounded-full border border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-50">
                            Global Hiring Platform
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl lg:text-7xl font-black text-[#111827] mb-6 tracking-tighter leading-[1.05]"
                    >
                        Hire <span className="text-brand-orange">Anyone Anywhere</span> <br />
                        Without the Legal Complexity
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-500 mb-10 max-w-lg font-medium leading-relaxed"
                    >
                        No local entities needed. KOMP handles payroll, compliance, and taxes so you can build your global team in minutes, not months.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 items-start"
                    >
                        <Button className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-orange-200 transition-all hover:scale-105">
                            Start Hiring Now
                        </Button>
                        <Button variant="outline" className="px-8 py-4 rounded-full font-bold text-lg border-2 hover:bg-slate-50">
                            Book a Demo
                        </Button>
                    </motion.div>
                </div>

                {/* Right Visual - Map Image Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="relative"
                >
                    <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-4 shadow-2xl">
                        <div className="aspect-[4/3] bg-white rounded-[2.5rem] relative overflow-hidden border border-slate-50 flex items-center justify-center">
                            {/* Simple Abstract Map Placeholder */}
                            <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-center bg-no-repeat bg-contain opacity-10"></div>

                            {/* Floating User Cards Mockup */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-[20%] left-[20%] bg-white p-2 pr-4 rounded-full shadow-lg border border-slate-100 flex items-center gap-3"
                                >
                                    <img src="https://i.pravatar.cc/100?u=1" className="w-8 h-8 rounded-full" alt="User" />
                                    <div className="text-xs">
                                        <p className="font-bold text-slate-800">Sarah J.</p>
                                        <p className="text-slate-400 text-[10px]">Germany</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute top-[50%] right-[20%] bg-white p-2 pr-4 rounded-full shadow-lg border border-slate-100 flex items-center gap-3"
                                >
                                    <img src="https://i.pravatar.cc/100?u=5" className="w-8 h-8 rounded-full" alt="User" />
                                    <div className="text-xs">
                                        <p className="font-bold text-slate-800">Kenji T.</p>
                                        <p className="text-slate-400 text-[10px]">Japan</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="absolute bottom-[20%] left-[40%] bg-white p-2 pr-4 rounded-full shadow-lg border border-slate-100 flex items-center gap-3"
                                >
                                    <img src="https://i.pravatar.cc/100?u=8" className="w-8 h-8 rounded-full" alt="User" />
                                    <div className="text-xs">
                                        <p className="font-bold text-slate-800">Maria S.</p>
                                        <p className="text-slate-400 text-[10px]">Brazil</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Trusted By Logos */}
            <div className="border-t border-slate-100 pt-8 mt-12 pb-8 max-w-7xl mx-auto px-6">
                <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Trusted by Global Leaders</p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Text placeholders for brands as requested/implied style */}
                    {['ZOOM', 'SIEMENS', 'ADOBE', 'WEBFLOW', 'QUORA', 'DEEL'].map((brand, i) => (
                        <span key={i} className="text-xl md:text-2xl font-black text-slate-300 hover:text-slate-800 cursor-default">{brand}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}
