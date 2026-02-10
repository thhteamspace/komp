'use client';

import { motion } from 'framer-motion';
import { Lock, Shuffle, FileCheck } from 'lucide-react';
import Card from '@/components/Card';

const securityFeatures = [
    {
        icon: <Lock className="w-8 h-8 text-white" />,
        title: "Secure Data Handling",
        description: "End-to-end encryption for all sensitive personnel and financial data."
    },
    {
        icon: <FileCheck className="w-8 h-8 text-brand-orange" />,
        title: "Audit Readiness",
        description: "Always prepared. Comprehensive logs and structured data for effortless audits."
    },
    {
        icon: <Shuffle className="w-8 h-8 text-white" />,
        title: "Enterprise-Grade Controls",
        description: "Advanced permission settings and rigorous access protocols."
    }
];

export default function SecurityDataProtection() {
    return (
        <section className="py-32 bg-gradient-to-br from-brand-blue to-blue-700 text-white relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
                    <div className="w-full md:w-1/2">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            className="text-brand-orange font-bold uppercase tracking-wider text-sm mb-4 block"
                        >
                            Security First
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5 }}
                            className="font-black mb-6 tracking-tighter"
                            style={{ fontSize: 'clamp(36px, 5vw, 70px)', lineHeight: '1.1' }}
                        >
                            Enterprise-Grade <br /> Data Protection
                        </motion.h2>
                        <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-md">
                            Your data integrity is our priority. Built with the highest standards of security and compliance in mind.
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 grid grid-cols-1 gap-6">
                        {securityFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="bg-white/10 border-white/20 hover:bg-white/15 hover:border-white/30 transition-all p-6 flex items-center gap-6">
                                    <div className="p-3 bg-white/10 rounded-xl border border-white/10 shrink-0">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                        <p className="text-white/70 text-sm">{feature.description}</p>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
