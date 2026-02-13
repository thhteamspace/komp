'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, X, Image as ImageIcon } from 'lucide-react';

const CompareEntityModel = () => {
    return (
        <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center space-y-12">

                {/* 1. Header (Centered) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="space-y-6 max-w-3xl"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                        <span className="text-[#FF8C1A]">Direct Control</span> Beats Delegated Risk.
                    </h2>
                    <div className="w-20 h-1.5 bg-[#FF8C1A] rounded-full mx-auto"></div>
                </motion.div>


                {/* 4. Text Content (Centered, swapped above Image) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-3xl mx-auto space-y-6 text-lg text-gray-600 leading-relaxed"
                >
                    <p>
                        Most "global" platforms are just aggregators—middlemen passing your contracts to local third-party providers you've never met. This breaks the chain of accountability and exposes your business to unknown risks.
                    </p>
                    <p>
                        Komp is different. We own our entities worldwide. When you hire through us, you are working directly with our legal infrastructure, not a patchwork of vendors. This means faster support, direct liability protection, and zero finger-pointing when it matters most.
                    </p>
                </motion.div>

                {/* 3. Image Placeholder (Centered, swapped below Text) */}
                <div className="w-full max-w-4xl relative">
                    {/* <div className="absolute top-0 right-1/4 w-64 h-64 bg-[#FF8C1A]/10 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gray-100 rounded-full blur-3xl -z-10"></div> */}

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full aspect-[4/3] flex items-center justify-center overflow-hidden"
                    >
                        <img
                            src="/images/image copy 13.png"
                            alt="Direct Control Entity Map"
                            className="w-full h-full object-contain scale-110"
                        />
                    </motion.div>
                </div>

                {/* 2. Comparison Metrics (Centered, moved below Image) */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="grid grid-cols-2 gap-8 md:gap-16 w-full max-w-2xl mx-auto"
                >
                    {/* Left: Others */}
                    <div className="flex flex-col items-center space-y-4">
                        <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Others (Aggregators)</span>
                        <div className="space-y-2">
                            <div className="flex items-center justify-center space-x-2">
                                <X className="text-red-500 w-5 h-5 shrink-0" />
                                <span className="text-gray-600 text-sm">Third-party reliance</span>
                            </div>
                            <div className="flex items-center justify-center space-x-2">
                                <X className="text-red-500 w-5 h-5 shrink-0" />
                                <span className="text-gray-600 text-sm">Slow response times</span>
                            </div>
                            <div className="flex items-center justify-center space-x-2">
                                <X className="text-red-500 w-5 h-5 shrink-0" />
                                <span className="text-gray-600 text-sm">Opaque compliance</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Komp */}
                    <div className="flex flex-col items-center space-y-4">
                        <span className="text-sm font-bold text-[#FF8C1A] uppercase tracking-wider">Komp (Direct)</span>
                        <div className="space-y-2">
                            <div className="flex items-center justify-center space-x-2">
                                <Check className="text-green-500 w-5 h-5 shrink-0" />
                                <span className="text-gray-900 font-medium text-sm">Owned infrastructure</span>
                            </div>
                            <div className="flex items-center justify-center space-x-2">
                                <Check className="text-green-500 w-5 h-5 shrink-0" />
                                <span className="text-gray-900 font-medium text-sm">Instant execution</span>
                            </div>
                            <div className="flex items-center justify-center space-x-2">
                                <Check className="text-green-500 w-5 h-5 shrink-0" />
                                <span className="text-gray-900 font-medium text-sm">Full legal liability</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 5. CTA Button (Centered) */}
                <div className="pt-4">
                    <a className="group inline-flex items-center text-white bg-[#FF8C1A] font-bold hover:bg-orange-600 transition-all px-8 py-4 rounded-full shadow-lg hover:shadow-orange-500/25" href="#">
                        Explore our entity network
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default CompareEntityModel;
