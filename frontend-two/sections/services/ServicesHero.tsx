'use client';

import { motion } from 'framer-motion';
import { Globe, Zap, ShieldCheck, PlayCircle, ArrowRight } from 'lucide-react';
import Button from '@/components/Button';

const ServicesHero = () => {
    return (
        <section className="relative pt-24 pb-32 overflow-hidden bg-[#f8f6f5]">
            {/* Background Gradient Blurs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl z-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-80 h-80 bg-[#FF8C1A]/10 rounded-full blur-[100px]" />
                <div className="absolute top-40 right-10 w-[400px] h-[400px] bg-orange-200/20 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto mb-12">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/80 text-[#FF8C1A] text-xs font-bold tracking-wide uppercase mb-8 border border-[#FF8C1A]/20"
                    >
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF8C1A] animate-pulse" />
                        New: Advanced Analytics Dashboard
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-[5.5rem] font-black tracking-tight text-[#1A1A1A] leading-[1.1] mb-8"
                    >
                        One infrastructure to <span className="text-[#FF8C1A]">hire, pay, and manage</span> your global workforce.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-[#5F6B7C] max-w-3xl mx-auto leading-relaxed mb-12"
                    >
                        Streamline international operations with the world's most compliant platform. Onboard talent in 150+ countries in minutes, not months.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
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

                {/* Hero Illustration Placeholder - Stylized */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="relative max-w-6xl mx-auto mb-20 px-4"
                >
                    <div className="bg-[#F2F4F7] rounded-[2.5rem] border border-slate-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden aspect-[16/8] flex flex-col items-center justify-center relative group">
                        {/* Placeholder Icon */}
                        <div className="w-16 h-16 text-slate-300 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                                <circle cx="9" cy="9" r="2" />
                                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                            </svg>
                        </div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Hero Illustration Placeholder</span>
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
