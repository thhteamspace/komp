'use client';

import { motion } from 'framer-motion';
import { Users, FileText, ArrowRight } from 'lucide-react';
import Button from '@/components/Button';

const AORService = () => {
    return (
        <section className="relative bg-[#f8f6f5] py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
                    {/* Image / Illustration Side (Left on this section) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="relative rounded-[3rem] border border-slate-200 aspect-[4/3] flex flex-col items-center justify-center overflow-hidden group shadow-sm bg-white">
                            <img
                                src="/images/image copy 5.png"
                                alt="AOR Services - Contractor Management"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="mb-16 lg:mb-0 relative z-10 order-1 lg:order-2"
                    >
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-100 text-[#FF8C1A] mb-10 shadow-sm border border-orange-200/50">
                            <Users className="w-8 h-8" />
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-black text-[#1A1A1A] tracking-tighter leading-[1.05] mb-8">
                            Engage global contractors without triggering <span className="text-[#FF8C1A]">employment or tax risk.</span>
                        </h2>
                        <div className="space-y-6 text-xl text-[#5F6B7C] mb-12 leading-relaxed font-medium">
                            <p>
                                Hire fast, pay in minutes. KOMP's Agency of Record (AOR) solution automatically assesses worker classification, generates locally compliant contracts, and manages tax forms, shielding your business from contractor churn.
                            </p>
                            <p className="text-sm border-l-4 border-[#FF8C1A] pl-6 py-2 bg-white/50 rounded-r-xl font-bold text-[#1A1A1A]/80">
                                Gain centralized audit readiness with real-time documentation tracking. We collect and verify all necessary tax and legal documents before a contractor starts.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-5">
                            <Button className="w-full sm:w-auto px-8 py-5 text-lg font-black bg-[#FF8C1A] text-white hover:bg-orange-600 rounded-full shadow-xl shadow-orange-600/30">
                                Get Hiring Contractors
                            </Button>
                            <Button variant="outline" className="w-full sm:w-auto px-8 py-5 text-lg font-black bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-full shadow-sm flex items-center justify-center gap-3">
                                <FileText className="w-5 h-5" />
                                Compliance Guide
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AORService;
