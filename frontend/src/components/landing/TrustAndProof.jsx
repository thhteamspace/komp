import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Activity, Check } from 'lucide-react';

const Beacon = ({ x, y, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.5 }}
        className="absolute w-2 h-2 bg-blue-500 rounded-full z-10"
        style={{ left: x, top: y }}
    >
        <motion.div
            animate={{ scale: [1, 3], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-blue-400 rounded-full"
        />
    </motion.div>
);

const WorldMap = () => (
    <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-multiply">
        {/* Fine Dot Grid for Technical Feel */}
        <div className="w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />

        {/* US */}
        <Beacon x="25%" y="35%" delay={0.2} />
        <Beacon x="22%" y="32%" delay={0.5} />

        {/* Europe */}
        <Beacon x="48%" y="30%" delay={0.6} />
        <Beacon x="50%" y="28%" delay={0.9} />

        {/* Asia */}
        <Beacon x="75%" y="40%" delay={1.0} />
        <Beacon x="80%" y="45%" delay={1.2} />

        {/* South America */}
        <Beacon x="32%" y="65%" delay={1.6} />
    </div>
);

const StatItem = ({ label, value, icon: Icon, delay, isLast }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className={`flex-1 p-8 md:p-12 flex flex-col items-start justify-between min-h-[240px] relative group ${!isLast ? 'border-b md:border-b-0 md:border-r border-gray-100' : ''}`}
    >
        <div className="w-full flex justify-between items-start mb-auto">
            <div className="p-3 rounded-xl bg-gray-50 text-gray-900 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                <Icon size={24} strokeWidth={1.5} />
            </div>
            {/* Live Indicator */}
            <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
            </div>
        </div>

        <div>
            <div className="text-6xl md:text-7xl font-bold text-gray-900 tracking-tighter mb-2">
                {value}
            </div>
            <div className="text-base font-semibold text-gray-500 uppercase tracking-widest">
                {label}
            </div>
        </div>
    </motion.div>
);

const TrustAndProof = () => {
    return (
        <section className="py-32 bg-white relative overflow-hidden text-left">

            <WorldMap />

            <div className="container mx-auto px-4 md:px-8 relative z-10">

                {/* Header Left Aligned for Modern Feel */}
                <div className="max-w-4xl mb-24">
                    <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tighter leading-[0.9]">
                        Proven at <br className="hidden md:block" />
                        <span className="text-gray-300">Scale.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-2xl leading-relaxed">
                        Case Studies: Accelerating growth while reducing cost leakage and compliance bottlenecks.
                    </p>
                </div>

                {/* Unified Infrastructure Grid */}
                <div className="bg-white border border-gray-100 rounded-[2rem] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.1)] flex flex-col md:flex-row overflow-hidden mb-20 backdrop-blur-sm bg-white/80">
                    <StatItem
                        label="Active Countries"
                        value="160+"
                        icon={Globe}
                        delay={0.2}
                    />
                    <StatItem
                        label="Uptime Reliability"
                        value="99.99%"
                        icon={Activity}
                        delay={0.3}
                    />
                    <StatItem
                        label="Compliance Rate"
                        value="100%"
                        icon={ShieldCheck}
                        delay={0.4}
                        isLast={true}
                    />
                </div>

                {/* Compliance Strip - Clean List */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap items-center gap-8 md:gap-12 text-sm font-bold text-gray-400 uppercase tracking-widest border-t border-gray-100 pt-12"
                >
                    <span className="flex items-center gap-3 text-gray-900">
                        <Check size={18} className="text-blue-600" /> SOC2 Type II
                    </span>
                    <span className="flex items-center gap-3 text-gray-900">
                        <Check size={18} className="text-blue-600" /> GDPR Ready
                    </span>
                    <span className="flex items-center gap-3 text-gray-900">
                        <Check size={18} className="text-blue-600" /> ISO 27001
                    </span>
                    <span className="hidden md:block flex-1 border-t border-gray-100" />
                    <span className="text-gray-300">Audited by Deloitte</span>
                </motion.div>

            </div>
        </section>
    );
};

export default TrustAndProof;
