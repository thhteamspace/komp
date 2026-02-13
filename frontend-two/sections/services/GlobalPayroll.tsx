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
                    <div className="bg-white rounded-[3rem] aspect-[16/9] flex flex-col items-center justify-center relative group overflow-hidden">
                        <img
                            src="/images/Gemini_Generated_Image_tjdcu9tjdcu9tjdc.png"
                            alt="Global Payroll System"
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                        {/* Vignette Fade Overlay */}
                        <div className="absolute inset-0 shadow-[inset_0_0_80px_60px_#fff] pointer-events-none z-10" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default GlobalPayroll;
