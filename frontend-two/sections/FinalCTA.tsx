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

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight"
                    >
                        Your Global Workforce Is Waiting. Don’t Let Compliance Hold You Back.
                    </motion.h2>

                    <p className="text-xl text-brand-white/40 mb-12 max-w-2xl mx-auto font-medium">
                        Join hundreds of forward-thinking companies using KOMP to build global teams with the legal shield your CFO demands.
                    </p>

                    {/* Lead Gen Form - Replaced Buttons */}
                    <div className="max-w-3xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 rounded-full p-2 pl-6 flex flex-col md:flex-row gap-4 items-center relative">
                        <input
                            type="email"
                            placeholder="Work Email"
                            className="flex-1 bg-transparent border-none text-white placeholder:text-white/30 focus:ring-0 h-10 md:h-12 outline-none min-w-[160px]"
                        />
                        <div className="w-px h-8 bg-white/10 hidden md:block self-center flex-shrink-0" />
                        <select defaultValue="" className="bg-transparent border-none text-white/70 focus:ring-0 h-10 md:h-12 outline-none [&>option]:text-black md:max-w-[150px] appearance-none cursor-pointer flex-shrink-0">
                            <option value="" disabled>Select Country</option>
                            <option value="us">United States</option>
                            <option value="uk">United Kingdom</option>
                            <option value="ca">Canada</option>
                            <option value="other">Other</option>
                        </select>
                        <Button variant="premium" className="h-14 px-8 rounded-full whitespace-nowrap bg-brand-white text-brand-black hover:bg-brand-orange hover:text-white transition-colors border-none font-bold tracking-tight shrink-0">
                            Get Custom Quote
                        </Button>
                    </div>

                    <p className="text-brand-white/30 text-xs mt-6 font-medium tracking-wide">
                        No credit card required. SOC2 Compliant.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
