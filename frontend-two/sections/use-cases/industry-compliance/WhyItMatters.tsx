'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Button from '@/components/Button';

const WhyItMatters = () => {
    return (
        <section className="py-32 bg-white">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-black text-slate-900 mb-16 tracking-tighter"
                >
                    Why This Matters
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-6 mb-20">
                    {[
                        "Regulatory Agility",
                        "Operational Speed",
                        "Audit Readiness"
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 bg-[#f8f6f5] rounded-3xl flex flex-col items-center group hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 border border-transparent hover:border-slate-100"
                        >
                            <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                <Check size={28} />
                            </div>
                            <span className="text-xl font-bold text-slate-900 tracking-tight">{item}</span>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
                        Compliance shouldn't be a bottleneck. With Komp's specialized approach, your organization moves from a stance of defensive reactivity to one of strategic assurance. We handle the nuance of your industry so you can focus on building the future.
                    </p>

                    <Button
                        className="bg-brand-orange hover:bg-orange-600 text-white text-lg font-bold py-5 px-10 rounded-full h-auto shadow-xl transition-all hover:scale-105 border-none"
                    >
                        Schedule a Consultation
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyItMatters;
