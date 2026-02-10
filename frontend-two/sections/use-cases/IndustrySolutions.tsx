'use client';

import { motion } from 'framer-motion';
import { Code2, Landmark, HeartPulse, ShieldCheck, Scale, Globe, ArrowUpRight, Cpu, CheckCircle2 } from 'lucide-react';
import Card from '@/components/Card';
import Button from '@/components/Button';

const industries = [
    {
        title: 'SaaS & Technology',
        icon: <Code2 className="w-8 h-8" />,
        image: '/images/Gemini_Generated_Image_phtlvyphtlvyphtl.png',
        color: 'from-indigo-600 to-blue-500',
        challenge: 'IP leakage, equity misalignment, and weak contract enforceability across borders.',
        solution: 'IP ownership and assignment clauses are embedded at the contract level and supported by jurisdiction-aware legal frameworks.',
        practice: 'ESOP and equity structures are aligned with local regulations. Source code, inventions, and confidential work remain legally protected.',
        highlights: ['IP Assignment (Global)', 'ESOP Compliance', 'Dev-Sec Ops Onboarding'],
        badge: 'IP SECURE',
        result: 'Your product, equity, and intellectual property stay secure—no matter where your developers are based.'
    },
    {
        title: 'Fintech & Financial',
        icon: <Landmark className="w-8 h-8" />,
        image: '/images/Gemini_Generated_Image_yfvbh1yfvbh1yfvb.png',
        color: 'from-emerald-600 to-teal-500',
        challenge: 'Strict financial security, audit, and reporting requirements in every market.',
        solution: 'Workforce operations align with SOC 2 and ISO security standards. Role-based access controls and audit-ready documentation are built in.',
        practice: 'Hiring can expand without triggering compliance gaps or audit failures. Meet strict financial trust standards (SOC2/ISO) automatically.',
        highlights: ['SOC 2 Infrastructure', 'Audit-Ready Reporting', 'KYC Integrated'],
        badge: 'SOC2 READY',
        result: 'You scale teams globally while maintaining the trust, transparency, and controls regulators expect.'
    },
    {
        title: 'Healthcare & Wellness',
        icon: <HeartPulse className="w-8 h-8" />,
        image: '/images/Gemini_Generated_Image_5blgiw5blgiw5blg.png',
        color: 'from-rose-600 to-pink-500',
        challenge: 'Compulsory data privacy and patient protection laws (GDPR/HIPAA) across jurisdictions.',
        solution: 'Contracts and data workflows respect global privacy. Worker classifications are structured to support healthcare regulatory requirements.',
        practice: 'Sensitive information remains protected across jurisdictions. Manage wellness experts with a platform that understands privacy.',
        highlights: ['HIPAA Protected', 'Data Privacy Layer', 'Medical AOR'],
        badge: 'GDPR PROTECT',
        result: 'You grow international healthcare teams without compromising privacy, compliance, or patient trust.'
    }
];

export default function IndustrySolutions() {
    return (
        <section id="industries" className="py-32 bg-transparent relative overflow-hidden z-10">
            {/* Unique Decorative Elements - Orange and Blue Accents */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-50 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2 opacity-60" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-50 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2 opacity-60" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 rounded-full mb-6 border border-blue-100"
                    >
                        <ShieldCheck className="w-4 h-4 text-brand-blue" />
                        <span className="text-sm font-black text-brand-blue">Specialized Guardrails</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl lg:text-7xl font-black text-brand-black mb-10 leading-[1.05] tracking-tighter"
                    >
                        Sector-Specific <span className="text-brand-orange text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400">Compliance</span> for High-Stakes Teams.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="bg-slate-50 border border-slate-100 p-10 rounded-[3rem] shadow-sm"
                    >
                        <p className="text-xl text-slate-500 font-medium leading-relaxed">
                            Industry risk doesn’t scale evenly across borders. We provide role-aware legal infrastructure where safety, IP protection, and financial certainty are built-in features, not afterthoughts.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-32">
                    {industries.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <Card className="h-full bg-white border border-slate-100 p-8 rounded-[3.5rem] hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.06)] transition-all duration-700 relative flex flex-col group/card overflow-hidden">
                                {/* Header with Badge */}
                                <div className="flex justify-between items-start mb-10">
                                    <div className={`p-4 bg-gradient-to-br ${item.color} rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                        {item.icon}
                                    </div>
                                    <div className="text-sm font-black text-brand-blue px-3 py-1.5 rounded-full border border-blue-100 bg-blue-50/50">
                                        {item.badge}
                                    </div>
                                </div>

                                <h3 className="text-3xl font-black text-brand-black mb-8 leading-tight">{item.title}</h3>

                                {/* Image Integration */}
                                {(item as any).image && (
                                    <div className="mb-10 relative overflow-hidden rounded-[2.5rem] border border-slate-50 shadow-inner h-48">
                                        <img
                                            src={(item as any).image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                                    </div>
                                )}

                                <div className="space-y-8 flex-grow">
                                    <div className="relative pl-6 border-l-2 border-blue-100">
                                        <p className="text-sm font-black text-brand-blue mb-2">Industry Challenge</p>
                                        <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.challenge}</p>
                                    </div>

                                    <div className="p-6 bg-slate-50/80 rounded-3xl border border-slate-100 group-hover:bg-blue-50/30 group-hover:border-blue-100 transition-colors duration-500">
                                        <p className="text-[10px] font-black text-brand-blue uppercase mb-3 tracking-widest">In Practice</p>
                                        <p className="text-xs text-slate-600 font-medium leading-relaxed mb-6">{item.practice}</p>
                                        <div className="space-y-3">
                                            {item.highlights.map((tag, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider">{tag}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10 pt-8 border-t border-slate-100 flex items-center justify-between">
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Standard Met</p>
                                        <p className="text-sm font-black text-brand-black">Global Compliance Verified</p>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Final Outcome Container - Unique Orange/Blue Layout */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange/20 to-brand-blue/20 rounded-[4rem] blur-xl opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                    <div className="relative bg-white border-2 border-orange-50 rounded-[4rem] p-12 lg:p-24 overflow-hidden">
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-50/50 via-transparent to-transparent opacity-50" />

                        <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
                            <div className="lg:w-1/2">
                                <h4 className="text-4xl lg:text-6xl font-black text-brand-black mb-8 leading-[1.1] tracking-tighter">
                                    Strategy with Intent. <br />
                                    <span className="text-brand-orange">Execution with Precision.</span>
                                </h4>
                                <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10">
                                    In regulated industries, one compliance failure can undo years of growth. We’ve built the risk-aware operating layer that makes expansion continuous, not disruptive.
                                </p>
                                <Button size="lg" className="bg-brand-orange text-white hover:bg-orange-600 rounded-[2rem] h-20 px-12 font-black text-lg shadow-xl shadow-orange-200">
                                    Download Sector Guides
                                </Button>
                            </div>

                            <div className="lg:w-1/2 grid grid-cols-2 gap-6 w-full">
                                {[
                                    { label: 'Regulatory Protection', icon: <ShieldCheck className="text-brand-orange" /> },
                                    { label: 'Automated Standards', icon: <CheckCircle2 className="text-brand-blue" /> },
                                    { label: 'Talent Acquisition Speed', icon: <Globe className="text-emerald-500" /> },
                                    { label: 'Verified Global Entities', icon: <Cpu className="text-indigo-500" /> }
                                ].map((box, i) => (
                                    <div key={i} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all duration-500">
                                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-50 mb-4">
                                            {box.icon}
                                        </div>
                                        <p className="text-xs font-black text-brand-black uppercase tracking-widest leading-normal">{box.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
