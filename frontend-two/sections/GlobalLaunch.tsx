'use client';

import { motion } from 'framer-motion';
import { MousePointerClick, FileCheck, Rocket, ChevronRight, Search, ClipboardList, Zap } from 'lucide-react';

const steps = [
    {
        icon: Search,
        title: 'Identify Talent',
        desc: 'Find your hire or use our sourcing tools. We verify eligibility and local tax status in real-time.',
        color: 'text-brand-blue',
        bg: 'bg-brand-blue/5',
        glow: 'group-hover:shadow-blue-500/20'
    },
    {
        icon: ClipboardList,
        title: 'Generate Localized Contracts',
        desc: 'Legally vetted, bulletproof employment contracts ready in minutes. Fully localized to 150+ jurisdictions.',
        color: 'text-brand-orange',
        bg: 'bg-brand-orange/5',
        glow: 'group-hover:shadow-orange-500/20'
    },
    {
        icon: Zap,
        title: 'Approve & Automate',
        desc: 'One invoice handles global taxes, benefits, and local filings. We handle the complexity after your approval.',
        color: 'text-green-500',
        bg: 'bg-green-500/5',
        glow: 'group-hover:shadow-green-500/20'
    }
];

const GlobalLaunch = () => {
    return (
        <section className="py-40 bg-brand-white relative overflow-hidden text-brand-black">
            {/* Artistic Background Details */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-black/5 border border-brand-black/5 mb-8"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                        <span className="text-[10px] font-black text-brand-black uppercase tracking-[0.3em]">The Blueprint</span>
                    </motion.div>

                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-8xl font-black text-brand-black tracking-tighter leading-[1.1]"
                    >
                        3-Step <br />
                        <span className="text-brand-black/20 italic block mt-4">Global Launch.</span>
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
                    {/* Visual Path Decorator */}
                    <div className="hidden lg:block absolute top-[25%] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-brand-black/10 to-transparent -z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            className="group relative flex flex-col items-center"
                        >
                            {/* The Step Card */}
                            <div className="w-full relative p-12 rounded-[3.5rem] bg-white border border-brand-black/5 transition-all duration-700 group-hover:bg-brand-black group-hover:border-brand-black shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] group-hover:-translate-y-4">

                                {/* Step Number Badge */}
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-[1.5rem] bg-brand-white border border-brand-black/5 flex items-center justify-center text-2xl font-black text-brand-black shadow-xl group-hover:bg-brand-orange group-hover:text-white group-hover:border-transparent transition-all duration-500 ring-8 ring-transparent group-hover:ring-brand-orange/10">
                                    0{index + 1}
                                </div>

                                <div className="flex flex-col items-center text-center mt-6">
                                    {/* Icon with animated background */}
                                    <div className={`w-28 h-28 rounded-[2.5rem] ${step.bg} flex items-center justify-center mb-10 relative overflow-hidden transition-all duration-700 group-hover:rotate-[15deg] group-hover:scale-110`}>
                                        <div className={`absolute inset-0 opacity-20 filter blur-xl ${step.bg} group-hover:opacity-100 transition-opacity`} />
                                        <step.icon size={48} className={`relative z-10 ${step.color} group-hover:text-white group-hover:rotate-[-15deg] transition-all duration-700`} />
                                    </div>

                                    <h4 className="text-3xl font-black text-brand-black mb-6 transition-colors duration-500 group-hover:text-white tracking-tight">
                                        {step.title}
                                    </h4>

                                    <p className="text-brand-black/50 leading-relaxed font-medium transition-colors duration-500 group-hover:text-white/60">
                                        {step.desc}
                                    </p>
                                </div>

                                {/* Interactive Bottom Detail */}
                                <div className="mt-12 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                                    <div className="h-px w-8 bg-white/20" />
                                    <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Ready to Launch</span>
                                    <div className="h-px w-8 bg-white/20" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GlobalLaunch;
