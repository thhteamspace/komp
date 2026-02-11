'use client';

import { motion } from 'framer-motion';
import { Clock, ShieldCheck, LayoutDashboard, Target, ArrowRight, Sparkles } from 'lucide-react';
import Button from '@/components/Button';

const outcomes = [
    {
        title: "Faster Market Entry",
        desc: "Without long-term structural commitments.",
        icon: <Clock className="w-10 h-10 text-brand-orange" />
    },
    {
        title: "Reduced Exposure",
        desc: "Legal and compliance risk minimized across all regions.",
        icon: <ShieldCheck className="w-10 h-10 text-brand-orange" />
    },
    {
        title: "Centralized Visibility",
        desc: "Into payroll and workforce spend globally.",
        icon: <LayoutDashboard className="w-10 h-10 text-brand-orange" />
    },
    {
        title: "Growth Focus",
        desc: "Leadership time redirected from bureaucracy to strategy.",
        icon: <Target className="w-10 h-10 text-brand-orange" />
    }
];

const OutcomesSection = () => {
    return (
        <section className="py-24 bg-brand-orange relative overflow-hidden">
            {/* Background Texture/Sparkle */}
            <div className="absolute bottom-10 right-10 opacity-40">
                <Sparkles className="w-12 h-12 text-white" />
            </div>

            <div className="max-w-7xl mx-auto px-6">

                {/* Header Section */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white mb-8 tracking-tighter leading-[1.1]"
                    >
                        Outcomes After 90 Days: Control <br className="hidden lg:block" />
                        Regained over Speed, Cost, and Risk.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-white/90 max-w-3xl mx-auto font-medium"
                    >
                        By replacing fragmented expansion with centralized infrastructure, global hiring became predictable and scalable.
                    </motion.p>
                </div>

                {/* Outcomes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {outcomes.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-[2rem] p-10 flex flex-col items-center text-center shadow-2xl relative group h-full"
                        >
                            {/* Icon Wrapper */}
                            <div className="mb-8 relative">
                                <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center border border-slate-100">
                                    <div className="transform group-hover:scale-110 transition-transform duration-500">
                                        {item.icon}
                                    </div>
                                </div>
                                {/* Small decorative offset dot or glow if needed, keeping it clean like image */}
                            </div>

                            <h3 className="text-2xl font-black text-[#111827] mb-4 tracking-tight leading-tight">
                                {item.title}
                            </h3>
                            <p className="text-slate-500 text-[15px] leading-relaxed font-bold">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Text & CTA */}
                <div className="text-center space-y-12">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-white font-black text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
                    >
                        Expansion shifted from a legal bottleneck to a repeatable operating model. <br className="hidden md:block" />
                        The business now grows based on opportunity, not geography.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <Button
                            className="bg-white text-brand-orange hover:bg-slate-50 text-xl font-black px-12 py-8 rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto"
                        >
                            Start Your Expansion Story <ArrowRight className="w-6 h-6 stroke-[3px]" />
                        </Button>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default OutcomesSection;
