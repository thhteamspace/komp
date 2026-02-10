'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { ArrowRight, Compass } from 'lucide-react';

export default function ComplianceCTA() {
    return (
        <section className="py-20 px-6 bg-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-[2.5rem] overflow-hidden bg-brand-black p-10 md:py-16 md:px-20 text-center border border-white/10 shadow-2xl"
                >
                    {/* Cinematic Mesh Gradient Background */}
                    <div className="absolute inset-0 z-0">
                        {/* Base dark backdrop */}
                        <div className="absolute inset-0 bg-[#0A0A0B]" />

                        {/* Animated Mesh blobs */}
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                x: [0, 30, 0],
                                y: [0, -20, 0]
                            }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-1/4 -left-1/4 w-full h-full bg-brand-blue/20 rounded-full blur-[100px] opacity-30"
                        />
                        <motion.div
                            animate={{
                                scale: [1.1, 1, 1.1],
                                x: [0, -30, 0],
                                y: [0, 20, 0]
                            }}
                            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                            className="absolute -bottom-1/4 -right-1/4 w-full h-full bg-brand-orange/20 rounded-full blur-[100px] opacity-30"
                        />

                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-black/40 to-brand-black/80" />
                    </div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 text-white font-bold text-sm mb-8"
                        >
                            <Compass size={16} className="text-brand-blue" /> Structural Excellence
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="font-black text-white mb-8 tracking-tighter"
                            style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: '1.1' }}
                        >
                            Navigate compliance <br /> <span className="text-brand-orange">with confidence.</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <Button
                                variant="primary"
                                size="lg"
                                className="px-10 h-14 text-base font-bold w-full sm:w-auto shadow-xl shadow-brand-blue/10"
                            >
                                Talk to an Expert <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="lg"
                                className="px-10 h-14 text-base font-bold w-full sm:w-auto text-white border-white/20 hover:bg-white/10"
                            >
                                View Framework
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
