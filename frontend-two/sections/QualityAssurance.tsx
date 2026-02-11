'use client';

import { motion } from 'framer-motion';
import { Lock, FileSpreadsheet, Building2 } from 'lucide-react';

const stabilityFeatures = [
    {
        title: "Data Privacy",
        description: "We are SOC2 Type II and GDPR compliant. Your data is never shared.",
        icon: Lock,
    },
    {
        title: "Transparent Costs",
        description: "No hidden fees. Ensure forecast accuracy with 100% cost clarity.",
        icon: FileSpreadsheet,
    },
    {
        title: "Enterprise Activity",
        description: "SEO/RBA optimized structure for 1000+ employee organizations.",
        icon: Building2,
    },
];

const QualityAssurance = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4"
                    >
                        Built for <span className="text-brand-orange">Stability</span>, Not Just Speed
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 font-medium text-lg"
                    >
                        Enterprise-grade security and compliance at every layer.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stabilityFeatures.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-brand-orange/30 hover:shadow-lg transition-all duration-300 group flex items-start gap-4"
                        >
                            <div className="p-3 rounded-xl bg-orange-50 text-brand-orange shrink-0">
                                <feature.icon size={24} />
                            </div>

                            <div>
                                <h4 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QualityAssurance;
