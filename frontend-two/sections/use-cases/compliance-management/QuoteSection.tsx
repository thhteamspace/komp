'use client';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Button from '@/components/Button';

const QuoteSection = () => {
    return (
        <section className="bg-[#f8f6f5] py-32 px-6 overflow-hidden">
            <div className="max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <Quote className="w-20 h-20 text-brand-orange/20 mx-auto" />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl text-slate-500 leading-relaxed font-medium mb-12 max-w-3xl mx-auto italic"
                >
                    By unifying workforce operations, Komp eliminated the fragmented data silos that were stalling growth. The result was a seamless flow of information that empowered leadership with real-time visibility.
                </motion.p>

                <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-950 leading-[1.1] tracking-tighter mb-20 max-w-4xl mx-auto"
                >
                    "We reduced operational drag by <span className="text-brand-orange">40% in Q1</span>. The clarity we have is a competitive weapon."
                </motion.blockquote>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center gap-6 mb-24"
                >
                    <img
                        alt="CTO Portrait"
                        className="w-20 h-20 rounded-full border-2 border-brand-orange/20 object-cover grayscale"
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
                    />
                    <div className="text-left">
                        <div className="text-xl font-black text-slate-950 tracking-tight">Sarah Jenkins</div>
                        <div className="text-brand-orange text-sm font-bold tracking-wide">CTO, Global Logistics Corp</div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 border-t border-b border-slate-200 py-16 mb-24 max-w-4xl mx-auto"
                >
                    {[
                        { val: "40%", label: "Efficiency Gain" },
                        { val: "0", label: "Compliance Incidents" },
                        { val: "24h", label: "Data Latency" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center group">
                            <div className="text-5xl font-black text-slate-950 mb-2 group-hover:text-brand-orange transition-colors">{stat.val}</div>
                            <div className="text-xs text-slate-400 font-bold tracking-wide">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Button
                        variant="premium"
                        size="lg"
                        className="bg-brand-orange hover:bg-orange-600 text-white text-lg font-bold py-5 px-10 rounded-full h-auto shadow-lg border-none transition-all hover:scale-105"
                    >
                        Start your transformation
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default QuoteSection;
