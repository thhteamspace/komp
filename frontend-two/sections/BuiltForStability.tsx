'use client';

import { motion } from 'framer-motion';
import { Headset, Banknote, ShieldCheck } from 'lucide-react';

const features = [
    {
        icon: Headset,
        title: "Direct Support",
        desc: "No \"bot\" tiers. You get a dedicated Global Success Manager."
    },
    {
        icon: Banknote,
        title: "Transparent Rails",
        desc: "We disclose our FX markups. No hidden \"In-country partner\" fees."
    },
    {
        icon: ShieldCheck,
        title: "Enterprise Safety",
        desc: "SOC2 and ISO 27001 are our baseline, not an upsell."
    }
];

const BuiltForStability = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6"
                    >
                        Built <span className="text-brand-orange">for Stability</span>, Not Just Speed
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-500 font-medium"
                    >
                        Designed for audit-readiness, board reporting, and long-term global operations.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-[2rem] p-10 border border-brand-orange/20 shadow-[0_20px_40px_-10px_rgba(255,140,26,0.05)] hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="w-16 h-16 bg-white border-2 border-slate-950 rounded-2xl flex items-center justify-center text-slate-900 mb-8 shadow-[4px_4px_0px_#000]">
                                <feature.icon strokeWidth={1.5} size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-orange mb-4">{feature.title}</h3>
                            <p className="text-slate-600 font-medium leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default BuiltForStability;
