'use client';

import { motion } from 'framer-motion';
import { LayoutGrid, Database, Eye, Shuffle } from 'lucide-react';

const features = [
    {
        icon: <LayoutGrid className="w-10 h-10 text-brand-blue" />,
        title: "One Login",
        description: "Access all your global operations from a single dashboard.",
        color: "bg-brand-blue/5 border-brand-blue/20"
    },
    {
        icon: <Database className="w-10 h-10 text-brand-orange" />,
        title: "Centralized Data",
        description: "Unified workforce and payroll data eliminates fragmentation.",
        color: "bg-brand-orange/5 border-brand-orange/20"
    },
    {
        icon: <Eye className="w-10 h-10 text-green-500" />,
        title: "End-to-End Visibility",
        description: "See everything from hiring to payment in real-time.",
        color: "bg-green-500/5 border-green-500/20"
    },
    {
        icon: <Shuffle className="w-10 h-10 text-purple-500" />,
        title: "Reduced Silos",
        description: "Connect HR, Finance, and Legal teams in one workflow.",
        color: "bg-purple-500/5 border-purple-500/20"
    }
];

export default function UnifiedOperatingSystem() {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-blue font-bold tracking-widest text-sm mb-4 block"
                    >
                        Operating Architecture
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-6xl md:text-8xl font-black text-brand-black mb-6 leading-[1.1] tracking-tight"
                    >
                        Unified Operating <span className="text-brand-orange">System.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl text-slate-500 max-w-2xl mx-auto"
                    >
                        A single OS for your entire global workforce. Simplify complexity with one platform.
                    </motion.p>
                </div>

                {/* Unique 2-column horizontal card layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`group relative rounded-[1.5rem] border-2 ${feature.color} p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-white overflow-hidden`}
                        >
                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity">
                                {feature.icon}
                            </div>

                            <div className="flex items-start gap-5 relative z-10">
                                <div className="p-3 bg-white rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300 shrink-0">
                                    {feature.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-orange transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
