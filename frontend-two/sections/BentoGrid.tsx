'use client';

import { motion } from 'framer-motion';
import { LayoutDashboard, Wallet, ShieldCheck, Users } from 'lucide-react';

const BentoGrid = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6 tracking-tight"
                    >
                        One Platform. <span className="text-brand-orange">Full Control.</span>
                    </motion.h2>
                    <p className="text-gray-500 text-xl max-w-2xl mx-auto">
                        Track costs, compliance risks, and global workforce distribution at a glance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[800px]">

                    {/* Main Large Card - Workforce Overview */}
                    <div className="md:col-span-2 md:row-span-2 rounded-[3.5rem] bg-gray-50 border border-gray-100 p-10 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                        <div className="mb-8 relative z-10">
                            <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-6 text-brand-blue">
                                <Users size={24} />
                            </div>
                            <h3 className="text-3xl font-bold text-zinc-900 mb-4">Workforce Overview</h3>
                            <p className="text-slate-600 max-w-md">See your entire global team in one view. Contractors, EOR, and direct employees side-by-side.</p>
                        </div>
                        {/* Image 0 (Dashboard) - Map Area */}
                        <div className="absolute right-[-2%] bottom-[-2%] w-[85%] h-[75%] rounded-tl-[3rem] overflow-hidden shadow-2xl border-t border-l border-gray-200 group-hover:scale-[1.02] transition-transform duration-700 bg-white">
                            <img
                                src="/images/dashboard_overview.png"
                                alt="Workforce Map"
                                className="w-full h-full object-cover object-[85%_center]"
                            />
                        </div>
                    </div>

                    {/* Top Right Card - Payroll Cost */}
                    <div className="md:col-span-1 md:row-span-1 rounded-[3rem] bg-gray-50 border border-gray-100 p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                        <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 text-green-600 relative z-10">
                            <Wallet size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-brand-black mb-2 relative z-10">Payroll Cost</h3>
                        <p className="text-gray-400 text-sm mb-4 relative z-10">Real-time cost analysis.</p>

                        {/* Focused on Payroll Data */}
                        <div className="absolute bottom-[-5%] right-[-5%] w-[95%] h-[65%] rounded-tl-2xl overflow-hidden shadow-lg border border-gray-100 group-hover:scale-105 transition-transform duration-500 bg-white">
                            <img
                                src="/images/dashboard_overview.png"
                                alt="Payroll Data"
                                className="w-full h-full object-cover object-[5%_95%]"
                            />
                        </div>
                    </div>

                    {/* Bottom Right Card - Compliance Alerts */}
                    <div className="md:col-span-1 md:row-span-1 rounded-[3rem] bg-gray-50 border border-gray-100 p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                        <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-4 text-brand-orange relative z-10">
                            <ShieldCheck size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-brand-black mb-2 relative z-10">Compliance</h3>
                        <p className="text-gray-400 text-sm mb-4 relative z-10">Auto-alerts for risks.</p>

                        {/* Focused on Compliance Hub */}
                        <div className="absolute bottom-[-10%] right-[-5%] w-[95%] h-[65%] rounded-tl-2xl overflow-hidden shadow-lg border border-gray-100 group-hover:scale-105 transition-transform duration-500 bg-white">
                            <img
                                src="/images/onboarding_msa.png"
                                alt="Compliance / MSA Agreement"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default BentoGrid;
