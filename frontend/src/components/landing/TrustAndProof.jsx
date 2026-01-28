import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, ShieldCheck, Activity, Globe } from 'lucide-react';

const TrendLine = ({ color }) => (
    <svg className="w-full h-12 overflow-visible" preserveAspectRatio="none">
        <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            d="M0,40 C50,40 50,10 100,10 C150,10 150,30 200,5"
            stroke={color}
            strokeWidth="3"
            fill="none"
        />
        <motion.circle
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            cx="200" cy="5" r="4" fill={color} stroke="white" strokeWidth="2"
        />
    </svg>
);

const StatCard = ({ label, value, subtext, icon: Icon, trend }) => (
    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col justify-between h-[300px] relative overflow-hidden group hover:border-gray-200 hover:shadow-lg transition-all">
        <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                <Icon size={24} className="text-black" />
            </div>
            {trend && (
                <div className="flex items-center gap-1 text-sm font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-100">
                    <TrendingDown size={14} className="rotate-180" /> {trend}
                </div>
            )}
        </div>

        <div>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-gray-900">{value}</h3>
            <div className="font-bold text-gray-500 uppercase tracking-widest text-xs mb-4">{label}</div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[80%]">
                {subtext}
            </p>
        </div>

        {/* Visual Trend Line at bottom */}
        <div className="absolute bottom-6 right-6 w-1/2 opacity-20 group-hover:opacity-100 transition-opacity">
            <TrendLine color="#000" />
        </div>
    </div>
);

const TrustAndProof = () => {
    // Large "Proven" background text for scale
    return (
        <section className="py-32 bg-white border-b border-gray-100 relative overflow-hidden">
            {/* Background Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-gray-50 opacity-40 select-none z-0 tracking-tighter loading-none">
                PROVEN
            </div>

            <div className="container mx-auto px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                            Scale without <br /> the ceiling.
                        </h2>
                        <p className="text-xl text-gray-500 font-medium max-w-lg">
                            We handle the operational weight so you can run at full speed.
                        </p>
                    </div>

                    <div className="text-right hidden md:block">
                        <div className="text-6xl font-bold text-gray-200">100%</div>
                        <div className="text-sm font-bold uppercase tracking-widest text-gray-400">Compliance Rate</div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <StatCard
                        icon={Activity}
                        value="-40%"
                        label="Management Overhead"
                        subtext="Reduction in time spent on legal/hr admin tasks per country."
                        trend="Saved"
                    />
                    <StatCard
                        icon={ShieldCheck}
                        value="0"
                        label="Audit Failures"
                        subtext="Total number of compliance breaches across all active clients."
                        trend="Perfect"
                    />
                    <StatCard
                        icon={Globe}
                        value="24h"
                        label="Avg. Deployment"
                        subtext="Time from signed contract to fully compliant local entity."
                        trend="Instant"
                    />
                </div>
            </div>
        </section>
    );
};

export default TrustAndProof;
