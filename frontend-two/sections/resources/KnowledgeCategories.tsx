'use client';

import { motion } from 'framer-motion';
import { ShieldAlert, CreditCard, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '@/components/Button';

const categories = [
    {
        id: 'compliance',
        index: '01',
        title: 'Compliance & Risk Insights',
        icon: <ShieldAlert className="w-8 h-8" />,
        desc: "Labor law monitoring and regional regulatory shifts to mitigate misclassification risks.",
        regions: ['APAC', 'EMEA'],
        items: [
            "2026 Misclassification Protection",
            "Data Privacy (GDPR/APPI) Shield",
            "Regional Labor Law Monitoring"
        ],
        cta: "Explore Compliance",
        accent: "text-brand-orange",
        accentBg: "bg-brand-orange"
    },
    {
        id: 'payroll',
        index: '02',
        title: 'Global Payroll & Finance',
        icon: <CreditCard className="w-8 h-8" />,
        desc: "Treasury optimization and unified global invoicing workflows for finance leadership.",
        regions: ['GLOBAL', 'AMER'],
        items: [
            "Multi-Currency Treasury Optimization",
            "Automated Tax Withholding Frameworks",
            "Global Invoicing: Accuracy & Auditing"
        ],
        cta: "Explore Finance",
        accent: "text-brand-blue",
        accentBg: "bg-brand-blue"
    },
    {
        id: 'expansion',
        index: '03',
        title: 'Expansion Strategy',
        icon: <TrendingUp className="w-8 h-8" />,
        desc: "Scalable market entry playbooks and testing strategies without legal friction.",
        regions: ['LATAM', 'EU'],
        items: [
            "Hiring Your First Global Employee",
            "Market Testing: Scaling Without Entities",
            "The Hybrid-Remote Operations Playbook"
        ],
        cta: "Explore Strategy",
        accent: "text-emerald-500",
        accentBg: "bg-emerald-500"
    }
];

const KnowledgeCategories = () => {
    return (
        <section className="py-24 px-6 bg-white overflow-hidden relative">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />

            <div className="w-full max-w-7xl mx-auto relative z-10 px-6">
                {/* Section Header - Centered & Responsive */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="mb-4 block"
                    >
                        <span className="text-base font-bold text-brand-blue">Intelligence Library</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-slate-950 mb-6"
                    >
                        Strategic <span className="text-brand-orange">Categories.</span>
                    </motion.h2>
                </div>

                {/* Premium Card Grid - Similar to BusinessSizeSolutions */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group flex flex-col rounded-[2.5rem] border border-slate-200/60 bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Icon Box */}
                            <div className={`mb-6 ${cat.accentBg}/10 w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                                <div className={cat.accent}>
                                    {cat.icon}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-3xl font-black text-brand-black mb-4">{cat.title}</h3>

                            {/* Description */}
                            <p className="text-slate-600 mb-8 font-medium">{cat.desc}</p>

                            {/* Benefits List with Check Icons */}
                            <div className="space-y-4 mb-10 flex-grow">
                                {cat.items.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ delay: 0.2 + (idx * 0.1) }}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle2 className={`w-5 h-5 ${cat.accent} mt-0.5 shrink-0`} />
                                        <span className="text-slate-700 font-semibold">{item}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <Button
                                variant="primary"
                                className="w-full h-14 font-black tracking-wide bg-brand-black text-white hover:bg-brand-orange hover:text-white"
                            >
                                {cat.cta} <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KnowledgeCategories;
