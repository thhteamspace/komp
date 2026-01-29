import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Check, FileCheck, Zap, Globe } from 'lucide-react';

const FeatureCard = ({ label, title, desc, delay, visual, color }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: delay, duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col bg-white rounded-[2rem] border border-gray-100 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full min-h-[500px]"
    >
        <div className="p-8 pb-0 flex-grow">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 ${color.bg} ${color.text}`}>
                {label}
            </span>
            <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">{title}</h3>
            <p className="text-gray-500 leading-relaxed text-base">
                {desc}
            </p>
        </div>

        {/* Visual Container - Tall and Spacious */}
        <div className={`mt-auto h-[300px] w-full bg-gray-50 relative overflow-hidden border-t border-gray-100`}>
            {visual}
        </div>
    </motion.div>
);

const ExecutiveReality = () => {
    return (
        <section className="py-24 bg-[#FAFAFA] relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 relative z-10">

                {/* Standard Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-full shadow-sm mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-xs font-bold text-gray-600 uppercase tracking-wide">Executive Reality</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight"
                    >
                        The Structural Cost of <br /> <span className="text-gray-400">Global Expansion.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-500 max-w-2xl mx-auto"
                    >
                        Global expansion doesn’t fail for lack of ambition. It slows when structure gets in the way. Fragmented operating models drain capital, time, and attention.
                    </motion.p>
                </div>


                {/* The Tall Grid [4:5 Aspect Ratio Feel] */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">

                    {/* Card 1: Time/Speed */}
                    <FeatureCard
                        label="Velocity"
                        title="Regain Speed"
                        desc="Months lost to incorporation and licensing. Remove bureaucratic friction at the point of entry."
                        color={{ bg: 'bg-purple-50', text: 'text-purple-600' }}
                        delay={0.2}
                        visual={
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="bg-white rounded-t-xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-200 p-6 relative top-4 h-full transform transition-transform hover:translate-y-2">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600"><FileText size={20} /></div>
                                        <div>
                                            <div className="h-2 w-24 bg-gray-200 rounded mb-2"></div>
                                            <div className="h-2 w-16 bg-gray-100 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-2 w-full bg-gray-100 rounded"></div>
                                        <div className="h-2 w-full bg-gray-100 rounded"></div>
                                        <div className="h-2 w-full bg-gray-100 rounded"></div>
                                        <div className="h-2 w-3/4 bg-gray-100 rounded"></div>
                                    </div>
                                    <div className="absolute top-6 right-6 text-green-500">
                                        <Check size={20} />
                                    </div>
                                </div>
                            </div>
                        }
                    />

                    {/* Card 2: Cost/Capital */}
                    <FeatureCard
                        label="Capital"
                        title="Preserve Capital"
                        desc="Significant upfront costs tied to setup and audits. Enter new markets without locking capital."
                        color={{ bg: 'bg-blue-50', text: 'text-blue-600' }}
                        delay={0.3}
                        visual={
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-blue-50/50 to-transparent">
                                <div className="relative w-full h-full flex items-center justify-center">
                                    {/* Abstract Speed Visual */}
                                    <div className="w-[1px] h-full bg-gray-200 absolute left-1/2 -translate-x-1/2"></div>

                                    <motion.div
                                        className="absolute bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 z-10"
                                        animate={{ y: [-10, 10, -10] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xs">GO</div>
                                        <div className="text-sm font-bold text-gray-900">Active Status</div>
                                    </motion.div>

                                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-mono text-gray-400 bg-white px-2 py-1 rounded border border-gray-100">
                                        T-minus 48 hours
                                    </div>
                                </div>
                            </div>
                        }
                    />

                    {/* Card 3: Integrity/Management */}
                    <FeatureCard
                        label="Integrity"
                        title="Operational Integrity"
                        desc="Disconnected systems limit visibility. Maintain control with a centralized employment layer."
                        color={{ bg: 'bg-green-50', text: 'text-green-600' }}
                        delay={0.4}
                        visual={
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <div className="bg-white rounded-xl shadow-lg border border-gray-200 w-full h-[90%] overflow-hidden relative top-4 hover:scale-105 transition-transform duration-500">
                                    {/* Mock Header */}
                                    <div className="h-10 bg-gray-50 border-b border-gray-100 flex items-center px-4 justify-between">
                                        <div className="flex gap-1.5">
                                            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                                            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                                        </div>
                                        <div className="h-1.5 w-16 bg-gray-200 rounded-full"></div>
                                    </div>
                                    {/* Mock Content */}
                                    <div className="p-4 grid grid-cols-2 gap-3">
                                        <div className="h-20 bg-blue-50/50 rounded-lg border border-blue-100/50"></div>
                                        <div className="h-20 bg-purple-50/50 rounded-lg border border-purple-100/50"></div>
                                        <div className="col-span-2 h-24 bg-gray-50/50 rounded-lg border border-gray-100"></div>
                                    </div>
                                </div>
                            </div>
                        }
                    />

                </div>
            </div>
        </section>
    );
};

export default ExecutiveReality;
