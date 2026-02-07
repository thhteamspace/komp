'use client';

import { motion } from 'framer-motion';
import { ShieldAlert, CreditCard, TrendingUp, ArrowRight } from 'lucide-react';

const categories = [
    {
        id: 'compliance',
        index: '01',
        title: 'Compliance & Risk Insights',
        icon: <ShieldAlert className="w-5 h-5" />,
        desc: "Labor law monitoring and regional regulatory shifts to mitigate misclassification risks.",
        regions: ['APAC', 'EMEA'],
        items: [
            { title: "2026 Misclassification Protection", type: "Security" },
            { title: "Data Privacy (GDPR/APPI) Shield", type: "Legal" },
            { title: "Regional Labor Law Monitoring", type: "Insight" }
        ],
        accent: "text-brand-orange"
    },
    {
        id: 'payroll',
        index: '02',
        title: 'Global Payroll & Finance',
        icon: <CreditCard className="w-5 h-5" />,
        desc: "Treasury optimization and unified global invoicing workflows for finance leadership.",
        regions: ['GLOBAL', 'AMER'],
        items: [
            { title: "Multi-Currency Treasury Optimization", type: "Finance" },
            { title: "Automated Tax Withholding Frameworks", type: "Article" },
            { title: "Global Invoicing: Accuracy & Auditing", type: "Audit" }
        ],
        accent: "text-brand-blue"
    },
    {
        id: 'expansion',
        index: '03',
        title: 'Expansion Strategy',
        icon: <TrendingUp className="w-5 h-5" />,
        desc: "Scalable market entry playbooks and testing strategies without legal friction.",
        regions: ['LATAM', 'EU'],
        items: [
            { title: "Hiring Your First Global Employee", type: "Strategy" },
            { title: "Market Testing: Scaling Without Entities", type: "Growth" },
            { title: "The Hybrid-Remote Operations Playbook", type: "Ops" }
        ],
        accent: "text-emerald-500"
    }
];

const KnowledgeCategories = () => {
    return (
        <section className="pt-20 pb-40 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header - Centered & Responsive */}
                <div className="flex flex-col items-center text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="mb-8 block"
                    >
                        <span className="text-base font-bold text-brand-blue">Intelligence Library</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.1 }}
                        className="font-black text-slate-950 tracking-tighter leading-tight"
                        style={{ fontSize: '4vw' }}
                    >
                        Strategic <span className="text-brand-orange italic">Categories.</span>
                    </motion.h2>
                </div>

                {/* 3-Column Professional Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-y border-slate-100">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className={`py-20 lg:px-12 group transition-all duration-700 hover:bg-slate-50 relative ${i !== 2 ? 'lg:border-r border-slate-100' : ''} border-b lg:border-b-0 border-slate-100 last:border-b-0`}
                        >
                            {/* Background Index Number */}
                            <motion.span
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false }}
                                transition={{ delay: i * 0.1 + 0.3, duration: 1 }}
                                className="absolute top-10 right-10 text-8xl font-black text-slate-50 group-hover:text-slate-100 transition-colors pointer-events-none select-none"
                            >
                                {cat.index}
                            </motion.span>

                            <div className="relative z-10 space-y-12">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <motion.div
                                            initial={{ scale: 0.8 }}
                                            whileInView={{ scale: 1 }}
                                            className={`w-12 h-12 rounded-xl bg-gradient-to-br from-white to-slate-50 shadow-lg border border-white/60 flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-500`}
                                        >
                                            <div className={`absolute inset-0 opacity-10 ${cat.accent.replace('text-', 'bg-')}`} />
                                            <div className={`relative z-10 ${cat.accent}`}>
                                                {cat.icon}
                                            </div>
                                        </motion.div>
                                        <div className="flex gap-1">
                                            {cat.regions.map((r, ri) => (
                                                <motion.span
                                                    key={r}
                                                    initial={{ opacity: 0, x: -5 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.1 + ri * 0.05 }}
                                                    className="text-[8px] font-black text-slate-300 border border-slate-100 px-1.5 py-0.5 rounded uppercase"
                                                >
                                                    {r}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                    <h3 className="text-3xl font-black text-slate-950 tracking-tighter leading-tight max-w-[200px]">
                                        {cat.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-sm">
                                        {cat.desc}
                                    </p>
                                </div>

                                {/* Insight List */}
                                <div className="space-y-4">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Featured Modules</span>
                                    <div className="space-y-2">
                                        {cat.items.map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -20, y: -10 }} // Slide in from top-left
                                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                                viewport={{ once: false, amount: 0.5 }} // Trigger when 50% visible
                                                transition={{
                                                    delay: 0.2 + (idx * 0.2), // Slightly slower stagger
                                                    duration: 0.8, // Slower animation
                                                    ease: "easeOut"
                                                }}
                                                className="group/item flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-50 hover:border-slate-200 transition-all cursor-pointer shadow-sm hover:shadow-md"
                                            >
                                                <div className="space-y-1">
                                                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 group-hover/item:text-brand-orange">
                                                        {item.type}
                                                    </span>
                                                    <h4 className="text-[13px] font-bold text-slate-950 tracking-tight">
                                                        {item.title}
                                                    </h4>
                                                </div>
                                                <ArrowRight size={14} className="text-slate-200 group-hover/item:text-brand-orange group-hover/item:translate-x-1 transition-all" />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Link */}
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: false }}
                                    className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-brand-orange transition-colors"
                                >
                                    Explore Category <ArrowRight size={12} />
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KnowledgeCategories;
