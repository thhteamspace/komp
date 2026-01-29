import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, TrendingUp, Users, Globe, Activity } from 'lucide-react';

const FeatureDashboard = () => {
    return (
        <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
            <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                {/* Header Section */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/50">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                            <div className="w-5 h-5 bg-white rounded-sm opacity-20" />
                        </div>
                        <span className="font-semibold text-gray-900">Overview</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full border border-green-100">
                        <Activity className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium text-green-700">System Operational</span>
                    </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 grid gap-6">
                    {/* Metrics Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <MetricCard
                            label="Active Regions"
                            value="14"
                            subtext="+3 New"
                            subtextClass="text-green-600"
                            icon={<Globe className="w-5 h-5 opacity-40" />}
                        />
                        <MetricCard
                            label="Total Headcount"
                            value="1,248"
                            subtext="+12.5%"
                            subtextClass="text-green-600"
                            icon={<Users className="w-5 h-5 opacity-40" />}
                        />
                        <MetricCard
                            label="Payroll Run"
                            value="$4.2M"
                            subtext="Processing"
                            subtextClass="text-blue-600"
                            icon={<CreditCard className="w-5 h-5 opacity-40" />}
                        />
                    </div>

                    {/* Chart Section (Abstracted) */}
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 min-h-[200px] relative overflow-hidden group">
                        <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                            <span className="text-sm font-medium text-gray-500 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                                Live Payroll Volume
                            </span>
                        </div>

                        <h4 className="text-sm font-semibold text-gray-400 mb-8 uppercase tracking-wider">Payroll Volume (YTD)</h4>

                        {/* Abstracted SVG Chart Line */}
                        <div className="relative h-32 w-full mt-auto">
                            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                                <path
                                    d="M0,100 C100,80 200,120 300,60 C400,0 500,40 600,20 L600,150 L0,150 Z"
                                    fill="url(#gradient)"
                                    className="opacity-10"
                                />
                                <path
                                    d="M0,100 C100,80 200,120 300,60 C400,0 500,40 600,20"
                                    fill="none"
                                    stroke="#3B82F6"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
                                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Floating Notification Toast */}
                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute top-24 right-[-20px] md:right-8 bg-white p-3 rounded-lg shadow-xl border border-gray-100 flex items-center gap-3 pr-6"
                >
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
                        <CreditCard className="w-5 h-5" />
                    </div>
                    <div>
                        <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Just Processed</div>
                        <div className="text-sm font-bold text-gray-900">$142,000.00</div>
                    </div>
                </motion.div>

                {/* Sidebar decoration dots */}
                <div className="absolute left-4 top-24 flex flex-col gap-3">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-md bg-gray-100" />
                    ))}
                </div>
            </div>
        </div>
    );
};

// Helper Sub-component
const MetricCard = ({ label, value, subtext, subtextClass, icon }) => (
    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{label}</span>
            {icon}
        </div>
        <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
        <div className={`text-xs font-medium ${subtextClass}`}>{subtext}</div>
    </div>
);

export default FeatureDashboard;
