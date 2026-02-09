

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { ArrowRight } from 'lucide-react';

export default function ProductCTA() {
    return (
        <section className="pt-32 pb-64 bg-white relative overflow-hidden">
            {/* Soft decorative glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto p-12 md:p-24 rounded-[4rem] bg-white text-brand-black border border-gray-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden relative group"
                >
                    {/* Animated background accent */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-orange/5 blur-[80px] rounded-full group-hover:bg-brand-orange/10 transition-colors duration-700" />

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight text-brand-black"
                    >
                        Ready to transform your <br /> <span className="text-brand-orange">global operations?</span>
                    </motion.h2>

                    <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto font-medium">
                        See how KOMP's unified platform can streamline your global workforce management.
                    </p>

                    {/* Simple Button - Home page style */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Button
                            variant="premium"
                            className="h-16 px-12 rounded-full bg-brand-black text-white hover:bg-brand-orange transition-colors border-none font-medium text-lg"
                        >
                            Talk to Sales <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </motion.div>

                    <p className="text-gray-400 text-xs mt-8 font-medium tracking-wide">
                        No credit card required. SOC2 Compliant.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
