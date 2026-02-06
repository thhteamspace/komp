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
        className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-b border-gray-100 last:border-0 items-center"
    >
        <div className="font-medium text-slate-900">{feature}</div>

        <div className="flex items-center gap-2 text-brand-black bg-gray-50 p-3 rounded-lg border border-gray-200 shadow-sm">
            <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
            <span className="font-semibold">{komp}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-400 grayscale opacity-80 pl-2">
            <XCircle className="w-5 h-5 shrink-0" />
            <span>{traditional}</span>
        </div>
    </motion.div>
);

const CompetitiveDifferentiation = () => {
    return (
        <section id="comparison" className="py-24 bg-white relative overflow-hidden scroll-mt-32">
            {/* Background details removed for a cleaner white look */}

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        className="inline-block"
                    >
                        <div className="text-base font-bold text-brand-blue mb-3">The New Standard</div>
                    </motion.div>

                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="font-black mb-6 text-slate-900 tracking-tighter"
                        style={{ fontSize: '5vw', lineHeight: '1' }}
                    >
                        Why Modern Leaders Are <br />
                        <span className="text-brand-orange">Moving to KOMP.</span>
                    </motion.h3>
                </div>

                <div className="bg-white border border-gray-200 shadow-2xl rounded-3xl p-8 md:p-12 max-w-5xl mx-auto relative overflow-hidden">
                    {/* Decorative Top Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-50" />

                    <div className="hidden md:grid grid-cols-3 gap-4 mb-6 pb-4 border-b border-gray-100 text-sm font-semibold uppercase tracking-wider text-gray-400">
                        <div>Key Benchmark</div>
                        <div className="text-brand-orange">KOMP Strategic Path</div>
                        <div>Generic Providers</div>
                    </div>

                    <div className="space-y-2">
                        <ComparisonRow
                            feature="Onboarding Pipeline"
                            komp="Faster Onboarding"
                            traditional="Weeks of Manual Entry"
                            delay={0.1}
                        />
                        <ComparisonRow
                            feature="Pricing Transparency"
                            komp="Clean Mid-market Rates"
                            traditional="Opaque FX Markups"
                            delay={0.2}
                        />
                        <ComparisonRow
                            feature="Service Model"
                            komp="Human-led Global Support"
                            traditional="Automated Support Queues"
                            delay={0.3}
                        />
                        <ComparisonRow
                            feature="Legal Logic"
                            komp="Lower Aggregator Reliance"
                            traditional="Multi-layered 3rd Parties"
                            delay={0.4}
                        />
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-slate-950 text-lg font-bold">
                            “We don’t just provide software; we provide the legal shield your CFO demands.”
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompetitiveDifferentiation;
