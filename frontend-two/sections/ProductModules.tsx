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
    ArrowUpRight,
    Lock,
    Bell
} from 'lucide-react';
import TimesheetPreview from '@/components/TimesheetPreview';

const modules = [
    {
        id: 'activate',
        title: 'KOMP Activate',
        header: 'Client Onboarding',
        desc: 'Automated workflow for company-wide implementation. Standardize localized contracts and benefit frameworks in 48 hours.',
        icon: FileCheck,
        color: 'text-orange-500',
        bg: 'bg-orange-50',
        img: '/images/onboarding_step1.png'
    },
    {
        id: 'workforce',
        title: 'KOMP Workforce',
        header: 'Contractor Management',
        desc: 'Complete lifecycle management for global contractors. Localized IP assignments, W8-BEN automation, and secure payments.',
        icon: Users,
        color: 'text-blue-500',
        bg: 'bg-blue-50',
        img: '/images/dashboard_overview.png'
    },
    {
        id: 'timeops',
        title: 'KOMP TimeOps',
        header: 'Universal Timesheets',
        desc: 'Unified tracking for global hours and absence management. Synchronizes directly with payroll to eliminate manual drift.',
        icon: CalendarClock,
        color: 'text-emerald-500',
        bg: 'bg-emerald-50',
        img: '/images/dashboard_ui.png'
    },
    {
        id: 'payops',
        title: 'KOMP PayOps',
        header: 'Payroll & Invoicing',
        desc: 'Execute multi-currency payroll through a single funding vault. Automated tax calculations and social contribution filings.',
        icon: CreditCard,
        color: 'text-indigo-500',
        bg: 'bg-indigo-50',
        img: '/images/dashboard_light.png'
    },
    {
        id: 'governance',
        title: 'KOMP Governance',
        header: 'Roles & Access',
        desc: 'Enterprise-grade RBAC and compliance audit logs. Define granular entity permissions and data visibility across regions.',
        icon: Lock,
        color: 'text-purple-500',
        bg: 'bg-purple-50',
        img: '/images/onboarding_step3.png'
    },
    {
        id: 'insights',
        title: 'KOMP Insights',
        header: 'Notifications & Search',
        desc: 'Global search and smart alerts for legislative shifts. Real-time cost visibility and proactive compliance notifications.',
        icon: Bell,
        color: 'text-rose-500',
        bg: 'bg-rose-50',
        img: '/images/widgets_light.png'
    }
];

const ProductModules = () => {
    const [orderedModules, setOrderedModules] = useState(modules);

    return (
        <section id="platform" className="relative pt-32 pb-64 bg-slate-50 overflow-hidden min-h-screen flex flex-col items-center scroll-mt-32">

            {/* Premium Header Block */}
            <div className="w-full bg-brand-orange pt-24 pb-48 px-6 text-center transform skew-y-0 relative z-0 mb-[-100px]">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-white/80 font-bold text-sm uppercase tracking-widest mb-4"
                    >
                        Unified Infrastructure
                    </motion.div>
                    <h2
                        className="font-black text-white tracking-tighter mb-6 leading-tight"
                        style={{ fontSize: '4vw' }}
                    >
                        KOMP – Premium Module Framework
                    </h2>
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto font-medium">
                        A modular ecosystem designed for the modern global enterprise. Activate only what you need.
                    </p>
                </div>
            </div>

            {/* Content Container - Pulled up to overlap */}
            <div className="w-full px-6 relative z-10">

                <div className="relative w-full max-w-5xl px-6 h-[500px] flex justify-center mt-8">
                    {orderedModules.map((mod, index) => {
                        const isFront = index === 0;

                        // Cap visibility depth so we see a nice stack of headers
                        const stackIndex = index > 3 ? 3 : index;

                        return (
                            <motion.div
                                key={mod.id}
                                onClick={() => {
                                    if (isFront) return;

                                    // Bring clicked back-card to front smoothly
                                    const newOrder = [...orderedModules];
                                    const item = newOrder.splice(index, 1)[0];
                                    newOrder.unshift(item);
                                    setOrderedModules(newOrder);
                                }}
                                initial={false}
                                animate={{
                                    y: stackIndex * -50,
                                    scale: 1 - (stackIndex * 0.05),
                                    zIndex: modules.length - index,
                                    opacity: index > 3 ? 0 : 1
                                }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className={`absolute top-0 w-full md:w-[90%] lg:w-full bg-white rounded-[4rem] border border-slate-200 shadow-2xl overflow-hidden cursor-pointer transform-gpu origin-top ${isFront
                                    ? 'h-[500px] shadow-[0_40px_100px_rgba(0,0,0,0.08)]'
                                    : 'h-24 shadow-none hover:brightness-95 bg-gray-50'
                                    }`}
                            >
                                <div className="flex flex-col h-full">

                                    {/* HEADER ROW (Always Visible) */}
                                    <div className={`flex items-center gap-6 px-12 h-24 pt-4 border-b ${isFront ? 'border-slate-100' : 'border-transparent'} transition-all`}>
                                        <div className={`p-3 rounded-2xl ${isFront ? mod.bg + ' ' + mod.color : 'bg-white text-slate-300 border border-slate-100 shadow-sm'}`}>
                                            <mod.icon size={22} />
                                        </div>
                                        <div>
                                            <span className={`text-[12px] font-bold block mb-1 ${isFront ? 'text-slate-400' : 'text-slate-300'}`}>
                                                {mod.header}
                                            </span>
                                            <h4 className={`font-bold tracking-tight text-xl ${isFront ? 'text-slate-950' : 'text-slate-400'}`}>
                                                {mod.title}
                                            </h4>
                                        </div>
                                        {!isFront && (
                                            <div className="ml-auto">
                                                <ArrowUpRight size={20} className="text-slate-200" />
                                            </div>
                                        )}
                                    </div>

                                    {/* BODY CONTENT */}
                                    <div className={`flex-1 flex flex-col md:flex-row transition-opacity duration-500 ${isFront ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>

                                        {/* Left Text */}
                                        <div className="flex-1 p-12 md:p-16 flex flex-col justify-center">
                                            <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-sm font-medium">
                                                {mod.desc}
                                            </p>
                                            <button className="flex items-center gap-3 text-sm font-semibold text-slate-950 border-b-2 border-slate-100 pb-2 hover:border-brand-orange hover:text-brand-orange transition-all w-fit group">
                                                Explore {mod.title.split(' ')[1]} Logic
                                                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </div>

                                        {/* Right Image/Visual */}
                                        <div className="hidden md:block flex-1 bg-slate-50 relative overflow-hidden h-full border-l border-slate-100 p-8">
                                            <div className="w-full h-full bg-white rounded-3xl shadow-xl border border-slate-100 p-6 overflow-hidden flex items-center justify-center relative group-hover:scale-[1.02] transition-transform duration-700">
                                                <img
                                                    src={mod.id === 'timeops' ? '/images/image.png' : mod.img}
                                                    alt={mod.title}
                                                    className="w-full h-auto max-h-full object-contain rounded-xl saturate-[0.8]"
                                                />
                                                {/* Decorative UI overlay */}
                                                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProductModules;
