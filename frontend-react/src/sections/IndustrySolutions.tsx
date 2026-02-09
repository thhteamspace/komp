

import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, HeartPulse, GraduationCap, Code2, Lock, FileLineChart as FileChart, BadgeCheck, Briefcase } from 'lucide-react';

const industries = [
    {
        name: 'Tech / SaaS',
        icon: <Cpu className="w-10 h-10" />,
        features: ['IP Protection', 'Equity Plan Compliance', 'Global Engineering Hubs', 'Contract Localization'],
        highlight: 'Risk-managed infrastructure',
        metric: 'Audit Ready',
        color: 'bg-black'
    },
    {
        name: 'Professional Services',
        icon: <Briefcase className="w-10 h-10 text-brand-blue" />,
        features: ['Global Mobility Control', 'Cross-border Tax Compliance', 'Project-based Scalability', 'Unified Legal Frameworks'],
        highlight: 'Scalable infrastructure',
        metric: 'Global Standards',
        color: 'bg-black'
    },
    {
        name: 'Healthcare',
        icon: <HeartPulse className="w-10 h-10" />,
        features: ['Credentialing Support', 'Privacy Standards', 'Data Residency Control', 'Regulatory Monitoring'],
        highlight: 'Secure data infrastructure',
        metric: 'Privacy Focused',
        color: 'bg-rose-600'
    }
];

const IndustrySolutions = () => {
    return (
        <section className="py-24 px-6 bg-brand-blue overflow-hidden relative">
            {/* Background Details */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-orange/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto relative z-10 px-6">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="mb-6 inline-block"
                    >
                        <span className="text-base font-bold text-white/80 uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full">Specialized Infrastructure</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-white mb-6"
                    >
                        Expert compliance for <br />
                        <span className="text-brand-orange">high-stakes industries.</span>
                    </motion.h2>
                </div>

                {/* Industry Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {industries.map((ind, idx) => (
                        <motion.div
                            key={ind.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: false }}
                            className="group relative flex flex-col bg-white rounded-[3rem] p-10 shadow-xl border border-white/20 hover:scale-[1.02] transition-all duration-500 overflow-hidden"
                        >

                            <motion.div
                                className={`w-20 h-20 rounded-2xl bg-slate-50 shadow-inner flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 relative`}
                            >
                                <div className="relative z-10 text-brand-blue group-hover:text-brand-orange transition-colors duration-300">
                                    {ind.icon}
                                </div>
                            </motion.div>

                            <h3 className="text-3xl font-black text-slate-950 mb-8">{ind.name}</h3>

                            <div className="space-y-4 mb-10">
                                {ind.features.map(f => (
                                    <div key={f} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-brand-orange transition-colors" />
                                        <span className="text-slate-600 font-semibold">{f}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-brand-blue">
                                    <Lock size={16} />
                                    <span className="text-xs font-bold">{ind.highlight}</span>
                                </div>
                                <span className="text-xs font-bold text-brand-orange">{ind.metric}</span>
                            </div>


                        </motion.div>
                    ))}
                </div>

                {/* Industry Badge Carousel / Logo Cloud idea */}
                <div className="mt-20 pt-10 border-t border-white/10">
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 transition-all duration-700">
                        <div className="flex items-center gap-2 font-semibold text-lg text-white/90"><Code2 size={20} className="text-white/60" /> Tech Stack</div>
                        <div className="flex items-center gap-2 font-semibold text-lg text-white/90"><Lock size={20} className="text-white/60" /> Secure Data</div>
                        <div className="flex items-center gap-2 font-semibold text-lg text-white/90"><FileChart size={20} className="text-white/60" /> Audit Ready</div>
                        <div className="flex items-center gap-2 font-semibold text-lg text-white/90"><ShieldCheck size={20} className="text-white/60" /> Global Compliance</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustrySolutions;
