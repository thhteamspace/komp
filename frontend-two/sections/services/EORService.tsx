'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Check, ArrowRight } from 'lucide-react';

const EORService = () => {
    return (
        <section className="relative bg-[#f8f6f5] py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="mb-16 lg:mb-0 relative z-10"
                    >
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-100 text-[#FF8C1A] mb-10 shadow-sm border border-orange-200/50">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-black text-[#1A1A1A] tracking-tighter leading-[1.05] mb-8">
                            Hire globally without building <span className="text-[#FF8C1A]">local entities</span> or absorbing local risk.
                        </h2>
                        <p className="text-xl text-[#5F6B7C] mb-10 leading-relaxed font-medium">
                            Komp serves as the Employer of Record (EOR), enabling you to hire full-time employees in over 150 countries without the headache of setting up foreign subsidiaries. We handle compliant local contracts, taxes, benefits, and payroll, effectively transferring the legal risk from your company to ours.
                        </p>

                        <ul className="space-y-6 mb-12">
                            {[
                                "Onboard employees in days, not months.",
                                "100% compliance with local labor laws.",
                                "Hire safely and legally."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-green-100 flex items-center justify-center mt-1 border border-green-200">
                                        <Check className="w-4 h-4 text-green-600 stroke-[3px]" />
                                    </div>
                                    <p className="text-lg text-[#1A1A1A] font-bold tracking-tight">{item}</p>
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-center gap-4 group cursor-pointer w-fit text-xl font-black text-[#FF8C1A] hover:gap-6 transition-all">
                            <span>Learn more about EOR</span>
                            <ArrowRight className="w-6 h-6 mt-1" />
                        </div>
                    </motion.div>

                    {/* Image / Illustration Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="relative"
                    >
                        <div className="relative rounded-[3rem] bg-[#F2F4F7] border border-slate-200 aspect-[4/3] flex flex-col items-center justify-center overflow-hidden group shadow-sm">
                            <div className="w-16 h-16 text-slate-300 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                                    <circle cx="9" cy="9" r="2" />
                                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                                </svg>
                            </div>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">EOR Illustration Placeholder</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default EORService;
