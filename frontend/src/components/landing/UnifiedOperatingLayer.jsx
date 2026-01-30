import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Check, Shield, CreditCard, Globe, Zap, FileText } from 'lucide-react';

const Card = ({ children, className }) => (
    <div className={`bg-[#111111] border border-white/10 rounded-3xl p-8 overflow-hidden relative group hover:border-white/20 transition-colors ${className}`}>
        {children}
    </div>
);

const Notification = ({ title, time, user, delay }) => (
    <motion.div
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay, duration: 0.5 }}
        className="bg-[#1A1A1A] border border-white/5 p-4 rounded-xl flex items-center gap-4 mb-3 shadow-lg max-w-sm ml-auto relative z-10"
    >
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white shrink-0">
            <RefreshCw size={18} className="animate-spin-slow" />
        </div>
        <div className="flex-grow min-w-0">
            <div className="text-white text-sm font-medium truncate">{title}</div>
            <div className="text-white/40 text-xs">{user} • {time}</div>
        </div>
        <Check size={16} className="text-green-500 shrink-0" />
    </motion.div>
);

const UnifiedOperatingLayer = () => {
    return (
        <section className="py-32 bg-[#050505] text-white relative overflow-hidden">

            <div className="container mx-auto px-4 md:px-8 max-w-7xl">

                {/* Header */}
                <div className="mb-20 max-w-2xl">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-1 h-6 bg-blue-500 rounded-full" />
                        <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">Platform Overview</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Unified Platform Layer. <br />
                        <span className="text-white/40">Complete Control.</span>
                    </h2>
                    <p className="text-xl text-white/50 max-w-xl">
                        This text describes the solution provided by the platform. It explains how it solves the fragmentation issues mentioned earlier.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Card 1: Main Automation Logic (Full Width/Col Span) */}
                    <Card className="md:col-span-2 min-h-[400px] flex flex-col md:flex-row items-center md:items-start overflow-hidden">
                        <div className="flex-1 relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-3">Feature Headline 1</h3>
                            <p className="text-white/50 mb-8 max-w-sm">
                                Description of the first key feature of the platform. It consolidates views and data.
                            </p>
                            <div className="flex gap-4">
                                <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-xs font-mono text-white/70">webhook_received</div>
                                <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-xs font-mono text-white/70">data_processed</div>
                            </div>
                        </div>

                        {/* Visual: Floating Notifications */}
                        {/* Visual: Image Placeholder */}
                        <div className="flex-1 w-full mt-10 md:mt-0 relative flex items-center justify-center">
                            <div className="bg-[#1A1A1A] border border-white/5 rounded-xl aspect-video w-full flex items-center justify-center">
                                <div className="text-white/20 flex flex-col items-center">
                                    <svg className="w-12 h-12 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-sm font-medium">Image Placeholder</span>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Card 2: Global Payroll */}
                    <Card className="min-h-[400px]">
                        <h3 className="text-2xl font-bold text-white mb-2">Feature Headline 2</h3>
                        <p className="text-white/50 mb-10 text-sm">Description of the second key feature, focusing on visibility and real-time updates.</p>

                        <div className="relative mt-auto mx-auto w-full h-[180px] bg-[#1A1A1A] border border-white/5 rounded-2xl flex items-center justify-center">
                            <div className="text-white/20 flex flex-col items-center">
                                <svg className="w-10 h-10 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span className="text-xs font-medium">Image Placeholder</span>
                            </div>
                        </div>
                    </Card>

                    {/* Card 3: Compliance */}
                    <Card className="min-h-[400px]">
                        <h3 className="text-2xl font-bold text-white mb-2">Feature Headline 3</h3>
                        <p className="text-white/50 mb-10 text-sm">Description of the third key feature, focusing on compliance or data integrity.</p>

                        <div className="relative mt-auto mx-auto w-full h-[180px] bg-[#1A1A1A] border border-white/5 rounded-2xl flex items-center justify-center">
                            <div className="text-white/20 flex flex-col items-center">
                                <svg className="w-10 h-10 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span className="text-xs font-medium">Image Placeholder</span>
                            </div>
                        </div>
                    </Card>

                </div>
            </div>
        </section>
    );
};

export default UnifiedOperatingLayer;
