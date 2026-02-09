'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { ArrowRight, Compass } from 'lucide-react';

export default function ComplianceCTA() {
    return (
        <section className="py-24 bg-brand-blue relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-brand-blue z-0" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-400/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white font-medium text-sm mb-6 border border-white/20">
                        <Compass size={16} /> Expert Guidance
                    </div>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight max-w-4xl mx-auto"
                >
                    Navigate global compliance <br /> with <span className="opacity-90">confidence.</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Button
                        variant="premium"
                        size="lg"
                        className="bg-white text-brand-blue hover:bg-slate-50 hover:text-brand-blue shadow-2xl shadow-blue-900/20 border-none"
                    >
                        Talk to a Compliance Expert <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
