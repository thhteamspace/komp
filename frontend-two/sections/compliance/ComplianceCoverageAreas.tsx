'use client';

import { motion } from 'framer-motion';
import { UserCheck, FileText, Banknote, HeartHandshake, UserX } from 'lucide-react';
import Card from '@/components/Card';

const areas = [
    {
        icon: <UserCheck className="w-8 h-8 text-brand-blue" />,
        title: "Worker Classification",
        description: "Distinguish between employees and contractors according to local laws."
    },
    {
        icon: <FileText className="w-8 h-8 text-indigo-400" />,
        title: "Employment Contracts",
        description: "Generate compliant, localized employment agreements instantly."
    },
    {
        icon: <Banknote className="w-8 h-8 text-green-400" />,
        title: "Payroll Tax Compliance",
        description: "Handle withholdings, social security, and tax filings automatically."
    },
    {
        icon: <HeartHandshake className="w-8 h-8 text-red-400" />,
        title: "Benefits Alignment",
        description: "Offer mandatory and statutory benefits packages per country."
    },
    {
        icon: <UserX className="w-8 h-8 text-orange-400" />,
        title: "Termination Rules",
        description: "Navigate severance and notice periods legally."
    }
];

export default function ComplianceCoverageAreas() {
    return (
        <section className="py-24 bg-brand-black text-white relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-slate-800 text-slate-300 text-sm font-semibold tracking-wider mb-6 uppercase border border-slate-700"
                    >
                        Scope of Protection
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-black mb-6"
                    >
                        Total Compliance Coverage
                    </motion.h2>
                    <p className="text-lg text-slate-400">
                        We cover every critical aspect of global employment.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto align-top">
                    {areas.map((area, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full bg-white/5 border-white/10 hover:border-brand-blue/50 hover:bg-white/10 transition-all p-8 flex flex-col items-center text-center group">
                                <div className="p-4 bg-white/5 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {area.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {area.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
