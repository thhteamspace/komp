'use client';

import { motion } from 'framer-motion';
import { CreditCard } from 'lucide-react';

const GlobalPayroll = () => {
    return (
        <section className="relative bg-[#f8f6f5] py-32 overflow-hidden border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto mb-20"
                >
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-100 text-[#FF8C1A] mb-10 shadow-sm border border-orange-200/50">
                        <CreditCard className="w-8 h-8" />
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-black text-[#1A1A1A] tracking-tighter leading-[1.05] mb-8">
                        <span className="text-[#FF8C1A]">One payroll system.</span> Global accuracy. Built for compliance.
                    </h2>
                    <p className="text-xl md:text-2xl text-[#5F6B7C] leading-relaxed font-medium">
                        Consolidate your global payroll into a single, automated workflow. Remove errors from reporting and eliminate every payment leak or lag in the correct currency, fully compliant with local tax laws.
                    </p>
                </motion.div>

                {/* Large Illustration Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-6xl mx-auto"
                >
                    <div className="bg-[#F2F4F7] rounded-[3rem] border border-slate-200 aspect-[21/9] flex flex-col items-center justify-center relative group shadow-sm">
                        <div className="w-20 h-20 text-slate-300 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                                <circle cx="9" cy="9" r="2" />
                                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                            </svg>
                        </div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Global Payroll Illustration Placeholder</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default GlobalPayroll;
