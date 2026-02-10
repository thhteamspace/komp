'use client';

import { motion } from 'framer-motion';
import { Lock, FileKey } from 'lucide-react';
import Card from '@/components/Card';

export default function ComplianceSecurity() {
    return (
        <section className="py-32 bg-white relative overflow-hidden text-brand-black">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-24 max-w-7xl">
                <div className="w-full lg:w-1/2">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        className="text-brand-blue font-bold text-sm mb-6 block"
                    >
                        Data Sovereignty & Safety
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="font-black text-brand-black mb-8 tracking-tighter"
                        style={{ fontSize: 'clamp(48px, 7vw, 80px)', lineHeight: '1.1' }}
                    >
                        Secure <br /> <span className="text-brand-orange">Infrastructure.</span>
                    </motion.h2>
                    <p className="text-xl text-slate-500 mb-10 max-w-lg leading-relaxed font-medium">
                        Compliance isn&apos;t just about legal rules; it&apos;s about absolute data integrity. We ensure all personal and employment data is stored, processed, and accessed through multi-layered security protocols.
                    </p>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="bg-white border-2 border-slate-100 hover:border-brand-blue/20 hover:shadow-2xl p-10 flex items-start gap-8 transition-all duration-500 rounded-[2.5rem] group">
                            <div className="p-5 bg-slate-50 rounded-2xl group-hover:bg-white group-hover:scale-110 transition-all shadow-sm border border-slate-100 shrink-0">
                                <Lock className="text-brand-blue w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-brand-blue transition-colors">Secure Data Management</h3>
                                <p className="text-slate-600 font-medium leading-relaxed">Enterprise-grade encryption at rest and in transit for all sensitive employee compliance documentation and personal records.</p>
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Card className="bg-white border-2 border-slate-100 hover:border-brand-orange/20 hover:shadow-2xl p-10 flex items-start gap-8 transition-all duration-500 rounded-[2.5rem] group">
                            <div className="p-5 bg-slate-50 rounded-2xl group-hover:bg-white group-hover:scale-110 transition-all shadow-sm border border-slate-100 shrink-0">
                                <FileKey className="text-brand-orange w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-brand-orange transition-colors">Controlled Access Chains</h3>
                                <p className="text-slate-600 font-medium leading-relaxed">Strict role-based permissions and granular oversight ensure only authorized personnel can handle critical compliance data.</p>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
