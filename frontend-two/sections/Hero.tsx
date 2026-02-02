'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { ArrowRight, Globe } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-brand-black pt-20">
            {/* Background Video with Overlay */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.4 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/videos/hero.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black opacity-90" />
                <div className="absolute inset-0 bg-brand-black/40" />
            </motion.div>

            {/* Background Gradient Elements - Subtle */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-brand-orange/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">

                {/* Badge / Eyebrow */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-white/5 border border-brand-white/10 mb-8 backdrop-blur-sm"
                >
                    <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                    <span className="text-sm font-medium text-brand-white/80">The Infrastructure for Global Ambition</span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-8xl font-bold tracking-tight text-brand-white mb-6 max-w-5xl leading-[1.1]"
                >
                    Hire Anyone, Anywhere,<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-white/90">
                        Without the Legal Complexity.
                    </span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-xl md:text-2xl text-brand-white/60 mb-10 max-w-2xl leading-relaxed font-light"
                >
                    Compliant global hiring, payroll, and localized benefits in 150+ countries.
                    Scale your team without the bureaucracy.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col md:flex-row items-center gap-6"
                >
                    <Button
                        variant="premium"
                        size="lg"
                        className="min-w-[240px]"
                    >
                        Calculate Your Global Hiring Costs
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="min-w-[240px] backdrop-blur-md"
                    >
                        <Globe className="mr-2 w-5 h-5 text-brand-blue group-hover:text-brand-white transition-colors duration-300" />
                        See the Platform
                    </Button>
                </motion.div>

                {/* Trust Indicators / Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-24 pt-10 border-t border-brand-white/5 w-full max-w-[1200px] flex flex-row flex-nowrap justify-between items-center gap-4 md:gap-8 overflow-x-auto md:overflow-x-visible no-scrollbar pb-4 md:pb-0"
                >
                    {[
                        '1,200+ Global Entities',
                        'SOC2 Compliant',
                        'ISO 27001 Certified',
                        'FinScale',
                        'ApexGlobal'
                    ].map(logo => (
                        <span
                            key={logo}
                            className="text-[11px] md:text-[14px] font-black uppercase text-white/10 hover:text-white transition-all duration-500 hover:scale-105 cursor-default tracking-[0.3em] whitespace-nowrap shrink-0"
                        >
                            {logo}
                        </span>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
