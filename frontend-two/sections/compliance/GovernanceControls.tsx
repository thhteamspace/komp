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
        <section className="py-24 bg-brand-black text-white relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-black mb-6"
                    >
                        Governance & Controls
                    </motion.h2>
                    <p className="text-lg text-slate-400">
                        Maintain strict oversight of your global operations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {controls.map((control, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full bg-white/5 border-white/10 hover:border-brand-blue/30 text-center p-8 transition-all hover:bg-white/10">
                                <div className="p-4 bg-white/5 rounded-full mb-6 mx-auto w-fit">
                                    {control.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{control.title}</h3>
                                <p className="text-slate-400 text-sm">
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
