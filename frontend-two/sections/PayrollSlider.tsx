'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarClock, DollarSign, PieChart } from 'lucide-react';

const slides = [
    {
        id: 0,
        title: "Automated Payroll",
        desc: "Run payroll for your entire global team in one click. We handle taxes, benefits, and FX automatically.",
        icon: DollarSign,
        imgSrc: "/images/dashboard_overview.png",
    },
    {
        id: 1,
        title: "Time & Attendance",
        desc: "Daily working hours, holidays, and leave tracking. Confirm attendance accuracy and calculate payroll-ready hours.",
        icon: CalendarClock,
        imgSrc: "/images/dashboard_ui.png",
    },
    {
        id: 2,
        title: "Billable Tracking",
        desc: "Real-time visibility into billable hours and readiness for invoicing. Add commissions and approve timesheets instantly.",
        icon: PieChart,
        imgSrc: "/images/widgets_light.png",
    }
];

const PayrollSlider = () => {
    const [current, setCurrent] = useState(0);

    return (
        <section className="py-32 bg-white">
            <div className="w-full max-w-7xl mx-auto px-6">

                {/* Centered Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-24"
                >
                    <h2
                        className="font-black tracking-tighter text-brand-black mb-6"
                        style={{ fontSize: '5vw', lineHeight: '1' }}
                    >
                        Payroll & Time,<br />
                        <span className="text-brand-orange">Done Right.</span>
                    </h2>
                </motion.div>

                {/* Grid Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Interactive List */}
                    <div className="space-y-6">
                        {slides.map((slide, idx) => (
                            <div
                                key={idx}
                                onClick={() => setCurrent(idx)}
                                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${current === idx ? 'bg-gray-50 border-gray-200 shadow-md' : 'bg-transparent border-transparent hover:bg-gray-50'}`}
                            >
                                <div className="flex items-center gap-4 mb-2">
                                    <div className={`p-2.5 rounded-xl transition-all duration-300 border
                                        ${current === idx
                                            ? 'bg-white border-brand-orange text-brand-orange shadow-sm scale-110'
                                            : 'bg-white border-slate-100 text-slate-300'}`}>
                                        <slide.icon size={22} />
                                    </div>
                                    <h3 className={`text-xl font-bold transition-colors duration-300 ${current === idx ? 'text-brand-black' : 'text-brand-black/40'}`}>{slide.title}</h3>
                                </div>
                                <AnimatePresence>
                                    {current === idx && (
                                        <motion.p
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="text-brand-black/60 ml-12"
                                        >
                                            {slide.desc}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Right: Preview Image */}
                    <div className="flex flex-col gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                            className="relative h-[380px] md:h-[480px] w-full rounded-[3rem] group bg-slate-50 border border-slate-200/60 p-5 shadow-2xl overflow-hidden"
                        >
                            <div className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-inner bg-white">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={current}
                                        initial={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                        exit={{ opacity: 0, scale: 1.02, filter: 'blur(5px)' }}
                                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                        className="w-full h-full relative"
                                    >
                                        <img
                                            src={slides[current].imgSrc}
                                            className="w-full h-full object-cover object-top transition-transform duration-[3000ms] group-hover:scale-110"
                                            alt={slides[current].title}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-40" />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-orange/10 blur-3xl rounded-full pointer-events-none" />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PayrollSlider;
