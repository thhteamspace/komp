'use client';

import { motion } from 'framer-motion';
import { RefreshCcw, ShieldCheck, Rocket, ArrowRight } from 'lucide-react';

const CompareCTA = () => {
    return (
        <section className="relative py-[150px] bg-[#F8F9FB] overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-8">
                        It’s Time to <span className="text-[#FF8C1A]">Upgrade</span> the Way You Hire Globally
                    </h2>

                    <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-16 leading-relaxed">
                        Don't let legacy contracts hold you back. Our specialized migration team handles the entire transition process, ensuring a friction-free move with zero downtime for your team and full compliance from day one.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="relative max-w-5xl mx-auto mb-20 pt-10">
                    <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
                        {/* Connecting Line Segment 1 (Step 1 to 2) */}
                        <div className="hidden md:block absolute top-[40px] left-[16.66%] right-[50%] h-[2px] bg-slate-200 -z-10"></div>
                        {/* Connecting Line Segment 2 (Step 2 to 3) */}
                        <div className="hidden md:block absolute top-[40px] left-[50%] right-[16.66%] h-[2px] bg-slate-200 -z-10"></div>

                        {/* Step 1 */}
                        <div className="relative flex flex-col items-center group">
                            <div className="w-20 h-20 rounded-full bg-white border-[6px] border-orange-100 shadow-sm flex items-center justify-center mb-8 z-10 transition-transform duration-300 group-hover:scale-110">
                                <RefreshCcw className="w-8 h-8 text-[#FF8C1A]" />
                            </div>
                            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm w-full text-center hover:shadow-md transition-shadow h-full flex flex-col justify-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Sync Data</h3>
                                <p className="text-base text-slate-500 leading-relaxed">Securely transfer employee records & payroll history.</p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative flex flex-col items-center group">
                            <div className="w-20 h-20 rounded-full bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] flex items-center justify-center mb-8 z-10 border border-slate-50 transition-transform duration-300 group-hover:scale-110">
                                <ShieldCheck className="w-9 h-9 text-[#FF8C1A]" />
                            </div>
                            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm w-full text-center hover:shadow-md transition-shadow h-full flex flex-col justify-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Verify Contracts</h3>
                                <p className="text-base text-slate-500 leading-relaxed">Local experts audit compliance for every worker.</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative flex flex-col items-center group">
                            <div className="w-20 h-20 rounded-full bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] flex items-center justify-center mb-8 z-10 border border-slate-50 transition-transform duration-300 group-hover:scale-110">
                                <Rocket className="w-9 h-9 text-[#FF8C1A]" />
                            </div>
                            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm w-full text-center hover:shadow-md transition-shadow h-full flex flex-col justify-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Go Live</h3>
                                <p className="text-base text-slate-500 leading-relaxed">Seamless transition with zero payroll interruption.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex justify-center"
                >
                    <a className="inline-flex justify-center items-center px-10 py-5 text-lg font-bold rounded-full text-white bg-[#FF8C1A] hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-[#FF8C1A]/30 transition-all shadow-lg shadow-orange-600/40 transform hover:-translate-y-1" href="#">
                        Talk to a Migration Specialist
                        <ArrowRight className="ml-3 w-5 h-5" />
                    </a>
                </motion.div>
            </div>

            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-[#FF8C1A]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl"></div>
            </div>
        </section>
    );
};

export default CompareCTA;
