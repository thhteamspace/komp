'use client';

import { motion } from 'framer-motion';
import { Shield, Key, FileCheck, Gavel } from 'lucide-react';
import Card from '@/components/Card';

const controls = [
    {
        icon: <Key className="w-8 h-8 text-brand-blue" />,
        title: "Role-Based Permissions",
        description: "Ensure the right people have the right access."
    },
    {
        icon: <Shield className="w-8 h-8 text-brand-orange" />,
        title: "Approval Workflows",
        description: "Set up multi-level approvals for sensitive actions."
    },
    {
        icon: <FileCheck className="w-8 h-8 text-green-400" />,
        title: "Audit Trails",
        description: "Complete history of every change and transaction."
    },
    {
        icon: <Gavel className="w-8 h-8 text-yellow-400" />,
        title: "Accountability",
        description: "Transparent logs for internal and external reviews."
    }
];

export default function GovernanceControls() {
    return (
        <section className="py-32 bg-slate-50 relative overflow-hidden text-brand-black">
            {/* Decorative Background details */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-1/4 left-10 w-64 h-64 bg-brand-blue/10 rounded-full blur-[80px]" />
                <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-brand-orange/10 rounded-full blur-[80px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-blue font-bold tracking-widest text-sm mb-4 block"
                    >
                        Operational Oversight
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="font-black text-brand-black mb-6 tracking-tighter"
                        style={{ fontSize: 'clamp(48px, 7vw, 80px)', lineHeight: '1.1' }}
                    >
                        Governance & <span className="text-brand-orange">Controls.</span>
                    </motion.h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                        Maintain strict oversight of your global operations with advanced permissions and automated approval chains.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {controls.map((control, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full bg-white border-2 border-slate-100 hover:border-brand-orange/20 hover:shadow-2xl text-center p-8 transition-all duration-500 rounded-[2.5rem] group">
                                <div className="p-5 bg-slate-50 rounded-[2rem] mb-8 mx-auto w-fit group-hover:scale-110 group-hover:bg-white transition-all shadow-sm border border-slate-100">
                                    {control.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-orange transition-colors">
                                    {control.title}
                                </h3>
                                <p className="text-slate-600 font-medium leading-relaxed">
                                    {control.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
