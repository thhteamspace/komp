'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/Button';

const ServicesFinalCTA = () => {
    return (
        <section className="relative bg-[#1A1A1A] py-32 overflow-hidden">
            {/* Background Texture - Subtle Dots matching Reference */}
            <div className="absolute inset-0 opacity-[0.2]"
                style={{
                    backgroundImage: 'radial-gradient(circle, #444 1.5px, transparent 1px)',
                    backgroundSize: '32px 32px'
                }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                        Ready to build your <span className="text-[#FF8C1A]">global team?</span>
                    </h2>

                    <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed font-normal">
                        Join thousands of companies using Komp to hire, pay, and manage talent worldwide with zero friction.
                    </p>

                    <div className="flex items-center justify-center gap-8">
                        <Button className="px-8 py-4 text-base font-bold bg-[#FF8C1A] text-white hover:bg-orange-600 rounded-lg transition-all shadow-lg hover:shadow-orange-600/20">
                            Get Started for Free
                        </Button>
                        <button className="text-base font-bold text-white hover:text-[#FF8C1A] flex items-center gap-2 transition-colors group">
                            Talk to Sales
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1A1A1A] to-transparent pointer-events-none" />
        </section>
    );
};

export default ServicesFinalCTA;
