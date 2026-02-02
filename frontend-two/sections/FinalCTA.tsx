'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
    return (
        <section className="py-32 bg-brand-white relative overflow-hidden">
            {/* Soft decorative glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto p-12 md:p-24 rounded-[4rem] bg-brand-black text-brand-white border border-brand-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden relative group"
                >
                    {/* Animated background accent */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-orange/10 blur-[80px] rounded-full group-hover:bg-brand-orange/20 transition-colors duration-700" />

                    <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.15]">
                        Your Global Workforce Is Waiting. <br />
                        <span className="text-brand-orange italic block mt-4">Don’t Let Compliance Hold You Back.</span>
                    </h2>

                    <p className="text-xl text-brand-white/40 mb-12 max-w-2xl mx-auto font-medium">
                        Join hundreds of forward-thinking companies using KOMP to build global teams with the legal shield your CFO demands.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Button variant="premium" size="lg" className="min-w-[260px]">
                            Get My Custom Expansion Quote
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                        <Button variant="outline" size="lg" className="min-w-[260px] border-brand-white/20 text-brand-white hover:bg-brand-white/10">
                            Book a Strategy Call
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
