'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FileCheck,
    Users,
    CalendarClock,
    CreditCard,
    ShieldCheck,
    LineChart,
    ChevronRight,
    ChevronLeft
} from 'lucide-react';

const modules = [
    {
        id: 'activate',
        title: 'Activate',
        header: 'Global Onboarding',
        desc: 'Automated localized contracts and benefit enrollment in 150+ countries.',
        icon: FileCheck,
        color: 'from-orange-500 to-red-500',
        img: '/images/onboarding_step1.png',
        offset: '0%'
    },
    {
        id: 'workforce',
        title: 'Workforce',
        header: 'Universal Directory',
        desc: 'Single source of truth for EOR hires, contractors, and direct entities.',
        icon: Users,
        color: 'from-blue-500 to-indigo-600',
        img: '/images/dashboard_overview.png',
        offset: '15%'
    },
    {
        id: 'timeops',
        title: 'TimeOps',
        header: 'Absence & Attendance',
        desc: 'Localized holiday calendars and automated time-tracking logic.',
        icon: CalendarClock,
        color: 'from-teal-400 to-emerald-600',
        img: '/images/dashboard_ui.png',
        offset: '30%'
    },
    {
        id: 'payops',
        title: 'PayOps',
        header: 'One-Click Global Payroll',
        desc: 'Localized taxes and social contributions handled by our core engine.',
        icon: CreditCard,
        color: 'from-blue-600 to-indigo-700',
        img: '/images/dashboard_light.png',
        offset: '45%'
    },
    {
        id: 'governance',
        title: 'Governance',
        header: 'Legal Shield',
        desc: 'Proactive compliance monitoring and legislative change alerts.',
        icon: ShieldCheck,
        color: 'from-purple-500 to-pink-500',
        img: '/images/onboarding_step3.png',
        offset: '60%'
    },
    {
        id: 'insights',
        title: 'Insights',
        header: 'Advanced Analytics',
        desc: 'Real-time visibility into headcount costs and budget forecasting.',
        icon: LineChart,
        color: 'from-pink-500 to-rose-600',
        img: '/images/widgets_light.png',
        offset: '75%'
    }
];

const ProductModules = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <section className="relative pt-40 pb-20 bg-white overflow-hidden min-h-screen">
            <div className="container mx-auto px-6">

                {/* Centered Header */}
                <div className="text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-brand-orange font-bold uppercase tracking-[0.4em] text-xs mb-6"
                    >
                        Infrastructure
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.85] max-w-4xl mx-auto"
                    >
                        The Global <br />
                        <span className="text-gray-200">Expansion Stack.</span>
                    </motion.h2>
                </div>

                {/* THE "wow" INTERACTION: THE ISOMETRIC GLASS STACK */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

                    {/* LEFT: The 3D Stack Visualization */}
                    <div className="lg:col-span-12 relative h-[500px] md:h-[700px] flex items-center justify-center perspective-[2000px]">

                        {/* Navigation Arrows (Positioned as per user markings) */}
                        <div className="absolute left-0 top-10 z-[200]">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveIdx((prev) => (prev > 0 ? prev - 1 : modules.length - 1));
                                }}
                                className="w-16 h-16 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-2xl hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all group scale-90 lg:scale-100"
                            >
                                <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="absolute right-0 top-10 z-[200]">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveIdx((prev) => (prev < modules.length - 1 ? prev + 1 : 0));
                                }}
                                className="w-16 h-16 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-2xl hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all group scale-90 lg:scale-100"
                            >
                                <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="relative w-full max-w-4xl h-full flex items-center justify-center rotate-x-[50deg] rotate-z-[-25deg] transform-style-3d -translate-x-12 lg:-translate-x-20">


                            {modules.map((mod, idx) => {
                                const isActive = activeIdx === idx;
                                const isAbove = idx < activeIdx;

                                return (
                                    <motion.div
                                        key={mod.id}
                                        initial={false}
                                        animate={{
                                            z: isActive ? 200 : idx * 40,
                                            y: isActive ? -100 : 0,
                                            scale: isActive ? 1.05 : 1,
                                            opacity: isActive ? 1 : 0.4 + (idx * 0.1),
                                            filter: isActive ? 'blur(0px)' : `blur(${Math.abs(idx - activeIdx) * 2}px)`
                                        }}
                                        transition={{
                                            duration: 0.8,
                                            ease: [0.16, 1, 0.3, 1] // Premium Quintic Ease-out
                                        }}
                                        whileHover={{ y: isActive ? -110 : -10, transition: { duration: 0.2 } }}
                                        onClick={() => setActiveIdx(idx)}
                                        className={`absolute w-[80%] aspect-video rounded-[3rem] cursor-pointer shadow-2xl transition-all duration-700 bg-white border border-slate-100 overflow-hidden group`}
                                        style={{
                                            transformStyle: 'preserve-3d',
                                            zIndex: isActive ? 100 : 50 - Math.abs(idx - activeIdx)
                                        }}
                                    >
                                        {/* THE EXCLUSIVE TRIGGER (Handled via Click) */}
                                        <div
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setActiveIdx(idx);
                                            }}
                                            className="absolute left-0 top-0 bottom-0 w-24 z-[100] cursor-pointer group-hover:bg-brand-orange/5 transition-colors"
                                        />

                                        {/* Content inside the "Glass" layer */}
                                        <div className="relative w-full h-full p-8 flex flex-col">

                                            {/* Top Bar */}
                                            <div className="flex justify-between items-start mb-8">
                                                <div className={`p-4 rounded-2xl bg-gradient-to-br ${mod.color} text-white shadow-lg`}>
                                                    <mod.icon size={28} />
                                                </div>
                                                <div className="text-slate-300 font-mono text-[10px] uppercase tracking-widest">
                                                    Layer_{idx + 1} // {mod.id}
                                                </div>
                                            </div>

                                            {/* UI Preview Snippet */}
                                            <div className="flex-1 rounded-[2rem] bg-slate-50 border border-slate-100 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                                                <img src={mod.img} className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-100" alt="UI" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                                            </div>

                                            {/* Status Indicators */}
                                            <div className="mt-6 flex gap-4">
                                                <div className="h-1 flex-1 bg-slate-100 rounded-full overflow-hidden">
                                                    <motion.div
                                                        animate={{ width: isActive ? '100%' : '20%' }}
                                                        className={`h-full bg-gradient-to-r ${mod.color}`}
                                                    />
                                                </div>
                                                <div className="h-1 w-12 bg-slate-100 rounded-full" />
                                            </div>
                                        </div>

                                        {/* Glow Effect when active */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeGlow"
                                                className={`absolute -inset-10 bg-gradient-to-br ${mod.color} opacity-10 blur-[80px] -z-10`}
                                            />
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* RIGHT: Floating Detail Overlay (Switches with Active) */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-sm pointer-events-none translate-x-12 lg:translate-x-20">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIdx}
                                    initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-white/80 backdrop-blur-3xl border border-slate-100 p-12 rounded-[3.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.1)] pointer-events-auto"
                                >
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${modules[activeIdx].color} mb-8 flex items-center justify-center text-white`}>
                                        {/* Dynamic Icon */}
                                        {(() => {
                                            const Icon = modules[activeIdx].icon;
                                            return <Icon size={24} />;
                                        })()}
                                    </div>
                                    <h3 className="text-4xl font-black text-slate-950 mb-4 tracking-tighter">
                                        {modules[activeIdx].title}
                                    </h3>
                                    <p className="text-slate-500 text-lg leading-relaxed mb-8">
                                        {modules[activeIdx].desc}
                                    </p>
                                    <button className="flex items-center gap-2 text-slate-950 font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all">
                                        Explore Capability <ChevronRight size={16} />
                                    </button>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>

            </div>

            <style jsx>{`
                .perspective-[2000px] {
                    perspective: 2000px;
                }
                .rotate-x-[50deg] {
                    transform: rotateX(50deg);
                }
                .rotate-z-[-25deg] {
                    transform: rotateZ(-25deg);
                }
                .transform-style-3d {
                    transform-style: preserve-3d;
                }
            `}</style>
        </section>
    );
};

export default ProductModules;
