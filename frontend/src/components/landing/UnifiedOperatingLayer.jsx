import React from 'react';
import { Layers, Globe, Database, ArrowRight, Wallet, Users, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const SpokeCard = ({ icon: Icon, title, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: delay, duration: 0.5 }}
        className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
    >
        <div className="p-2 bg-gray-50 rounded-lg text-gray-700">
            <Icon size={20} />
        </div>
        <div>
            <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
            <p className="text-sm text-gray-500 leading-relaxed font-medium">
                {desc}
            </p>
        </div>
    </motion.div>
);

const UnifiedOperatingLayer = () => {
    return (
        <section className="py-32 bg-gray-50/50 border-b border-gray-200 overflow-hidden relative">
            <div className="container mx-auto px-8 relative z-10">

                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                        The Universal Translation Layer
                    </h2>
                    <p className="text-lg text-gray-500 font-medium leading-relaxed">
                        KOMP unifies the fragmentation of global employment into a single, cohesive operating system.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-center">

                    {/* Left Spokes */}
                    <div className="space-y-6">
                        <SpokeCard
                            delay={0.1}
                            icon={Wallet}
                            title="Global Payroll"
                            desc="Process payments in 160+ currencies with a single click."
                        />
                        <SpokeCard
                            delay={0.2}
                            icon={Users}
                            title="HRIS Sync"
                            desc="Bi-directional data flow with Workday, Hibob, and BambooHR."
                        />
                    </div>

                    {/* Central Hub */}
                    <div className="relative h-[400px] flex items-center justify-center">
                        {/* Connecting Lines (SVG) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 400 400">
                            <path d="M50,100 C150,100 150,200 200,200" fill="none" stroke="black" strokeWidth="2" />
                            <path d="M50,300 C150,300 150,200 200,200" fill="none" stroke="black" strokeWidth="2" />
                            <path d="M350,100 C250,100 250,200 200,200" fill="none" stroke="black" strokeWidth="2" />
                            <path d="M350,300 C250,300 250,200 200,200" fill="none" stroke="black" strokeWidth="2" />
                        </svg>

                        <div className="relative z-10 bg-black text-white p-10 rounded-2xl shadow-2xl flex flex-col items-center justify-center w-64 h-64 text-center border-4 border-gray-100">
                            <Globe size={48} className="mb-4 text-blue-400" />
                            <div className="font-bold text-xl mb-2">Internal Core</div>
                            <div className="text-xs text-gray-400 font-mono bg-gray-900 px-2 py-1 rounded">
                                API: /v1/core
                            </div>
                        </div>

                        {/* Orbiting Elements */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                            className="absolute w-[350px] h-[350px] border border-dashed border-gray-300 rounded-full -z-10"
                        />
                    </div>

                    {/* Right Spokes */}
                    <div className="space-y-6">
                        <SpokeCard
                            delay={0.3}
                            icon={FileCheck}
                            title="Auto-Compliance"
                            desc="Documents and tax filings generated automatically per region."
                        />
                        <SpokeCard
                            delay={0.4}
                            icon={Database}
                            title="Unified Data"
                            desc="A single source of truth for headcount, spend, and liability."
                        />
                    </div>

                </div>

            </div>
        </section>
    );
};

export default UnifiedOperatingLayer;
