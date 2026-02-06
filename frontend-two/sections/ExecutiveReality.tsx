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
        <section id="reality" className="py-20 bg-white relative overflow-hidden scroll-mt-32">
            {/* Premium Light Background Detail */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-white to-white" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                    className="text-center mb-20"
                >
                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="inline-flex items-center gap-2 mb-8"
                    >
                        <span className="text-base font-bold text-brand-blue tracking-wide">Critical Intelligence</span>
                    </motion.div>

                    <motion.h2
                        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
                        className="font-black mb-6 text-slate-950 tracking-tighter"
                        style={{ fontSize: '5vw', lineHeight: '1' }}
                    >
                        The High Cost of <br />
                        <span className="text-brand-orange">
                            Fragmented Hiring.
                        </span>
                    </motion.h2>

                    <motion.p
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed"
                    >
                        Don't let legacy processes slow your expansion. KOMP eliminates the compliance barriers that hold modern leaders back.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {realityItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            className="group relative"
                        >
                            {/* Animated Background Gradient on Hover - Subtle */}
                            <div className={`absolute -inset-1 bg-gradient-to-br ${item.color} rounded-[2.5rem] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

                            <div className={`relative h-full flex flex-col p-6 rounded-[1.25rem] bg-slate-50 border border-slate-200 transition-all duration-500 ${item.borderColor} group-hover:translate-y-[-8px] group-hover:bg-white group-hover:shadow-2xl overflow-hidden`}>

                                {/* Top Section with Icon */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 bg-white border border-slate-100 shadow-sm
                                        ${index === 0 ? 'text-blue-600' : index === 1 ? 'text-orange-600' : 'text-emerald-600'}`}>
                                        <item.icon size={24} />
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <h4 className="text-xl font-bold mb-3 text-slate-900 tracking-tight">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-slate-500 leading-relaxed font-medium mb-4 group-hover:text-slate-600 transition-colors duration-300">
                                        {item.description}
                                    </p>

                                    {/* Tag moved to bottom of description */}
                                    <div className="flex items-center gap-2">
                                        <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border 
                                            ${index === 0 ? 'bg-blue-50 text-blue-600 border-blue-100' :
                                                index === 1 ? 'bg-brand-orange/10 text-brand-orange border-brand-orange/20' :
                                                    'bg-emerald-50 text-emerald-600 border-emerald-100'}`}>
                                            {item.tag}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-8 flex items-center justify-end">
                                    <div className="w-8 h-8 rounded-full bg-slate-200/50 border border-slate-200 flex items-center justify-center group-hover:bg-brand-orange group-hover:border-transparent transition-all duration-500">
                                        <ArrowUpRight size={16} className="text-slate-400 group-hover:text-white group-hover:rotate-45 transition-all duration-500" />
                                    </div>
                                </div>

                                {/* Subtle corner accent */}
                                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500`} />

                                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    <div className="text-[200px] leading-none absolute -bottom-16 -right-10 font-serif opacity-[0.03] select-none pointer-events-none">
                                        {index + 1}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default ExecutiveReality;
