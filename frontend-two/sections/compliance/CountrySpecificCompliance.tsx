'use client';

import { motion } from 'framer-motion';
import { Globe2 } from 'lucide-react';
import Card from '@/components/Card';

export default function CountrySpecificCompliance() {
    return (
        <section className="py-32 bg-brand-blue relative overflow-hidden">
            {/* Background Map Effect */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[#0055d4] mix-blend-multiply opacity-80" />
                <div className="w-full h-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center opacity-10" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-white text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-8 border border-white/20 backdrop-blur-sm"
                >
                    <Globe2 size={16} /> Local Expertise
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-black mb-12"
                >
                    Hyper-Localized Compliance
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-left p-8 bg-white/10 rounded-3xl border border-white/20 backdrop-blur-md"
                    >
                        <h3 className="text-2xl font-bold mb-4">Regulatory Alignment</h3>
                        <p className="text-white/80 text-lg leading-relaxed">
                            We don't just translate laws; we align your operations with the specific regulatory frameworks of each jurisdiction. From GDPR in Europe to Lei Geral in Brazil, we've got you covered.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-left p-8 bg-white/10 rounded-3xl border border-white/20 backdrop-blur-md"
                    >
                        <h3 className="text-2xl font-bold mb-4">Country-Level Nuance</h3>
                        <p className="text-white/80 text-lg leading-relaxed">
                            Every country has unwritten rules and administrative nuances. We help you navigate these local operational realities without the guesswork.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
