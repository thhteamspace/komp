'use client';

import { motion } from 'framer-motion';
import { Lock, FileKey } from 'lucide-react';
import Card from '@/components/Card';

export default function ComplianceSecurity() {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Dark Tech Background */}
            <div className="absolute inset-0 bg-slate-950/80 mix-blend-overlay" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
                <div className="w-full md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 border border-blue-500/20"
                    >
                        <Lock size={16} /> Data Sovereignty
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-black mb-6 leading-tight"
                    >
                        Secure & Controlled <br /> Infrastructure
                    </motion.h2>
                    <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
                        Compliance isn't just about laws; it's about data. We ensure all personal and employment data is stored, processed, and accessed securely.
                    </p>
                </div>

                <div className="w-full md:w-1/2 flex flex-col gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="bg-white/5 border-white/10 hover:bg-white/10 p-6 flex items-start gap-4 transition-all">
                            <div className="p-3 bg-brand-blue/20 rounded-lg shrink-0">
                                <Lock className="text-brand-blue w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Secure Data Management</h3>
                                <p className="text-slate-400 text-sm">Encryption at rest and in transit for all employee compliance documents.</p>
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Card className="bg-white/5 border-white/10 hover:bg-white/10 p-6 flex items-start gap-4 transition-all">
                            <div className="p-3 bg-green-500/20 rounded-lg shrink-0">
                                <FileKey className="text-green-500 w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Controlled Access</h3>
                                <p className="text-slate-400 text-sm">Strict permissioning ensures only authorized personnel can view sensitive compliance data.</p>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
