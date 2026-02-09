'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Target, Play, Users, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import Button from '@/components/Button';

const userAvatars = [
    { id: 1, x: '20%', y: '45%', img: 'https://i.pravatar.cc/150?u=1' },
    { id: 2, x: '75%', y: '60%', img: 'https://i.pravatar.cc/150?u=2' },
    { id: 3, x: '45%', y: '80%', img: 'https://i.pravatar.cc/150?u=3' },
    { id: 4, x: '85%', y: '40%', img: 'https://i.pravatar.cc/150?u=4' },
    { id: 5, x: '15%', y: '70%', img: 'https://i.pravatar.cc/150?u=5' },
];

const orbitalAvatars = [
    { id: 6, angle: 45, radius: 300, img: 'https://i.pravatar.cc/150?u=6' },
    { id: 7, angle: 135, radius: 300, img: 'https://i.pravatar.cc/150?u=7' },
];

const Global3DGlobe = () => {
    return (
        <section id="coverage" className="py-32 bg-[#0a0a0a] relative overflow-hidden flex flex-col items-center text-white">
            {/* Dark Aesthetic Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/5 blur-[150px] rounded-full" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
                {/* Header Content */}
                <div className="text-center mb-16 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 mb-8 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md"
                    >
                        <span className="text-xs font-black text-slate-300 tracking-[0.2em] uppercase">Global Workforce Platform</span>
                    </motion.div>

                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8 max-w-4xl">
                        Creating Global Connections And <br />
                        <span className="text-slate-400">Building Local Communities</span>
                    </h2>

                    <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
                        <Button variant="premium" className="rounded-full px-8 h-12 bg-white text-black hover:bg-slate-200 border-none font-bold">
                            Join the community
                        </Button>
                        <button className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors font-bold group">
                            <div className="w-10 h-10 rounded-full bg-brand-orange/20 border border-brand-orange/30 flex items-center justify-center group-hover:bg-brand-orange/30 transition-all">
                                <Play size={16} fill="currentColor" />
                            </div>
                            Watch a demo
                        </button>
                    </div>
                </div>

                {/* The Map Interface */}
                <div className="relative w-full aspect-[21/10] mt-12 flex items-center justify-center">
                    {/* Dotted World Map Background */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-60">
                        <svg className="w-full h-full text-slate-700/40" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice">
                            <pattern id="dotPattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="1.5" fill="currentColor" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#dotPattern)" mask="url(#mapMask)" />
                            {/* Simple mask for world shape representation - in a real app this would be a complex SVG path */}
                            <defs>
                                <mask id="mapMask">
                                    <image href="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" width="1000" height="500" />
                                </mask>
                            </defs>
                        </svg>
                    </div>

                    {/* Orbital Rings */}
                    <div className="absolute w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none" />
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none"
                    />

                    {/* User Avatars Mapped to Locations */}
                    {userAvatars.map((user) => (
                        <motion.div
                            key={user.id}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            className="absolute z-20"
                            style={{ left: user.x, top: user.y }}
                        >
                            <div className="relative group">
                                <div className="w-12 h-12 rounded-full border-2 border-brand-orange p-1 bg-[#0a0a0a] overflow-hidden transition-transform group-hover:scale-110">
                                    <img src={user.img} alt="User" className="w-full h-full rounded-full object-cover" />
                                </div>
                                <div className="absolute inset-0 rounded-full animate-ping bg-brand-orange/30 -z-10" />
                                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#0a0a0a]" />
                            </div>
                        </motion.div>
                    ))}

                    {/* Connections / Arcs (Visual Decoration) */}
                    <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none opacity-20">
                        <path d="M 200,225 Q 500,50 850,200" stroke="#FF8C1A" strokeWidth="1" fill="none" strokeDasharray="5,5" />
                        <path d="M 150,350 Q 400,450 750,300" stroke="#FF8C1A" strokeWidth="1" fill="none" strokeDasharray="5,5" />
                    </svg>

                    {/* Stats HUD Style Label (Bottom) */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="bg-white/5 border border-white/10 px-6 py-3 rounded-full backdrop-blur-md text-xs font-bold text-slate-400 tracking-wider"
                        >
                            Join over <span className="text-white">+35k</span> community
                        </motion.div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes orbit {
                    from { transform: rotate(0deg) translateX(300px) rotate(0deg); }
                    to { transform: rotate(360deg) translateX(300px) rotate(-360deg); }
                }
                .avatar-orbit {
                    animation: orbit 40s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default Global3DGlobe;
