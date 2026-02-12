'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';


const UnifiedDashboard = () => {
    return (
        <section className="py-24 bg-[#FF8C1A] overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Content */}
                    <div className="flex-1 text-white">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl lg:text-7xl font-black tracking-tighter leading-tight mb-8"
                        >
                            One Dashboard. <br />
                            Your Entire <br />
                            Global Workforce.
                        </motion.h2>
                        <p className="text-xl text-white/90 font-medium leading-relaxed max-w-lg mb-8">
                            KOMP is your Global Operating Infrastructure. Bring contractors, EOR employees, and Entity payroll into one unified audit-ready view.
                        </p>
                        <ul className="space-y-3 text-white/80 font-medium mb-12">
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-brand-orange" />
                                Compliance Health Score & Liability Shield
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-brand-orange" />
                                Real-Time Consolidated Payroll Feed
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-brand-orange" />
                                Automated Tax & Benefit Filings
                            </li>
                        </ul>
                    </div>

                    {/* Right Visual - Dashboard Mockup */}
                    <div className="flex-1 w-full">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="bg-slate-100 rounded-[2rem] shadow-2xl overflow-hidden relative z-10 transform rotate-1 hover:rotate-0 transition-transform duration-500 h-[400px] border border-slate-200">
                                <Image
                                    src="/images/Gemini_Generated_Image_w24y11w24y11w24y.png"
                                    alt="Live Dashboard View"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default UnifiedDashboard;
