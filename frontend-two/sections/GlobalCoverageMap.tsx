'use client';

import { motion } from 'framer-motion';
import { Target, Play, Globe, Shield } from 'lucide-react';
import Button from '@/components/Button';

const userAvatars = [
    // North America
    { id: 1, x: '18%', y: '35%', img: 'https://i.pravatar.cc/150?u=1' },
    { id: 2, x: '25%', y: '42%', img: 'https://i.pravatar.cc/150?u=2' },
    // South America
    { id: 3, x: '32%', y: '70%', img: 'https://i.pravatar.cc/150?u=3' },
    { id: 4, x: '28%', y: '58%', img: 'https://i.pravatar.cc/150?u=4' },
    // Europe
    { id: 5, x: '48%', y: '32%', img: 'https://i.pravatar.cc/150?u=5' },
    { id: 6, x: '52%', y: '38%', img: 'https://i.pravatar.cc/150?u=6' },
    // Africa
    { id: 7, x: '50%', y: '55%', img: 'https://i.pravatar.cc/150?u=7' },
    { id: 8, x: '55%', y: '72%', img: 'https://i.pravatar.cc/150?u=8' },
    // Asia
    { id: 9, x: '72%', y: '40%', img: 'https://i.pravatar.cc/150?u=9' },
    { id: 10, x: '78%', y: '35%', img: 'https://i.pravatar.cc/150?u=10' },
    { id: 11, x: '68%', y: '50%', img: 'https://i.pravatar.cc/150?u=11' },
    { id: 12, x: '82%', y: '52%', img: 'https://i.pravatar.cc/150?u=12' },
    // Australia
    { id: 13, x: '85%', y: '80%', img: 'https://i.pravatar.cc/150?u=13' },
    // Extra symbolic nodes for density
    { id: 14, x: '40%', y: '45%', img: 'https://i.pravatar.cc/150?u=14' },
    { id: 15, x: '60%', y: '30%', img: 'https://i.pravatar.cc/150?u=15' },
    { id: 16, x: '15%', y: '65%', img: 'https://i.pravatar.cc/150?u=16' },
];

const Global3DGlobe = () => {
    return (
        <section id="coverage" className="py-32 bg-[#0a0a0a] relative overflow-hidden flex flex-col items-center text-white border-t border-white/5">
            {/* Background Glows for Atmosphere */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-brand-orange/5 blur-[150px] rounded-full opacity-50" />
            </div>

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
                {/* Symbolic Header */}
                <div className="text-center mb-16 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 mb-8"
                    >
                        <span className="text-base font-bold text-brand-blue tracking-wide">Scale without borders</span>
                    </motion.div>

                    <h2
                        className="text-5xl md:text-[5vw] font-black tracking-tighter leading-[0.95] mb-8 max-w-5xl mx-auto"
                    >
                        A Global Infrastructure <br />
                        <span className="text-brand-orange">Built for Limitless Scale</span>
                    </h2>

                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
                        Unified payroll and compliance infrastructure spanning over <span className="text-white font-bold">150+ countries.</span>
                        One platform to connect your global workforce effortlessly.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <Button variant="premium" className="rounded-full px-8 h-12 bg-brand-orange text-white hover:bg-brand-orange/90 border-none font-bold">
                            View Global Solutions
                        </Button>
                        <div className="flex items-center gap-3 text-slate-400 font-bold border-l border-white/10 pl-6 ml-2">
                            <Shield size={18} className="text-brand-orange" />
                            <span className="text-sm tracking-wide">Enterprise Compliance Guaranteed</span>
                        </div>
                    </div>
                </div>

                {/* Symbolic Global Interface */}
                <div className="relative w-full aspect-[21/10] mt-12 flex items-center justify-center">
                    {/* Dark World Map (Symbolic Background) */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-40">
                        <svg className="w-full h-full text-slate-500" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice">
                            <defs>
                                <pattern id="dotPatternSmall" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                                    <circle cx="2" cy="2" r="1.2" fill="currentColor" />
                                </pattern>
                                <mask id="mapMask">
                                    <image href="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" width="1000" height="500" />
                                </mask>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#dotPatternSmall)" mask="url(#mapMask)" />
                        </svg>
                    </div>

                    {/* Orbital Scale Indicators */}
                    <div className="absolute w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none" />
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[850px] h-[850px] border border-white/5 rounded-full pointer-events-none border-dashed"
                    />

                    {/* Workforce Distribution Points (Symbolic) */}
                    {userAvatars.map((user) => (
                        <motion.div
                            key={user.id}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: user.id * 0.1 }}
                            className="absolute z-20"
                            style={{ left: user.x, top: user.y }}
                        >
                            <div className="relative group">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-brand-orange/50 p-1 bg-[#0a0a0a] overflow-hidden">
                                    <img src={user.img} alt="" className="w-full h-full rounded-full object-cover grayscale opacity-80" />
                                </div>
                                <div className="absolute inset-0 rounded-full animate-ping bg-brand-orange/20 -z-10" />
                            </div>
                        </motion.div>
                    ))}

                    {/* Infrastructure Arcs */}
                    <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none opacity-20">
                        <motion.path
                            d="M 200,225 Q 500,50 850,200"
                            stroke="#FF8C1A"
                            strokeWidth="1"
                            fill="none"
                            strokeDasharray="5,10"
                            animate={{ strokeDashoffset: [0, -30] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.path
                            d="M 150,350 Q 400,450 750,300"
                            stroke="#FF8C1A"
                            strokeWidth="1"
                            fill="none"
                            strokeDasharray="5,10"
                            animate={{ strokeDashoffset: [30, 0] }}
                            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.path
                            d="M 300,400 Q 550,200 800,450"
                            stroke="#FF8C1A"
                            strokeWidth="0.5"
                            fill="none"
                            strokeDasharray="4,8"
                            animate={{ strokeDashoffset: [0, -40] }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="opacity-30"
                        />
                        <motion.path
                            d="M 250,250 Q 500,500 750,200"
                            stroke="#FF8C1A"
                            strokeWidth="0.5"
                            fill="none"
                            strokeDasharray="6,12"
                            animate={{ strokeDashoffset: [20, 0] }}
                            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                            className="opacity-30"
                        />
                    </svg>

                    {/* Key Scale Metric */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white/5 border border-white/10 px-8 py-4 rounded-full backdrop-blur-xl flex items-center gap-4 shadow-[0_0_30px_rgba(255,140,26,0.1)]"
                        >
                            <div className="flex -space-x-2">
                                {[10, 11, 12].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] overflow-hidden bg-slate-800">
                                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <span className="text-sm font-bold text-slate-300 tracking-wider">
                                Direct Presence in <span className="text-brand-orange">150+ Countries</span>
                            </span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Global3DGlobe;
