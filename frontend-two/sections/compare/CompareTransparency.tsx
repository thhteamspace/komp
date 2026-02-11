'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, BadgeCheck } from 'lucide-react';

const CompareTransparency = () => {
    return (
        <section className="relative py-32 lg:py-40 bg-[#F8F9FB]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left Image / Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gray-200/50 rounded-full blur-3xl -z-10"></div>

                        <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50 bg-white group flex items-center justify-center border border-gray-100">
                            {/* Placeholder for Mobile UI Image */}
                            <div className="w-full h-full bg-[#F2F4F7] flex items-center justify-center">
                                <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Mobile Pricing UI</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content */}
                    <div className="flex flex-col space-y-8 order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="space-y-4"
                        >
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                                <span className="text-[#FF8C1A]">Transparent</span> by Design.<br />
                                Accountable by Default.
                            </h2>
                            <div className="w-20 h-1.5 bg-[#FF8C1A] rounded-full"></div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="space-y-6 text-lg text-gray-600"
                        >
                            <p>
                                Hidden FX margins and padded exchange rates are industry standards we refuse to follow. At Komp, we believe financial clarity is a prerequisite for trust.
                            </p>
                            <p>
                                Our platform connects directly to mid-market interbank rates, ensuring that every conversion is verifiable. You see exactly what your employees receive and exactly what you pay—down to the cent. No hidden buffers, no surprise reconciliation fees.
                            </p>
                        </motion.div>

                        <div className="space-y-4 pt-4">
                            {[
                                "Real-time mid-market exchange rates",
                                "Detailed cost breakdown per contractor",
                                "Zero markup on employee reimbursements"
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className="flex items-start"
                                >
                                    <CheckCircle className="w-5 h-5 text-[#FF8C1A] mt-1 mr-3 shrink-0" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-6">
                            <a className="group inline-flex items-center text-[#FF8C1A] font-bold hover:text-orange-600 transition-colors px-6 py-3 rounded-full hover:bg-orange-50" href="#">
                                See our pricing model
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompareTransparency;
