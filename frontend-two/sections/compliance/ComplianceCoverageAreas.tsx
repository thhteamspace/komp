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
        <section className="py-32 bg-slate-50 relative overflow-hidden">
            {/* Background Details */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-blue font-bold tracking-widest text-sm mb-4 block"
                    >
                        Scope of Protection
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="font-black text-brand-black mb-6 tracking-tighter"
                        style={{ fontSize: 'clamp(48px, 7vw, 80px)', lineHeight: '1.1' }}
                    >
                        Total Compliance <span className="text-brand-orange">Coverage.</span>
                    </motion.h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                        We cover every critical aspect of global employment, ensuring your expansion is seamless and completely protected.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto align-top">
                    {areas.map((area, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="h-full bg-white border-2 border-slate-100 hover:border-brand-blue/20 hover:shadow-2xl transition-all duration-500 p-8 flex flex-col items-center text-center group rounded-[2.5rem]">
                                <div className="p-6 bg-slate-50 rounded-[2rem] mb-8 group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-sm border border-slate-100">
                                    {area.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-blue transition-colors">
                                    {area.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed font-medium">
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
