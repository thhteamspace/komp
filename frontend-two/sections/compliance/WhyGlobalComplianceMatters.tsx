'use client';

import { motion } from 'framer-motion';
import { AlertOctagon, Scale, TrendingDown, BookOpen } from 'lucide-react';
import Card from '@/components/Card';

const risks = [
    {
        icon: <AlertOctagon className="w-8 h-8 text-red-500" />,
        title: "Misclassification Risks",
        description: "Incorrectly labeling workers as contractors instead of employees can lead to severe fines and legal action."
    },
    {
        icon: <Scale className="w-8 h-8 text-brand-orange" />,
        title: "Regulatory Penalties",
        description: "Non-compliance with local labor laws often results in significant financial penalties and operational bans."
    },
    {
        icon: <TrendingDown className="w-8 h-8 text-yellow-500" />,
        title: "Tax & Labor Law Variation",
        description: "Every country has unique tax codes and employment regulations that change frequently."
    },
    {
        icon: <BookOpen className="w-8 h-8 text-brand-blue" />,
        title: "Operational Liability",
        description: "Your company is liable for every worker. Ignorance of local laws is not a valid legal defense."
    }
];

export default function WhyGlobalComplianceMatters() {
    return (
        <section className="py-24 bg-zinc-900 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Why Global Compliance Matters
                    </motion.h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Expanding globally introduces complex legal challenges. Understanding the risks is the first step to mitigation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {risks.map((risk, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full bg-zinc-800/50 border-zinc-700 hover:border-zinc-500 transition-all p-8 flex items-start gap-6 group hover:shadow-lg hover:shadow-red-900/10">
                                <div className="p-4 bg-zinc-800 rounded-2xl shadow-sm border border-zinc-700 group-hover:scale-110 transition-transform duration-300 shrink-0">
                                    {risk.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">{risk.title}</h3>
                                    <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                                        {risk.description}
                                    </p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
