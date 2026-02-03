'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { ArrowRight, Globe } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative w-full pt-32 pb-20 bg-gray-50 overflow-hidden">

            {/* Background Gradient - Light & Subtle */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">

                {/* Badge / Eyebrow */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 mb-8 backdrop-blur-sm"
                >
                    <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                    <span className="text-sm font-bold text-brand-orange uppercase tracking-wider">Infrastructure for Global Ambition</span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-6 max-w-5xl leading-[1.1]"
                >
                    Hire Anyone, Anywhere,<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-blue">
                        Without the Legal Complexity.
                    </span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl leading-relaxed font-light"
                >
                    Compliant global hiring, payroll, and localized benefits in 150+ countries.
                    Scale your team without the bureaucracy.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col md:flex-row items-center gap-6 mb-20"
                >
                    <Button
                        variant="premium"
                        size="lg"
                        className="min-w-[240px] shadow-xl shadow-brand-orange/20"
                    >
                        Calculate Your Global Hiring Costs
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="lg"
                        className="min-w-[240px] border border-gray-200"
                    >
                        <Globe className="mr-2 w-5 h-5 text-brand-blue" />
                        See the Platform
                    </Button>
                </motion.div>

                {/* Dashboard Visual - The "HubSpot" Look */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative w-full max-w-6xl mx-auto"
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
                        <img
                            src="/images/dashboard_overview.png"
                            alt="KOMP Dashboard Overview"
                            className="w-full h-auto object-cover"
                        />

                        {/* Reflection/Sheen Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                    </div>
                </motion.div>
                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                    className="mt-20 py-12 border-t border-gray-200 w-full max-w-[1200px] flex flex-row flex-nowrap justify-between items-center gap-4 md:gap-8 overflow-x-auto md:overflow-x-visible no-scrollbar"
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
                            className="text-[11px] md:text-[14px] font-black uppercase text-gray-300 hover:text-brand-orange transition-all duration-500 cursor-default tracking-[0.3em] whitespace-nowrap shrink-0"
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
