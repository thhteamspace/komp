'use client';

import { motion } from 'framer-motion';
import { Globe, Zap, ShieldCheck, PlayCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Button from '@/components/Button';

const ServicesHero = () => {
    return (
        <section className="relative pt-64 pb-32 overflow-hidden bg-[#f8f6f5] min-h-screen">
            {/* Background Gradient Blurs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl z-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-80 h-80 bg-[#FF8C1A]/10 rounded-full blur-[100px]" />
                <div className="absolute top-40 right-10 w-[400px] h-[400px] bg-orange-200/20 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto mb-24">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/80 text-[#FF8C1A] text-xs font-bold tracking-wide uppercase mb-8 border border-[#FF8C1A]/20"
                    >
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF8C1A] animate-pulse" />
                        New: Advanced Analytics Dashboard
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-[5.5rem] font-black tracking-tight text-[#1A1A1A] leading-[1.1] mb-8"
                    >
                        One infrastructure to <span className="text-[#FF8C1A]">hire, pay, and manage</span> your global workforce.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-[#5F6B7C] max-w-3xl mx-auto leading-relaxed mb-12"
                    >
                        Streamline international operations with the world's most compliant platform. Onboard talent in 150+ countries in minutes, not months.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-5"
                    >
                        <Button className="w-full sm:w-auto px-10 py-5 text-lg font-black bg-[#FF8C1A] text-white hover:bg-orange-600 rounded-full shadow-2xl shadow-orange-600/30 transition-all transform hover:-translate-y-1">
                            Start Now
                        </Button>
                        <Button variant="outline" className="w-full sm:w-auto px-10 py-5 text-lg font-black bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-full shadow-sm flex items-center justify-center gap-3">
                            <PlayCircle className="w-6 h-6" />
                            Book a Demo
                        </Button>
                    </motion.div>
                </div>

                {/* Hero Illustration - Now only reveals on scroll */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative max-w-6xl mx-auto mb-32 px-4"
                >
                    <div className="rounded-[3rem] overflow-hidden relative group">
                        {/* Premium Image Implementation with focus on center */}
                        <div className="relative w-full aspect-[21/9]">
                            <Image
                                src="/images/Gemini_Generated_Image_2dtn9m2dtn9m2dtn.png"
                                alt="Services Infrastructure Visualization"
                                fill
                                className="object-cover scale-110"
                                priority
                            />

                            {/* 4-Way Vignette to make borders disappear into background */}
                            {/* Top Fade */}
                            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#f8f6f5] via-[#f8f6f5]/40 to-transparent z-10" />
                            {/* Bottom Fade */}
                            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f8f6f5] via-[#f8f6f5]/40 to-transparent z-10" />
                            {/* Left Fade - Reduced width */}
                            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#f8f6f5] via-[#f8f6f5]/20 to-transparent z-10" />
                            {/* Right Fade - Reduced width */}
                            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#f8f6f5] via-[#f8f6f5]/20 to-transparent z-10" />

                            {/* Stronger central focus overlay */}
                            <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#f8f6f5]/20 pointer-events-none z-0" />
                        </div>
                    </div>
                </motion.div>

                {/* 3 Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            title: "Global Compliance",
                            desc: "Automatic localized contracts and tax handling for over 150 countries worldwide.",
                            icon: <Globe className="w-7 h-7" />
                        },
                        {
                            title: "Instant Onboarding",
                            desc: "Send offers and get new team members set up with equipment in days, not weeks.",
                            icon: <Zap className="w-7 h-7" />
                        },
                        {
                            title: "Risk Mitigation",
                            desc: "Ironclad IP protection and misclassification guarantees for every contractor you hire.",
                            icon: <ShieldCheck className="w-7 h-7" />
                        }
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i }}
                            className="bg-white rounded-[2rem] p-10 shadow-lg shadow-slate-200/40 border border-slate-100 text-left hover:border-[#FF8C1A]/30 transition-all group"
                        >
                            <div className="w-14 h-14 bg-[#FF8C1A]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#FF8C1A] group-hover:text-white transition-colors text-[#FF8C1A]">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-black text-[#1A1A1A] mb-4 tracking-tight">{feature.title}</h3>
                            <p className="text-[#5F6B7C] text-base leading-relaxed font-medium">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesHero;
