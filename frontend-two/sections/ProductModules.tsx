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
    ArrowUpRight
} from 'lucide-react';

const modules = [
    {
        id: 'activate',
        title: 'Activate',
        header: 'Global Onboarding',
        desc: 'Automated localized contracts and benefit enrollment in 150+ countries. We handle the paperwork, you handle the welcome.',
        icon: FileCheck,
        color: 'text-orange-500',
        bg: 'bg-orange-50',
        img: '/images/onboarding_step1.png'
    },
    {
        id: 'workforce',
        title: 'Workforce',
        header: 'Universal Directory',
        desc: 'Single source of truth for EOR hires, contractors, and direct entities. Visualize your entire global footprint in one view.',
        icon: Users,
        color: 'text-blue-500',
        bg: 'bg-blue-50',
        img: '/images/dashboard_overview.png'
    },
    {
        id: 'timeops',
        title: 'TimeOps',
        header: 'Absence & Attendance',
        desc: 'Localized holiday calendars and automated time-tracking logic. Ensure accurate payroll inputs without the manual chase.',
        icon: CalendarClock,
        color: 'text-emerald-500',
        bg: 'bg-emerald-50',
        img: '/images/dashboard_ui.png'
    },
    {
        id: 'payops',
        title: 'PayOps',
        header: 'One-Click Global Payroll',
        desc: 'Localized taxes and social contributions handled by our core engine. Fund once in USD, we distribute globally.',
        icon: CreditCard,
        color: 'text-indigo-500',
        bg: 'bg-indigo-50',
        img: '/images/dashboard_light.png'
    },
    {
        id: 'governance',
        title: 'Governance',
        header: 'Legal Shield',
        desc: 'Proactive compliance monitoring and legislative change alerts. We track the laws so you don’t have to.',
        icon: ShieldCheck,
        color: 'text-purple-500',
        bg: 'bg-purple-50',
        img: '/images/onboarding_step3.png'
    },
    {
        id: 'insights',
        title: 'Insights',
        header: 'Advanced Analytics',
        desc: 'Real-time visibility into headcount costs and budget forecasting. Make data-driven decisions for your global workforce.',
        icon: LineChart,
        color: 'text-rose-500',
        bg: 'bg-rose-50',
        img: '/images/widgets_light.png'
    }
];

const ProductModules = () => {
    const [orderedModules, setOrderedModules] = useState(modules);

    // Logic: Send top card to back (Cycle)
    const rotateStack = () => {
        const newOrder = [...orderedModules];
        const first = newOrder.shift();
        if (first) newOrder.push(first);
        setOrderedModules(newOrder);
    };

    return (
        <section className="relative pt-20 pb-32 bg-slate-50 overflow-hidden min-h-screen flex flex-col items-center">

            <div className="w-full max-w-7xl mx-auto px-6 mb-48 text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-brand-blue font-bold uppercase tracking-[0.4em] text-xs mb-6"
                >
                    Infrastructure
                </motion.div>
                <div className="max-w-4xl mx-auto px-4">
                    <h2
                        className="font-black text-slate-950 tracking-tighter mb-6"
                        style={{ fontSize: '5vw', lineHeight: '1.1' }}
                    >
                        The Global Expansion Stack.
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-500 leading-relaxed">
                        Everything you need to hire, pay, and manage global teams.
                    </p>
                </div>
            </div>

            <div className="relative w-full max-w-5xl px-6 h-[500px] flex justify-center mt-8">
                {orderedModules.map((mod, index) => {
                    const isFront = index === 0;

                    // Cap visibilty depth so we see a nice stack of headers
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
                            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }} // Faster smooth flow
                            className={`absolute top-0 w-full md:w-[90%] lg:w-full bg-white rounded-[2rem] border border-slate-200 shadow-2xl overflow-hidden cursor-pointer transition-shadow duration-300 transform-gpu origin-top ${isFront
                                ? 'h-[450px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]' // Reduced height from 550px
                                : 'h-20 shadow-none hover:brightness-95 bg-gray-50'
                                }`}
                        >
                            <div className="flex flex-col h-full">

                                {/* HEADER ROW (Always Visible - The 'Tab') */}
                                <div className={`flex items-center gap-4 px-8 h-20 pt-4 border-b ${isFront ? 'border-slate-100' : 'border-transparent'} transition-all`}>
                                    <div className={`p-2 rounded-xl ${isFront ? mod.bg + ' ' + mod.color : 'bg-white text-slate-400 border border-slate-100'}`}>
                                        <mod.icon size={20} />
                                    </div>
                                    <h4 className={`font-bold tracking-tight text-lg ${isFront ? 'text-slate-900' : 'text-slate-500'}`}>
                                        {mod.header}
                                    </h4>
                                </div>

                                {/* BODY CONTENT (Only Rendered/Visible for Front Card) */}
                                <div className={`flex-1 flex flex-col md:flex-row transition-opacity duration-300 ${isFront ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>

                                    {/* Left Text */}
                                    <div className="flex-1 p-8 md:p-10 pt-6 md:pt-8 flex flex-col justify-start"> {/* Align Top with padding */}
                                        <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
                                            {mod.title}
                                        </h3>
                                        <p className="text-slate-500 text-base leading-relaxed mb-6 max-w-md">
                                            {mod.desc}
                                        </p>
                                        <button className="flex items-center gap-2 text-sm font-bold text-slate-900 border-b-2 border-slate-100 pb-1 hover:border-brand-orange hover:text-brand-orange transition-all w-fit">
                                            Explore Features <ChevronRight size={16} />
                                        </button>
                                    </div>

                                    {/* Right Image */}
                                    <div className="hidden md:block flex-1 bg-slate-50 relative overflow-hidden h-full border-l border-slate-100 p-4"> {/* Slight padding for breathing room */}
                                        <div className="w-full h-full bg-white rounded-2xl shadow-sm border border-slate-100 p-4 overflow-hidden flex items-center justify-center">
                                            <img
                                                src={mod.img}
                                                alt={mod.title}
                                                className="w-full h-auto max-h-full object-contain rounded-lg shadow-sm"
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>



        </section>
    );
};

export default ProductModules;
