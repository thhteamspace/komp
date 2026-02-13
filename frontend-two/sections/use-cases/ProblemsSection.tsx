'use client';

import { motion } from 'framer-motion';
import { Link2Off, EyeOff, AlertTriangle, ShieldCheck, ChevronRight, FileText, Settings, RefreshCw, TrendingUp, TrendingDown } from 'lucide-react';

const ProblemsSection = () => {
    const problems = [
        {
            title: "Fragmented Expansion Model",
            desc: "Each new country required separate entities, advisors, and payroll providers. Incorporation timelines stretched to months with high upfront costs.",
            visual: (
                <div className="w-full h-40 flex items-center justify-center">
                    <img
                        src="/images/image copy 7.png"
                        alt="Fragmented Expansion Model"
                        className="w-full h-full object-contain"
                    />
                </div>
            )
        },
        {
            title: "Limited Financial Visibility",
            desc: "Payroll ran through multiple local vendors. FX exposure and intermediary fees inflated costs, leaving Finance without a consolidated global view.",
            visual: (
                <div className="w-full h-40 flex items-center justify-center">
                    <img
                        src="/images/image copy 9.png"
                        alt="Limited Financial Visibility"
                        className="w-full h-full object-contain"
                    />
                </div>
            )
        },
        {
            title: "Escalating Compliance Risk",
            desc: "Country-specific labor laws created ongoing legal uncertainty. Leadership time was consumed managing jurisdiction-by-jurisdiction risk instead of growth.",
            visual: (
                <div className="w-full h-40 flex items-center justify-center">
                    <img
                        src="/images/image copy 10.png"
                        alt="Escalating Compliance Risk"
                        className="w-full h-full object-contain"
                    />
                </div>
            )
        }
    ];

    return (
        <section className="py-32 bg-[#fafafa] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-28">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl lg:text-[4rem] font-black text-[#111827] mb-8 tracking-tighter"
                    >
                        Growth Was <span className="text-brand-orange">Ready.</span> Infrastructure <span className="text-[#111827]">Wasn't.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-500 max-w-3xl mx-auto font-medium"
                    >
                        Before engaging KOMP, the company faced compounding challenges that slowed international expansion.
                    </motion.p>
                </div>

                {/* Cards Container with Multi-Point Connector Line */}
                <div className="relative max-w-6xl mx-auto">
                    {/* SVG Connector - Exact Wave Path From Image */}
                    <div className="absolute top-[200px] left-0 w-full h-[200px] hidden lg:block pointer-events-none">
                        <svg width="100%" height="100%" viewBox="0 0 1200 200" fill="none" className="overflow-visible">
                            <path
                                d="M300,50 C380,50 380,180 430,180 C480,180 480,100 550,100 M650,100 C720,100 720,20 770,20 C820,20 820,100 900,100"
                                stroke="#e2e8f0"
                                strokeWidth="3"
                                strokeLinecap="round"
                                className="opacity-70"
                            />
                            {/* Orange Glow Nodes */}
                            <g transform="translate(430, 180)">
                                <circle r="10" fill="white" stroke="#FF8C1A" strokeWidth="4" className="shadow-lg" />
                                <circle r="4" fill="#FF8C1A" />
                            </g>
                            <g transform="translate(770, 20)">
                                <circle r="10" fill="white" stroke="#FF8C1A" strokeWidth="4" className="shadow-lg" />
                                <circle r="4" fill="#FF8C1A" />
                            </g>
                        </svg>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10 px-4">
                        {problems.map((prob, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className="bg-white rounded-[3rem] py-16 px-12 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.06)] border border-slate-50 flex flex-col items-start transition-all duration-700 hover:shadow-[0_60px_120px_-30px_rgba(255,140,26,0.12)] group min-h-[580px]"
                            >
                                <div className="mb-16 relative h-40 w-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700">
                                    {prob.visual}
                                </div>
                                <h3 className="text-[2rem] font-black text-[#111827] mb-8 tracking-tight leading-tight text-left">
                                    {prob.title}
                                </h3>
                                <p className="text-slate-500 text-[16.5px] leading-relaxed font-bold text-left">
                                    {prob.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProblemsSection;
