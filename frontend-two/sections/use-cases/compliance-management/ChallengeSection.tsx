'use client';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

const ChallengeSection = () => {
    return (
        <section className="bg-white relative overflow-hidden">
            <div className="grid lg:grid-cols-2 min-h-[600px]">
                <div className="flex flex-col justify-center px-8 py-16 lg:p-20 lg:pr-16 order-2 lg:order-1 border-r border-gray-100">
                    <div className="max-w-xl ml-auto">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-sm font-bold text-brand-orange tracking-widest uppercase mb-6"
                        >
                            The Challenge
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-black text-slate-900 mb-10 leading-[0.95]"
                        >
                            Global Growth Created<br />
                            <span className="text-slate-400">Internal Friction.</span>
                        </motion.h3>

                        <div className="space-y-8 font-medium text-slate-600 prose prose-xl">
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <strong className="text-slate-900">HR Overload:</strong> The People team was overwhelmed by manual data entry across disparate systems, leading to onboarding delays and an inconsistent employee experience across regions.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <strong className="text-slate-900">Finance Fragmented Cost Control:</strong> With payroll data siloed in local providers, Finance lacked real-time visibility into global spend, resulting in budget overruns and reconciliation nightmares.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                <strong className="text-slate-900">Legal Compliance Exposure:</strong> Tracking contract variations and regulatory changes manually left the company exposed to significant compliance risks in new markets.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="mt-16 flex items-center gap-12"
                        >
                            <div>
                                <div className="text-5xl font-black text-slate-900 tracking-tighter">3</div>
                                <div className="text-sm text-slate-400 font-bold uppercase tracking-wide mt-2">Siloed Depts</div>
                            </div>
                            <div className="w-px h-16 bg-slate-200"></div>
                            <div>
                                <div className="text-5xl font-black text-slate-900 tracking-tighter">400h</div>
                                <div className="text-sm text-slate-400 font-bold uppercase tracking-wide mt-2">Lost Monthly</div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="relative h-[500px] lg:h-auto order-1 lg:order-2 bg-[#f8f6f5] p-12 lg:pr-24 lg:py-16">
                    <img
                        alt="Global Team Collaboration"
                        className="relative w-full h-full object-cover transition-all duration-700 rounded-3xl"
                        src="https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80"
                    />
                    <div className="absolute inset-12 lg:inset-y-16 lg:left-12 lg:right-24 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent rounded-3xl"></div>
                </div>
            </div>
        </section>
    );
};

export default ChallengeSection;
