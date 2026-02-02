'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, XCircle, CheckCircle } from 'lucide-react';
import { cn } from '@/utils/cn';

const ComparisonRow = ({ feature, komp, traditional, delay }: { feature: string, komp: string, traditional: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-b border-brand-white/5 last:border-0 items-center"
    >
        <div className="font-medium text-brand-white/80">{feature}</div>

        <div className="flex items-center gap-2 text-brand-white bg-brand-white/5 p-3 rounded-lg border border-brand-white/10">
            <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
            <span className="font-semibold">{komp}</span>
        </div>

        <div className="flex items-center gap-2 text-brand-white/40 grayscale opacity-80 pl-2">
            <XCircle className="w-5 h-5 shrink-0" />
            <span>{traditional}</span>
        </div>
    </motion.div>
);

const CompetitiveDifferentiation = () => {
    return (
        <section className="py-24 bg-brand-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        className="inline-block"
                    >
                        <h2 className="text-base font-semibold text-brand-orange tracking-wider uppercase mb-3">The New Standard</h2>
                    </motion.div>

                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="text-3xl md:text-5xl font-bold mb-6 text-brand-white leading-tight"
                    >
                        Why Modern Leaders Are <br />
                        <span className="text-brand-white/40 block mt-2">Moving to KOMP.</span>
                    </motion.h3>
                </div>

                <div className="bg-[#0f0f0f] border border-brand-white/10 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto relative overflow-hidden">
                    {/* Decorative Top Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-50" />

                    <div className="hidden md:grid grid-cols-3 gap-4 mb-6 pb-4 border-b border-brand-white/10 text-sm font-semibold uppercase tracking-wider text-brand-white/40">
                        <div>Feature</div>
                        <div className="text-brand-orange">With KOMP</div>
                        <div>Traditional EORs</div>
                    </div>

                    <div className="space-y-2">
                        <ComparisonRow
                            feature="Onboarding Speed"
                            komp="Instant Onboarding"
                            traditional="Slow (Weeks)"
                            delay={0.1}
                        />
                        <ComparisonRow
                            feature="Pricing Model"
                            komp="Mid-market Pricing"
                            traditional="Hidden FX Fees"
                            delay={0.2}
                        />
                        <ComparisonRow
                            feature="Support Quality"
                            komp="24/7 Human Experts"
                            traditional="Bot-based Support"
                            delay={0.3}
                        />
                        <ComparisonRow
                            feature="Infrastructure"
                            komp="150+ Direct Entities"
                            traditional="Aggregator Networks"
                            delay={0.4}
                        />
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-brand-white/40 text-sm font-bold uppercase tracking-widest italic">
                            “We don’t just provide software; we provide the legal shield your CFO demands.”
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompetitiveDifferentiation;
