'use client';

import { motion } from 'framer-motion';
import { Globe2 } from 'lucide-react';
import Card from '@/components/Card';

export default function CountrySpecificCompliance() {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Background Map Effect - Light Theme */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] grayscale">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg"
                    alt="World Map"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-brand-black text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-bold mb-8 border border-brand-blue/20"
                >
                    <Globe2 size={16} /> Local Expertise
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-black text-brand-black mb-16 tracking-tighter"
                    style={{ fontSize: 'clamp(48px, 7vw, 80px)', lineHeight: '1.1' }}
                >
                    Hyper-Localized <span className="text-brand-orange">Compliance.</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-left p-12 bg-white border-2 border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:border-brand-blue/20 transition-all duration-500 group"
                    >
                        <h3 className="text-3xl font-bold mb-6 text-brand-black group-hover:text-brand-blue transition-colors">Regulatory Alignment</h3>
                        <p className="text-slate-600 text-xl leading-relaxed font-medium">
                            We don&apos;t just translate laws; we align your operations with the specific regulatory frameworks of each jurisdiction. From GDPR in Europe to local labor codes in Asia, we ensure complete structural alignment.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-left p-12 bg-white border-2 border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:border-brand-orange/20 transition-all duration-500 group"
                    >
                        <h3 className="text-3xl font-bold mb-6 text-brand-black group-hover:text-brand-orange transition-colors">Country-Level Nuance</h3>
                        <p className="text-slate-600 text-xl leading-relaxed font-medium">
                            Every country has unique administrative nuances and unwritten operational rules. Our local experts help you navigate these realities without the compliance guesswork, ensuring smooth market entry.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
