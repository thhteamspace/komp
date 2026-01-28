import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle, CheckCircle, ArrowRight, MousePointer2 } from 'lucide-react';

const FeatureRow = ({ label, oldVal, newVal }) => (
    <div className="grid grid-cols-12 items-center py-6 border-b border-gray-100 last:border-0 group">
        <div className="col-span-4 text-sm font-bold text-gray-500 uppercase tracking-wider">{label}</div>
        <div className="col-span-4 text-gray-400 line-through decoration-red-400 decoration-2 font-medium">{oldVal}</div>
        <div className="col-span-4 text-black font-semibold flex items-center gap-2">
            <CheckCircle size={16} className="text-green-500" /> {newVal}
        </div>
    </div>
);

const ExecutiveReality = () => {
    const [activeSide, setActiveSide] = useState('new'); // 'old' or 'new'

    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-8">

                <div className="text-center mb-16">
                    <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">
                        The Entity Gap
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                        Stop building infrastructure <br /> you don't need.
                    </h2>
                </div>

                {/* Interactive Comparison Visual */}
                <div className="relative max-w-5xl mx-auto h-[600px] bg-gray-50 rounded-3xl border border-gray-200 overflow-hidden flex shadow-2xl">

                    {/* Split Divider */}
                    <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-300 z-30 hidden md:block">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-lg z-40">
                            <ArrowRight size={18} className="text-gray-400" />
                        </div>
                    </div>

                    {/* Left: The Old Way */}
                    <div className="flex-1 p-12 relative overflow-hidden group hover:bg-red-50/10 transition-colors">
                        <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
                        <div className="inline-flex items-center gap-2 mb-8 text-red-500 font-bold bg-white px-3 py-1 rounded-full shadow-sm">
                            <XCircle size={16} /> The Manual Way
                        </div>

                        <div className="space-y-12 opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="bg-white p-6 rounded-xl border border-dashed border-gray-300 relative">
                                <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">BLOCKED</div>
                                <div className="h-2 w-24 bg-gray-200 rounded mb-4" />
                                <div className="h-2 w-full bg-gray-100 rounded mb-2" />
                                <div className="h-2 w-3/4 bg-gray-100 rounded" />
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-dashed border-gray-300">
                                <div className="h-2 w-32 bg-gray-200 rounded mb-4" />
                                <div className="flex gap-2">
                                    <div className="h-8 w-8 bg-gray-100 rounded-full" />
                                    <div className="h-8 w-8 bg-gray-100 rounded-full" />
                                    <div className="h-8 w-8 bg-gray-100 rounded-full" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 text-center text-gray-400 font-mono text-xs">
                            waiting for legal approval...
                        </div>
                    </div>

                    {/* Right: The KOMP Way */}
                    <div className="flex-1 p-12 bg-white relative">
                        <div className="inline-flex items-center gap-2 mb-8 text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full border border-green-100 shadow-sm">
                            <CheckCircle size={16} /> The KOMP Platform
                        </div>

                        <div className="space-y-4">
                            <FeatureRow label="Time to Live" oldVal="4-6 Months" newVal="48 Hours" />
                            <FeatureRow label="Cost per Entity" oldVal="$25k - $50k" newVal="$0 (Included)" />
                            <FeatureRow label="Internal Ops" oldVal="12+ Vendors" newVal="1 Dashboard" />
                            <FeatureRow label="Audit Risk" oldVal="High Exposure" newVal="Zero Liability" />
                        </div>

                        <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-100 text-center">
                            <div className="text-sm text-gray-500 mb-2">Expansion Speed</div>
                            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    transition={{ duration: 1.5 }}
                                    className="h-full bg-green-500"
                                />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ExecutiveReality;
