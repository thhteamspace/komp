import React from 'react';
import { motion } from 'framer-motion';
import { Shield, User, FileText, Check } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay, duration: 0.5 }}
        viewport={{ once: true }}
        className="group p-6 rounded-2xl bg-[#111] border border-white/5 hover:border-white/10 transition-colors flex items-start gap-6 cursor-default"
    >
        <div className="p-3 bg-white/5 rounded-xl text-white/80 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-colors">
            <Icon size={24} />
        </div>
        <div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
        </div>
    </motion.div>
);

const CompetitiveKill = () => {
    return (
        <section className="py-32 bg-[#050505] text-white relative">
            {/* Seamless Gradient to ensure blend with Top Section if needed */}
            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left Side: Typography & Stats */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            {/* Decorative Blur */}
                            <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

                            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight relative z-10">
                                Compliance You Can <br />
                                <span className="text-white/40">Stand Behind.</span>
                            </h2>
                            <p className="text-xl text-white/50 mb-12 leading-relaxed max-w-lg">
                                Automation isn't enough. We provide a human-led compliance shield, reinforced by technology and accountable expertise.
                            </p>

                            {/* Stats */}
                            <div className="flex gap-16 border-t border-white/10 pt-8">
                                <div>
                                    <div className="text-5xl font-bold text-white mb-2 tracking-tight">160+</div>
                                    <div className="text-xs font-bold text-white/40 uppercase tracking-widest">Countries</div>
                                </div>
                                <div>
                                    <div className="text-5xl font-bold text-white mb-2 tracking-tight">100%</div>
                                    <div className="text-xs font-bold text-white/40 uppercase tracking-widest">Compliance</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Feature Stack */}
                    <div className="grid gap-4">
                        <FeatureItem
                            icon={User}
                            title="Human Oversight"
                            desc="Human oversight across employment, payroll, and labor compliance. We don't just rely on bots."
                            delay={0.2}
                        />
                        <FeatureItem
                            icon={Shield}
                            title="Continuous Monitoring"
                            desc="Continuous monitoring of regulatory changes across jurisdictions. We stay ahead of local laws."
                            delay={0.3}
                        />
                        <FeatureItem
                            icon={FileText}
                            title="Liability Transfers"
                            desc="We safeguard clients against misclassification and disputes. You retain direction, we take the risk."
                            delay={0.4}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CompetitiveKill;
