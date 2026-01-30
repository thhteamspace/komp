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
                        <span className="text-xs font-bold text-gray-600 uppercase tracking-wide">Section Label</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight"
                    >
                        The Problems with <br /> <span className="text-gray-400">Current Methods.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-500 max-w-2xl mx-auto"
                    >
                        This is a placeholder description explaining the problem statement. It highlights the challenges faced by users in the current landscape, emphasizing fragmentation and inefficiencies.
                    </motion.p>
                </div>


                {/* The Tall Grid [4:5 Aspect Ratio Feel] */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">

                    {/* Card 1: Time/Speed */}
                    <FeatureCard
                        label="Problem 1"
                        title="Issue Headline 1"
                        desc="Description of the first major problem. Explain the pain point clearly and concisely for the user."
                        color={{ bg: 'bg-purple-50', text: 'text-purple-600' }}
                        delay={0.2}
                        visual={
                            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center m-6 rounded-xl border border-gray-200">
                                <div className="text-gray-300 flex flex-col items-center">
                                    <svg className="w-12 h-12 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-sm font-medium">Image Placeholder</span>
                                </div>
                            </div>
                        }
                    />

                    {/* Card 2: Cost/Capital */}
                    <FeatureCard
                        label="Problem 2"
                        title="Issue Headline 2"
                        desc="Description of the second major problem. Explain the pain point clearly and concisely for the user."
                        color={{ bg: 'bg-blue-50', text: 'text-blue-600' }}
                        delay={0.3}
                        visual={
                            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center m-6 rounded-xl border border-gray-200">
                                <div className="text-gray-300 flex flex-col items-center">
                                    <svg className="w-12 h-12 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-sm font-medium">Image Placeholder</span>
                                </div>
                            </div>
                        }
                    />

                    {/* Card 3: Integrity/Management */}
                    <FeatureCard
                        label="Problem 3"
                        title="Issue Headline 3"
                        desc="Description of the third major problem. Explain the pain point clearly and concisely for the user."
                        color={{ bg: 'bg-green-50', text: 'text-green-600' }}
                        delay={0.4}
                        visual={
                            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center m-6 rounded-xl border border-gray-200">
                                <div className="text-gray-300 flex flex-col items-center">
                                    <svg className="w-12 h-12 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-sm font-medium">Image Placeholder</span>
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
