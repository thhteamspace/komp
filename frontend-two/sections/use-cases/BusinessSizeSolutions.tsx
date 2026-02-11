'use client';

import { motion } from 'framer-motion';
import { Layers, Rocket, Building2, ArrowRight, Zap, Target, Shield } from 'lucide-react';
import Card from '@/components/Card';

const stats = [
    { label: 'Processed Annually', value: '$87B+', sub: 'Globally Secure' },
    { label: 'Account Activation', value: 'Instant', sub: 'Zero One-Time Payment' },
    { label: 'Countries Supported', value: '150+', sub: 'Direct Entities Only' }
];

const stages = [
    {
        id: 'startup',
        title: 'Startups',
        icon: <Rocket className="w-5 h-5" />,
        image: '/images/Gemini_Generated_Image_r46mkar46mkar46m.png',
        problemText: 'Immediate hiring needs to secure scarce global talent. No time or capital for entity setup. High risk of compliance mistakes during rapid expansion.',
        problemShort: 'You don\'t need a $50k legal setup in every market just to hire one person. The entity trap is real.',
        solution: 'Hire the best talent in 48 hours without opening a local office. Immediate access to global pools. Rapid onboarding through compliant local contracts.',
        metric: 'Fast-Track Setup',
        framework: 'No incorporation, banking, or advisory delays. Immediate access to global talent pools.'
    },
    {
        id: 'mid-market',
        title: 'Mid-Market',
        icon: <Building2 className="w-5 h-5" />,
        image: '/images/Gemini_Generated_Image_tg0lkytg0lkytg0l.png',
        problemText: 'Multiple countries, multiple payroll providers. Contractors and employees managed across disconnected systems. Rising overhead, FX exposure, and reporting gaps.',
        problemShort: 'Local labor laws change every 90 days. We assume the liability so you don\'t have to.',
        solution: 'Consolidate your remote team and stop the "Entity Trap." Reduce overhead, FX leakage, and administrative gaps with a single dashboard.',
        metric: 'Risk-Free Growth',
        framework: 'Unified payroll and invoicing across countries. Reduced FX leakage and administrative overhead.'
    },
    {
        id: 'enterprise',
        title: 'Enterprise',
        icon: <Layers className="w-5 h-5" />,
        image: '/images/Gemini_Generated_Image_axela7axela7axel.png',
        problemText: 'Thousands of employees across jurisdictions. Fragmented data across HR, Finance, and Legal systems. Limited real-time visibility into global workforce costs.',
        problemShort: 'Multi-currency transfers and hidden FX fees are eating 4% of your EBITDA. We fix that.',
        solution: 'Centralize global payroll and manage thousands of employees on one screen. API-based integrations with HRIS and finance stacks.',
        metric: 'Financial Efficiency',
        framework: 'Centralized compliance documentation and audit readiness. Role-based access and security governance.'
    }
];

export default function BusinessSizeSolutions() {
    return (
        <section className="py-24 bg-white relative overflow-hidden z-10">
            <div className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center group">
                            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-5xl lg:text-7xl font-black text-brand-orange mb-4 tracking-tighter">{stat.value}</motion.p>
                            <p className="text-[11px] font-black text-slate-800 uppercase tracking-[0.2em] mb-1">{stat.label}</p>
                            <p className="text-[10px] text-slate-400 font-bold uppercase">{stat.sub}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <h2 className="text-4xl lg:text-7xl font-black text-brand-black mb-8 tracking-tighter">
                        Scaling at <span className="text-brand-orange">Every Stage</span>, Without Rebuilding Infrastructure.
                    </h2>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 mb-12">
                        <p className="text-[10px] font-black text-brand-orange uppercase tracking-widest mb-4">Summary</p>
                        <p className="text-xl text-slate-500 font-medium leading-relaxed">
                            A multi-stage organization faced growing complexity as global hiring needs expanded unevenly. Speed for startups, visibility for mid-market, and control for enterprise. KOMP was implemented as a single workforce infrastructure capable of supporting every phase of growth without forcing structural reinvention.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {stages.map((stage, index) => (
                        <motion.div key={stage.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                            <Card className="h-full bg-white border border-slate-200 p-10 rounded-[3rem] hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col group">
                                <div className="mb-8 p-5 bg-slate-50 rounded-2xl w-fit text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                                    {stage.icon}
                                </div>
                                <h3 className="text-3xl font-black text-brand-black mb-8">{stage.title}</h3>

                                {stage.image && (
                                    <div className="mb-10 relative overflow-hidden rounded-[2rem] border border-slate-100 group-hover:border-brand-orange/30 transition-colors">
                                        <img
                                            src={stage.image}
                                            alt={stage.title}
                                            className="w-full h-48 object-cover transform transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                    </div>
                                )}

                                <div className="space-y-10 flex-grow">
                                    <div>
                                        <div className="text-[11px] font-black text-red-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-red-500" /> The Problem
                                        </div>
                                        <div className="space-y-4">
                                            <p className="text-brand-black font-bold leading-relaxed">"{stage.problemShort}"</p>
                                            <p className="text-slate-500 text-sm font-medium leading-relaxed">{stage.problemText}</p>
                                        </div>
                                    </div>

                                    <div className="pt-8 border-t border-slate-100">
                                        <div className="text-[11px] font-black text-brand-blue uppercase tracking-widest mb-4 flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-brand-blue" /> The KOMP Solution
                                        </div>
                                        <p className="text-slate-700 font-bold leading-relaxed mb-4">{stage.solution}</p>
                                        <div className="p-4 bg-slate-50 rounded-2xl text-xs font-medium text-slate-500 italic">
                                            {stage.framework}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
                                    <div>
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Results After 90 Days</span>
                                        <span className="text-xl font-black text-brand-black">{stage.metric}</span>
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-all">
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-32">
                    <div className="bg-white border-2 border-orange-50 p-12 lg:p-20 rounded-[4rem] text-brand-black relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)]">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 blur-[100px]" />
                        <div className="max-w-4xl relative z-10">
                            <h3 className="text-3xl lg:text-6xl font-black mb-8 leading-[1.1] tracking-tighter text-brand-black">Outcome: Continuous Growth, <span className="text-brand-orange">Not Disruption.</span></h3>
                            <p className="text-slate-500 text-xl font-medium leading-relaxed">
                                Expansion became continuous rather than disruptive, supported by a platform that evolved alongside the business. No disruption or replatforming as the business scaled from a single team to a global operation.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
                                {[
                                    { t: 'Velocity', d: 'Enter new markets 10x faster than traditional setups.' },
                                    { t: 'Visibility', d: 'Consolidated data for HR, Finance, and Legal on one screen.' },
                                    { t: 'Certainty', d: 'Zero liability for local labor law compliance.' }
                                ].map((item, i) => (
                                    <div key={i} className="space-y-4">
                                        <div className="w-10 h-1 h-brand-orange bg-brand-orange rounded-full" />
                                        <h4 className="text-xl font-black">{item.t}</h4>
                                        <p className="text-sm text-slate-500 font-bold">{item.d}</p>
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
