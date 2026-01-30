import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle, Clock, ArrowRight, ShieldCheck, Database } from 'lucide-react';

const FeatureComparison = () => {
    return (
        <div className="w-full max-w-5xl mx-auto p-4">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden flex flex-col md:flex-row min-h-[400px]">

                {/* LEFT SIDE: The Manual Way */}
                <div className="flex-1 p-8 bg-gray-50/50 border-r border-gray-100 relative">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-8 border border-red-100">
                        <XCircle className="w-4 h-4" />
                        Option A (Bad)
                    </div>

                    <div className="space-y-6 opacity-70">
                        {/* Simulation of a blocked process */}
                        <div className="p-4 bg-white rounded-lg border border-gray-200 border-dashed relative">
                            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded shadow-sm">Status</div>
                            <div className="h-2 w-1/3 bg-gray-200 rounded mb-3"></div>
                            <div className="h-2 w-full bg-gray-100 rounded mb-2"></div>
                            <div className="h-2 w-2/3 bg-gray-100 rounded"></div>
                        </div>

                        <div className="p-4 bg-white rounded-lg border border-gray-200 border-dashed grayscale">
                            <div className="h-2 w-1/4 bg-gray-200 rounded mb-3"></div>
                            <div className="flex gap-2">
                                <div className="h-8 w-8 rounded-full bg-gray-100"></div>
                                <div className="h-8 w-8 rounded-full bg-gray-100"></div>
                                <div className="h-8 w-8 rounded-full bg-gray-100"></div>
                            </div>
                        </div>

                        <div className="text-center mt-8">
                            <div className="font-mono text-sm text-gray-400">waiting for action...</div>
                        </div>
                    </div>
                </div>

                {/* CENTRE: Connector */}
                <div className="hidden md:flex flex-col justify-center relative -ml-6 -mr-6 z-10 pointer-events-none">
                    <div className="w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 text-gray-400" />
                    </div>
                </div>


                {/* RIGHT SIDE: The KOMP Way */}
                <div className="flex-1 p-8 bg-white relative">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-8 border border-green-100">
                        <ShieldCheck className="w-4 h-4" />
                        Option B (Good)
                    </div>

                    <div className="space-y-6">
                        <ComparisonRow
                            label="Comparison Point 1"
                            badValue="Bad Value"
                            goodValue="Good Value"
                        />
                        <ComparisonRow
                            label="Comparison Point 2"
                            badValue="Bad Value"
                            goodValue="Good Value"
                        />
                        <ComparisonRow
                            label="Comparison Point 3"
                            badValue="Bad Value"
                            goodValue="Good Value"
                        />
                        <ComparisonRow
                            label="Comparison Point 4"
                            badValue="Bad Value"
                            goodValue="Good Value"
                        />

                        {/* Speed Indicator */}
                        <div className="mt-8 bg-gray-50 rounded-lg p-4 border border-gray-100">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-xs font-medium text-gray-500">Performance Metric</span>
                                <span className="text-xs font-bold text-green-600">Optimized</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-green-500 rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ComparisonRow = ({ label, badValue, goodValue }) => (
    <div className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
        <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider text-[11px]">{label}</span>
        <div className="flex items-center gap-4 text-sm">
            <span className="text-gray-300 line-through decoration-red-300 decoration-2">{badValue}</span>
            <span className="font-bold text-gray-900 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                {goodValue}
            </span>
        </div>
    </div>
);

export default FeatureComparison;
