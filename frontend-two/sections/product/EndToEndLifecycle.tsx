'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const steps = [
    { title: 'Activate', action: 'Onboard', description: 'Seamlessly invite and setup new entities.' },
    { title: 'Workforce', action: 'Manage People', description: 'Centralized directory for all workers.' },
    { title: 'TimeOps', action: 'Track Work', description: 'Approve hours and manage leave.' },
    { title: 'PayOps', action: 'Pay & Invoice', description: 'Process global payments in one click.' },
    { title: 'Governance', action: 'Control Access', description: 'Secure roles and permissions.' },
    { title: 'Insights', action: 'Monitor & Alert', description: 'Real-time compliance notifications.' }
];

export default function EndToEndLifecycle() {
    return (
        <section className="py-32 bg-slate-50 relative overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-blue font-bold tracking-widest text-sm mb-4 block"
                    >
                        Management Journey
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="font-black text-brand-black mb-6 tracking-tighter"
                        style={{ fontSize: 'clamp(48px, 7vw, 80px)', lineHeight: '1.1' }}
                    >
                        End-to-End <span className="text-brand-orange">Lifecycle.</span>
                    </motion.h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                        From activation to insights, simplify every stage of employment.
                    </p>
                </div>

                {/* Clean 3-column grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-white rounded-[2rem] p-8 border-2 border-slate-100 hover:border-brand-orange hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                        >
                            {/* Number Badge */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-slate-100 group-hover:bg-brand-orange text-slate-900 group-hover:text-white flex items-center justify-center font-semibold text-2xl transition-all duration-300 shadow-sm">
                                    {index + 1}
                                </div>
                                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-brand-orange group-hover:translate-x-1 transition-all duration-300" />
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-orange transition-colors">
                                {step.title}
                            </h3>

                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wide mb-4">
                                {step.action}
                            </div>

                            <p className="text-slate-600 leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
