'use client';
import { motion } from 'framer-motion';
import { Globe, Gavel, CreditCard } from 'lucide-react';

const TransitionWorkflow = () => {
    const phases = [
        {
            title: "Phase 1: Market Entry",
            desc: "Rapid legal entity scaffolding using Komp’s EOR framework. Allowed hiring to begin in weeks, not months, bypassing initial bureaucratic hurdles.",
            badge: "12 Entities Established",
            icon: <Globe size={24} />,
            side: "left"
        },
        {
            title: "Phase 2: Compliance",
            desc: "Deployment of automated compliance guards. Systems were synchronized to local labor laws, ensuring contracts and benefits met regional standards instantly.",
            badge: "100% Audit Readiness",
            icon: <Gavel size={24} />,
            side: "right"
        },
        {
            title: "Phase 3: Unified Payroll",
            desc: "Consolidation of payment rails. A single currency-agnostic click now disburses funds to 1,200+ employees across the EMEA region.",
            badge: "Single-Click Disbursement",
            icon: <CreditCard size={24} />,
            side: "left"
        }
    ];

    return (
        <section className="py-32 lg:py-48 bg-[#f8f6f5]">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter"
                    >
                        Transition Workflow
                    </motion.h2>
                    <p className="text-xl text-slate-500 font-medium tracking-tight">The three-phase execution strategy deployed over 90 days.</p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-orange/0 via-brand-orange/30 to-brand-orange/0 md:-ml-0.5"></div>

                    {phases.map((phase, idx) => (
                        <div key={idx} className="relative z-10 mb-24 last:mb-0 group">
                            <div className={`flex flex-col md:flex-row items-center justify-between w-full ${phase.side === 'right' ? 'md:flex-row-reverse' : ''}`}>

                                {/* Text Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: phase.side === 'left' ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className={`md:w-5/12 ${phase.side === 'left' ? 'md:text-right pr-12 pl-20 md:pl-0' : 'md:text-left pl-20 md:pr-0 md:pl-12'} mb-8 md:mb-0`}
                                >
                                    <h3 className="text-2xl font-black text-slate-900 group-hover:text-brand-orange transition-colors duration-300">{phase.title}</h3>
                                    <p className="text-lg text-slate-500 font-medium mt-4 leading-relaxed">
                                        {phase.desc}
                                    </p>
                                </motion.div>

                                {/* Dot */}
                                <div className="absolute left-[22px] md:left-1/2 w-5 h-5 rounded-full bg-white border-4 border-brand-orange shadow-[0_0_0_8px_rgba(244,85,37,0.1)] md:-translate-x-1/2"></div>

                                {/* Badge */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className={`md:w-5/12 pl-20 md:pl-0 flex ${phase.side === 'left' ? 'md:justify-start md:pl-12' : 'md:justify-end md:pr-12'}`}
                                >
                                    <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 group-hover:shadow-2xl transition-all duration-500 flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
                                            {phase.icon}
                                        </div>
                                        <span className="text-lg font-bold text-slate-700 tracking-tight whitespace-nowrap">{phase.badge}</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TransitionWorkflow;
