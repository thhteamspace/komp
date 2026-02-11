'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CompareHero = () => {
    return (
        <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col space-y-8 max-w-2xl lg:max-w-none"
                    >
                        <div className="inline-flex items-center space-x-2 bg-[#f8f6f5] border border-gray-200 rounded-full px-4 py-1.5 w-fit">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF8C1A] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF8C1A]"></span>
                            </span>
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-600">Compare Komp vs. Others</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
                            A <span className="text-[#FF8C1A]">Smarter Alternative</span> to One-Size-Fits-All Global Hiring Platforms.
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg">
                            Stop settling for opaque automation. Komp provides enterprise-grade infrastructure built for transparency and compliance, giving you the control global teams demand.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-semibold rounded-full text-white bg-[#FF8C1A] hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF8C1A] transition-all shadow-lg shadow-orange-600/20" href="#">
                                Talk to an Expert
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </a>
                            <a className="inline-flex justify-center items-center px-8 py-4 border-2 border-[#FF8C1A] text-base font-semibold rounded-full text-[#FF8C1A] bg-transparent hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF8C1A] transition-all" href="#">
                                Take a Product Tour
                            </a>
                        </div>

                        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
                            <div className="text-sm text-gray-500 font-medium">Trusted by leading enterprises:</div>
                            <div className="flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                                <div className="h-6 w-20 bg-gray-300 rounded flex items-center justify-center text-[10px] text-gray-500 font-bold">CORP INC</div>
                                <div className="h-6 w-20 bg-gray-300 rounded flex items-center justify-center text-[10px] text-gray-500 font-bold">GLOBEX</div>
                                <div className="h-6 w-20 bg-gray-300 rounded flex items-center justify-center text-[10px] text-gray-500 font-bold">ACME</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Image / Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative lg:h-full flex items-center justify-center"
                    >
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#FF8C1A]/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-gray-200 rounded-full blur-3xl"></div>

                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 shadow-2xl bg-white group">
                            {/* Placeholder for Dashboard Image */}
                            <div className="w-full h-full bg-[#F2F4F7] flex items-center justify-center">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Dashboard Illustration</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CompareHero;
