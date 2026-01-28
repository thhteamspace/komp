import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from './Button';
import { Globe, Users, TrendingUp, ArrowRight, ShieldCheck, Activity, CreditCard, ChevronDown } from 'lucide-react';

const MetricCard = ({ label, value, trend, delay, color }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: delay, duration: 0.4 }}
        className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between h-24 relative overflow-hidden group hover:shadow-md transition-shadow"
    >
        <div className={`absolute top-0 right-0 w-16 h-16 rounded-bl-full opacity-10 ${color}`} />
        <div className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1">{label}</div>
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        <div className="text-xs font-semibold flex items-center gap-1 mt-auto">
            <div className={`w-1.5 h-1.5 rounded-full ${trend.includes('+') ? 'bg-green-500' : 'bg-blue-500'}`} />
            <span className={trend.includes('+') ? 'text-green-600' : 'text-blue-600'}>{trend}</span>
        </div>
    </motion.div>
);

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

    return (
        <section ref={ref} className="relative min-h-[95vh] flex items-center pt-32 pb-20 bg-[#FAFAFA] overflow-hidden">

            {/* Refined Grid Background */}
            <div className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 pointer-events-none" />

            <div className="container mx-auto px-8 relative z-10 grid lg:grid-cols-2 gap-20 items-center">

                {/* Left: Value Prop */}
                <div className="text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 mb-8 pl-1 pr-3 py-1 bg-white border border-gray-200 rounded-full shadow-sm hover:border-gray-300 transition-colors cursor-default"
                    >
                        <div className="px-2 py-0.5 bg-black text-white text-[10px] font-bold rounded-full">NEW</div>
                        <span className="text-xs font-medium text-gray-600">Global Payroll API v2.0 is live</span>
                        <ChevronDown size={12} className="text-gray-400" />
                    </motion.div>

                    <h1 className="text-5xl lg:text-7xl font-semibold leading-[1.05] mb-6 text-gray-900 tracking-tight">
                        The operating system for <br />
                        <span className="text-gray-400">global work.</span>
                    </h1>

                    <p className="text-gray-500 text-lg mb-10 max-w-lg font-medium leading-relaxed">
                        Hire compliant entities, automate payroll, and manage benefits in 160+ countries. One dashboard. Zero friction.
                    </p>

                    <div className="flex items-center gap-4">
                        <Button variant="primary" className="h-14 px-8 text-sm font-semibold bg-black text-white hover:bg-gray-800 rounded-lg shadow-lg shadow-black/5 hover:-translate-y-0.5 transition-all">
                            Start Operating
                        </Button>
                        <Button variant="secondary" className="h-14 px-8 text-sm font-semibold bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 rounded-lg shadow-sm">
                            Talk to Sales
                        </Button>
                    </div>

                    <div className="mt-10 flex items-center gap-6 text-xs text-gray-400 font-semibold uppercase tracking-wider">
                        <span>Trusted by</span>
                        <div className="flex -space-x-2">
                            <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white" />
                            <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white" />
                            <div className="w-6 h-6 rounded-full bg-gray-400 border-2 border-white" />
                        </div>
                        <span>and 500+ others</span>
                    </div>
                </div>

                {/* Right: High-Fidelity Dashboard Mock */}
                <motion.div
                    style={{ y }}
                    className="relative lg:h-[600px] w-full flex items-center justify-center perspective-1000"
                >
                    <div className="relative w-full aspect-[16/10] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col">

                        {/* Sidebar Mock */}
                        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gray-50 border-r border-gray-100 flex flex-col items-center py-6 gap-6 z-20">
                            <div className="w-8 h-8 bg-black rounded-lg mb-4" />
                            <div className="w-5 h-5 rounded bg-gray-200" />
                            <div className="w-5 h-5 rounded bg-blue-100 text-blue-600 flex items-center justify-center"><Globe size={12} /></div>
                            <div className="w-5 h-5 rounded bg-gray-200" />
                            <div className="w-5 h-5 rounded bg-gray-200" />
                        </div>

                        {/* Top Bar */}
                        <div className="h-14 bg-white border-b border-gray-100 flex items-center justify-between px-6 pl-24 z-10">
                            <div className="font-semibold text-sm text-gray-700">Overview</div>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-2 px-2 py-1 bg-green-50 text-green-700 rounded text-xs font-semibold">
                                    <Activity size={10} /> System Operational
                                </div>
                                <div className="w-8 h-8 bg-gray-100 rounded-full" />
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 bg-[#FAFAFA] p-6 pl-24 overflow-hidden relative">
                            {/* Gradient Blur */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />

                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <MetricCard label="Active Regions" value="14" trend="+3 New" delay={0.2} color="bg-blue-500" />
                                <MetricCard label="Total Headcount" value="1,248" trend="+12.5%" delay={0.3} color="bg-purple-500" />
                                <MetricCard label="Payroll Run" value="$4.2M" trend="Processing" delay={0.4} color="bg-green-500" />
                            </div>

                            {/* Graph Area */}
                            <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm h-48 relative overflow-hidden">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Payroll Volume (YTD)</span>
                                </div>
                                {/* SVG Graph */}
                                <svg className="w-full h-full absolute bottom-0 left-0 right-0" preserveAspectRatio="none">
                                    <motion.path
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                        d="M0,150 C100,100 200,180 300,80 C400,0 500,100 600,50 L600,200 L0,200 Z"
                                        fill="url(#gradient)"
                                        fillOpacity="0.1"
                                    />
                                    <motion.path
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                        d="M0,150 C100,100 200,180 300,80 C400,0 500,100 600,50"
                                        stroke="#3B82F6"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#3B82F6" />
                                            <stop offset="100%" stopColor="#ffffff" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Floating Elements (Depth) */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -right-8 top-1/3 bg-white p-4 rounded-xl shadow-xl border border-gray-100 z-30"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                                <CreditCard size={18} />
                            </div>
                            <div>
                                <div className="text-xs font-bold text-gray-400 uppercase">Just Processed</div>
                                <div className="text-sm font-bold text-gray-900">$142,000.00</div>
                            </div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
