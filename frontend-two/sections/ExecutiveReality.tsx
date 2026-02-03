'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Building2, Banknote, AlertTriangle, ArrowUpRight } from 'lucide-react';

const realityItems = [
    {
        title: 'Compliance Drag',
        description: 'Contractor misclassification fines exceed $100k per hire. We provide the legal guardrails to protect your balance sheet.',
        icon: ShieldCheck,
        color: 'from-blue-500 to-cyan-500',
        borderColor: 'group-hover:border-blue-500/50',
        tag: 'Risk: $100k+ / hire'
    },
    {
        title: 'The Entity Trap',
        description: 'Local legal setup takes ~6 months. KOMP enables full-compliant global go-live in just 48 hours.',
        icon: Building2,
        color: 'from-orange-500 to-red-600',
        borderColor: 'group-hover:border-orange-500/50',
        tag: 'Speed: 48 Hours'
    },
    {
        title: 'The Retention Gap',
        description: 'Payroll delays cause immediate attrition. We maintain a 99% payroll accuracy rate to keep your talent engaged.',
        icon: Banknote,
        color: 'from-green-500 to-emerald-600',
        borderColor: 'group-hover:border-green-500/50',
        tag: 'Accuracy: 99%'
    },
];

const ExecutiveReality = () => {
    return (
        <section className="py-32 bg-brand-black relative overflow-hidden">
            {/* Dark Premium Background Detail */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03)_0%,transparent_50%)]" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-white/10 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
                        <AlertTriangle size={14} className="text-red-500" />
                        <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">Global Risk Analysis</span>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-bold mb-8 text-brand-white tracking-tighter leading-[1.15]">
                        The High Cost of <br />
                        <span className="text-brand-white/20 italic block mt-4">Fragmented Global Hiring.</span>
                    </h2>
                    <p className="text-xl text-brand-white/40 max-w-2xl mx-auto font-medium leading-relaxed">
                        Don't let legacy processes slow your expansion. KOMP eliminates the compliance barriers that hold modern leaders back.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {realityItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            className="group relative"
                        >
                            {/* Animated Background Gradient on Hover */}
                            <div className={`absolute -inset-1 bg-gradient-to-br ${item.color} rounded-[2.5rem] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />

                            <div className={`relative h-full flex flex-col p-10 rounded-[2rem] bg-[#1C1C1E] border border-brand-white/5 transition-all duration-500 ${item.borderColor} group-hover:translate-y-[-8px] overflow-hidden`}>

                                {/* Top Badge */}
                                <div className="flex justify-between items-start mb-12">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg shadow-black group-hover:scale-110 transition-transform duration-500`}>
                                        <item.icon size={28} />
                                    </div>
                                    <motion.span
                                        initial={{ x: 20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{ once: false }}
                                        transition={{ delay: 0.3 }}
                                        className="text-[10px] font-black uppercase tracking-widest text-brand-white/20 group-hover:text-brand-white/40 transition-colors"
                                    >
                                        {item.tag}
                                    </motion.span>
                                </div>

                                <div className="flex-grow">
                                    <h4 className="text-2xl font-bold mb-4 text-brand-white tracking-tight">
                                        {item.title}
                                    </h4>
                                    <p className="text-brand-white/40 leading-relaxed font-medium group-hover:text-brand-white/60 transition-colors duration-300">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="mt-12 flex items-center justify-between">
                                    <div className="text-[10px] font-black text-brand-white/20 uppercase tracking-widest group-hover:text-brand-orange transition-colors">
                                        Solution Found
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-brand-white/5 border border-brand-white/10 flex items-center justify-center group-hover:bg-brand-orange group-hover:border-transparent transition-all duration-500">
                                        <ArrowUpRight size={18} className="text-brand-white/40 group-hover:text-white group-hover:rotate-45 transition-all duration-500" />
                                    </div>
                                </div>

                                {/* Subtle corner accent */}
                                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.03] blur-2xl transition-opacity duration-500`} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExecutiveReality;
