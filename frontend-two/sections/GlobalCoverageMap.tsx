'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Target, ShieldCheck, Zap, Globe, Navigation } from 'lucide-react';
import { useState, useEffect } from 'react';

const locations = [
    { name: 'London', region: 'Europe', x: 50, y: 35 },
    { name: 'Singapore', region: 'Asia', x: 80, y: 65 },
    { name: 'New York', region: 'USA', x: 25, y: 40 },
    { name: 'Mumbai', region: 'India', x: 72, y: 55 },
    { name: 'Sydney', region: 'Australia', x: 88, y: 82 },
    { name: 'Sao Paulo', region: 'Brazil', x: 35, y: 72 },
];

const Global3DGlobe = () => {
    const [hoveredLocation, setHoveredLocation] = useState<typeof locations[0] | null>(null);

    return (
        <section id="coverage" className="py-40 bg-[#f8fafc] relative overflow-hidden flex flex-col items-center">
            {/* Premium Mesh Gradient Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-orange/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-400/10 blur-[120px] rounded-full" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-[0.03]" />
            </div>

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 mb-10"
                    >
                        <span className="text-base font-bold text-brand-blue tracking-wide">Proprietary Global Infrastructure</span>
                    </motion.div>

                    <h2 className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-tight mb-8">
                        The World, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-[#FFB366]">Under One Roof.</span>
                    </h2>
                </div>

                {/* THE "REAL" 3D ROTATING GLOBE INTERFACE */}
                <div className="relative w-full aspect-square md:aspect-[21/9] flex items-center justify-center">

                    {/* GLOBE CONTAINER */}
                    <div className="relative w-[350px] h-[350px] md:w-[600px] md:h-[600px] flex items-center justify-center">

                        {/* THE GLOBE SPHERE */}
                        <div className="absolute inset-0 rounded-full border border-slate-200 bg-white shadow-[0_0_100px_rgba(255,140,26,0.1),inset_0_0_50px_rgba(0,0,0,0.02)] overflow-hidden">

                            {/* INFINITE ROTATING MAP TEXTURE */}
                            <motion.div
                                animate={{ x: ['0%', '-50%'] }}
                                transition={{
                                    duration: 40,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                className="absolute inset-0 h-full flex"
                                style={{ width: '200%', maskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }}
                            >
                                <div className="relative h-full w-1/2">
                                    <img
                                        src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=2000&auto=format&fit=crop"
                                        alt="Map Texture"
                                        className="h-full w-full object-cover opacity-60 saturate-50"
                                    />
                                    {/* MAPPED HOTSPOTS */}
                                    {locations.map((loc) => (
                                        <div
                                            key={loc.name}
                                            className="absolute cursor-pointer group/node"
                                            style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                                            onMouseEnter={() => setHoveredLocation(loc)}
                                            onMouseLeave={() => setHoveredLocation(null)}
                                        >
                                            <div className="w-4 h-4 rounded-full bg-brand-orange border-2 border-white shadow-lg group-hover/node:scale-150 transition-transform duration-300" />
                                            <div className="absolute inset-0 w-full h-full rounded-full animate-ping bg-brand-orange opacity-40 pointer-events-none" />
                                        </div>
                                    ))}
                                </div>
                                <div className="relative h-full w-1/2">
                                    <img
                                        src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=2000&auto=format&fit=crop"
                                        alt="Map Texture Dupe"
                                        className="h-full w-full object-cover opacity-60 saturate-50"
                                    />
                                    {/* HOTSPOTS DUPE */}
                                    {locations.map((loc) => (
                                        <div
                                            key={loc.name + '-dupe'}
                                            className="absolute cursor-pointer group/node"
                                            style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                                            onMouseEnter={() => setHoveredLocation(loc)}
                                            onMouseLeave={() => setHoveredLocation(null)}
                                        >
                                            <div className="w-4 h-4 rounded-full bg-brand-orange border-2 border-white shadow-lg group-hover/node:scale-150 transition-transform duration-300" />
                                            <div className="absolute inset-0 w-full h-full rounded-full animate-ping bg-brand-orange opacity-40 pointer-events-none" />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* GLASS OVERLAY (FOR 3D FEEL) */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-slate-200/20 via-transparent to-white/40 pointer-events-none" />
                            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_80px_rgba(255,140,26,0.05)] pointer-events-none" />
                        </div>

                        {/* FLOATING DETAIL CARD - POPS UP NEAR THE GLOBE */}
                        <AnimatePresence>
                            {hoveredLocation && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, x: 20 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, x: 20 }}
                                    className="absolute -right-4 md:-right-24 top-1/4 z-50 bg-white p-8 rounded-[3rem] shadow-[0_40px_80px_rgba(0,0,0,0.1)] border border-slate-100 min-w-[300px]"
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-xl bg-brand-orange flex items-center justify-center text-white">
                                            <Target size={20} />
                                        </div>
                                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                                            Verified Hub
                                        </div>
                                    </div>
                                    <h4 className="text-3xl font-black text-slate-950 mb-2">{hoveredLocation.name}</h4>
                                    <p className="text-slate-500 font-medium mb-8 leading-tight">
                                        100% Direct Entity. <br />
                                        <span className="text-brand-orange">No aggregates. No middlemen.</span>
                                    </p>

                                    <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                                        <ShieldCheck size={18} className="text-emerald-500" />
                                        <span className="text-xs font-bold text-slate-800 uppercase tracking-widest">Compliance Active</span>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* ORBITAL RINGS */}
                        <div className="absolute inset-[-40px] border border-slate-200 rounded-full opacity-20 animate-slow-spin-icon pointer-events-none" />
                        <div className="absolute inset-[-80px] border border-slate-100 rounded-full opacity-10 animate-slow-spin-reverse pointer-events-none" />
                    </div>

                    {/* Stats HUD (Bottom Left) */}
                    <div className="absolute bottom-10 left-10 hidden xl:block z-40">
                        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl flex gap-12">
                            <div>
                                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Network Nodes</div>
                                <div className="text-4xl font-black text-slate-950">1,242</div>
                            </div>
                            <div>
                                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Daily Syncs</div>
                                <div className="text-4xl font-black text-brand-orange">450k+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes slow-spin-icon {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes slow-spin-reverse {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }
                .animate-slow-spin-icon {
                    animation: slow-spin-icon 40s linear infinite;
                }
                .animate-slow-spin-reverse {
                    animation: slow-spin-reverse 60s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default Global3DGlobe;
