'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, CalendarClock, DollarSign, PieChart } from 'lucide-react';

const slides = [
    {
        id: 0,
        title: "Automated Payroll",
        desc: "Run payroll for your entire global team in one click. We handle taxes, benefits, and FX automatically.",
        icon: DollarSign,
        imgSrc: "/images/dashboard_overview.png",
        imgClass: "object-contain p-6"
    },
    {
        id: 1,
        title: "Time & Attendance",
        desc: "Daily working hours, holidays, and leave tracking. Confirm attendance accuracy and calculate payroll-ready hours.",
        icon: CalendarClock,
        imgSrc: "/images/dashboard_ui.png",
        imgClass: "object-contain p-6"
    },
    {
        id: 2,
        title: "Billable Tracking",
        desc: "Real-time visibility into billable hours and readiness for invoicing. Add commissions and approve timesheets instantly.",
        icon: PieChart,
        imgSrc: "/images/widgets_light.png",
        imgClass: "object-contain p-6"
    }
];

const PayrollSlider = () => {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((p) => (p + 1) % slides.length);
    const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);

    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-20"
                    >
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-brand-black mb-6">
                            Payroll & Time,<br />
                            <span className="text-brand-orange">Done Right.</span>
                        </h2>

                        <div className="space-y-6">
                            {slides.map((slide, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setCurrent(idx)}
                                    className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${current === idx ? 'bg-gray-50 border-gray-200 shadow-md' : 'bg-transparent border-transparent hover:bg-gray-50'}`}
                                >
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className={`p-2 rounded-lg ${current === idx ? 'bg-brand-orange text-white' : 'bg-gray-100 text-gray-400'}`}>
                                            <slide.icon size={20} />
                                        </div>
                                        <h3 className={`text-xl font-bold ${current === idx ? 'text-brand-black' : 'text-brand-black/40'}`}>{slide.title}</h3>
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
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="relative h-[450px] md:h-[600px] w-full bg-slate-100 rounded-[3rem] p-4 lg:p-8 shadow-2xl overflow-hidden flex items-center justify-center border border-slate-200"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="w-full h-full bg-white rounded-[2rem] overflow-hidden border-[12px] border-white shadow-xl ring-1 ring-slate-200"
                            >
                                <img
                                    src={slides[current].imgSrc}
                                    className={`w-full h-full transition-all duration-1000 ${slides[current].imgClass}`}
                                    alt={slides[current].title}
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Arrows */}
                        <div className="absolute bottom-8 right-8 flex gap-3">
                            <button onClick={prev} className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 text-brand-black hover:scale-105 transition-all"><ChevronLeft /></button>
                            <button onClick={next} className="p-3 rounded-full bg-brand-black shadow-lg hover:bg-gray-800 text-white hover:scale-105 transition-all"><ChevronRight /></button>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section >
    );
};

export default PayrollSlider;
