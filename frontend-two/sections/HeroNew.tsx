'use client';

import { motion } from 'framer-motion';
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
                            className="bg-white rounded-[2rem] p-6 shadow-2xl border border-slate-100 relative"
                        >
                            <div className="text-center mb-8">
                                <h3 className="font-bold text-slate-900 text-lg">Global Team Overview</h3>
                                <div className="h-1 w-12 bg-brand-orange/30 mx-auto mt-2 rounded-full"></div>
                            </div>

                            {/* Map Container */}
                            <div className="relative aspect-[4/3] bg-slate-50/50 rounded-xl overflow-hidden border border-slate-100">
                                {/* World Map Background Placeholder */}
                                <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-contain bg-center bg-no-repeat" />

                                {/* Central Node - Play Button */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                    <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30 cursor-pointer hover:scale-110 transition-transform">
                                        <Play fill="white" className="text-white ml-1" size={24} />
                                    </div>
                                    <div className="absolute inset-0 bg-brand-orange rounded-full animate-ping opacity-20 -z-10"></div>
                                </div>

                                {/* Employee Nodes */}
                                {/* Positions are relative % to mimic the map layout */}
                                {[
                                    { top: '30%', left: '20%', name: 'Michael Smith', img: 'https://i.pravatar.cc/100?u=12' },
                                    { top: '25%', left: '45%', name: 'David Johnson', img: 'https://i.pravatar.cc/100?u=15' },
                                    { top: '35%', left: '80%', name: 'Hiroshi Tanaka', img: 'https://i.pravatar.cc/100?u=22' },
                                    { top: '60%', left: '30%', name: 'Isabella Martinez', img: 'https://i.pravatar.cc/100?u=33' },
                                    { top: '55%', left: '70%', name: 'Ava Chen', img: 'https://i.pravatar.cc/100?u=44' },
                                    { top: '75%', left: '85%', name: 'Daniel Nguyen', img: 'https://i.pravatar.cc/100?u=55' },
                                ].map((person, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.6 + (i * 0.1) }}
                                        style={{ top: person.top, left: person.left }}
                                        className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-10"
                                    >
                                        <div className="w-10 h-10 rounded-full border-2 border-white shadow-md overflow-hidden relative group cursor-pointer hover:scale-110 transition-transform">
                                            <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
                                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                                        </div>
                                        <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm border border-slate-100 text-[10px] font-bold text-slate-700 whitespace-nowrap">
                                            {person.name}
                                        </div>

                                        {/* Connecting Line (Simplified visual) */}
                                        <svg className="absolute top-1/2 left-1/2 w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10 overflow-visible opacity-30 text-brand-orange">
                                            <line x1="50%" y1="50%" x2="50%" y2={i % 2 === 0 ? "0%" : "100%"} stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="hidden" />
                                            {/* Note: In a real complex map, we'd calculate line coordinates to center. Pure CSS lines are tricky with scattered points. 
                                                For this mock, we'll assume the central "gravity" pulls them visually. 
                                            */}
                                        </svg>
                                    </motion.div>
                                ))}
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
