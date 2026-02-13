'use client';

import { motion } from 'framer-motion';
import { LayoutDashboard, MapPin, BadgeCheck, Settings } from 'lucide-react';

const HRISRelocation = () => {
    const services = [
        {
            title: "Free Global HRIS",
            desc: "Manage time off, expenses, and documents for your entire global team in one free, centralized system.",
            placeholder: "HRIS PLACEHOLDER",
            icon: <LayoutDashboard className="w-10 h-10" />
        },
        {
            title: "Seamless Relocation",
            desc: "Move talent across borders effortlessly. We handle logistics, temporary housing, and settling-in services.",
            placeholder: "RELOCATION PLACEHOLDER",
            icon: <MapPin className="w-10 h-10" />
        },
        {
            title: "Visa & Immigration",
            desc: "Navigate complex immigration laws with our in-house experts. We secure the right visas for your global hires.",
            placeholder: "VISA SUPPORT PLACEHOLDER",
            icon: <BadgeCheck className="w-10 h-10" />
        }
    ];

    return (
        <section className="relative bg-white py-32 overflow-hidden border-t border-slate-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header - Matching Image Exactly */}
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-[#FF8C1A] mb-8"
                    >
                        <Settings className="w-5 h-5" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-[4.8rem] font-bold text-[#1A1A1A] tracking-tighter leading-[1.05] mb-8"
                    >
                        <span className="text-[#FF8C1A]">One system</span> to support your people, wherever work takes them.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-[#5F6B7C] leading-relaxed max-w-3xl mx-auto font-medium opacity-80"
                    >
                        From daily HR management to complex international relocations, Komp provides the infrastructure to support your team's lifecycle globally.
                    </motion.p>
                </div>

                {/* Grid - Matching Image Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {services.map((service, i) => (
                        <div key={i} className="flex flex-col">
                            {/* Visual Box (Placeholder style from image) */}
                            {/* Visual Box (Placeholder style from image) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-[#eff2f6] rounded-[2rem] aspect-[4/3] flex flex-col items-center justify-center mb-8 relative group overflow-hidden"
                            >
                                {service.title === "Free Global HRIS" ? (
                                    <img
                                        src="/images/Gemini_Generated_Image_wwo9jnwwo9jnwwo9.png"
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                ) : service.title === "Seamless Relocation" ? (
                                    <img
                                        src="/images/Gemini_Generated_Image_xd4bhcxd4bhcxd4b.png"
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                ) : service.title === "Visa & Immigration" ? (
                                    <img
                                        src="/images/image copy 6.png"
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                ) : (
                                    <>
                                        <div className="text-slate-300 transform group-hover:scale-110 transition-transform duration-700">
                                            {service.icon}
                                        </div>
                                        <span className="mt-6 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                                            {service.placeholder}
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                                    </>
                                )}
                            </motion.div>

                            {/* Text Content Below (Left Aligned) */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: (i * 0.1) + 0.2 }}
                                className="text-left"
                            >
                                <h3 className="text-xl lg:text-[1.5rem] font-bold text-[#1A1A1A] mb-3 tracking-tight">
                                    {service.title}
                                </h3>
                                <p className="text-sm lg:text-[14.5px] text-[#5F6B7C] leading-relaxed font-medium">
                                    {service.desc}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HRISRelocation;
