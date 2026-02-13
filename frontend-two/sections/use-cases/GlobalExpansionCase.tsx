'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Globe2, MapPin, ArrowRight, ShieldCheck, Zap, BarChart3 } from 'lucide-react';

const mapMarkers = [
    { country: 'Germany', time: '48 Hours', benefit: '13th Month Salary', x: '45%', y: '35%' },
    { country: 'Japan', time: '72 Hours', benefit: 'Local Health Insurance', x: '82%', y: '40%' },
    { country: 'Brazil', time: '96 Hours', benefit: 'Mandatory Food Voucher', x: '30%', y: '75%' }
];

export default function GlobalExpansionCase() {
    return (
        <section className="py-32 bg-white overflow-hidden relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                {/* Summary Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
                    <div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-brand-blue font-bold text-sm mb-4 block"
                        >
                            Case Study: Technology Sector
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl lg:text-6xl font-black text-brand-black mb-8 tracking-tighter leading-[1.1]"
                        >
                            Global Expansion Without <br className="hidden lg:block" />
                            <span className="text-brand-orange">Structural Drag.</span>
                        </motion.h2>
                        <div className="bg-slate-50 p-8 rounded-3xl">
                            <p className="text-sm font-black text-brand-blue mb-3">Summary</p>
                            <p className="text-xl text-slate-600 font-medium leading-relaxed">
                                A fast-scaling technology company needed to enter multiple international markets... expansion stalled due to entity setup delays, fragmented payroll vendors, and increasing compliance exposure. KOMP partnered with the company to remove legal and operational friction, enabling compliant hiring across borders without long-term structural commitments.
                            </p>
                        </div>
                    </div>

                    <div className="lg:pt-20">
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { label: 'Market Entry', value: '48 Hours', icon: <Zap className="w-5 h-5" /> },
                                { label: 'Overhead Reduction', value: '70%', icon: <BarChart3 className="w-5 h-5" /> },
                                { label: 'Legal Liability', value: 'Transferred', icon: <ShieldCheck className="w-5 h-5" /> },
                                { label: 'Market Access', value: '150+', icon: <Globe2 className="w-5 h-5" /> }
                            ].map((stat, i) => (
                                <div key={i} className="p-6 bg-white border border-slate-100 shadow-sm rounded-3xl">
                                    <div className="text-brand-orange mb-3">{stat.icon}</div>
                                    <p className="text-2xl font-black text-brand-black">{stat.value}</p>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* The Problem Section */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl lg:text-5xl font-black text-brand-black mb-6 tracking-tight">The Problem: Growth Was Ready. Infrastructure Wasn’t.</h3>
                        <p className="text-slate-500 max-w-2xl mx-auto font-medium">Before engaging KOMP, the company faced compounding challenges that slowed international expansion.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Fragmented Expansion Model',
                                image: '/images/image copy 7.png',
                                items: [
                                    'Each country required separate legal entities, advisors, and payroll providers',
                                    'Incorporation timelines stretched from weeks to months',
                                    'High upfront costs made market testing risky and irreversible'
                                ]
                            },
                            {
                                title: 'Limited Financial Visibility',
                                items: [
                                    'Payroll ran through multiple local vendors',
                                    'FX exposure and intermediary fees inflated costs',
                                    'Finance lacked a consolidated view of global spend'
                                ]
                            },
                            {
                                title: 'Escalating Compliance Risk',
                                items: [
                                    'Country-specific labor laws created ongoing legal uncertainty',
                                    'Leadership time was consumed managing risk',
                                    'Velocity was dictated by bureaucracy, not opportunity'
                                ]
                            }
                        ].map((box, i) => (
                            <div key={i} className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col h-full overflow-hidden">
                                <h4 className="text-xl font-black text-brand-black mb-6 flex gap-2">
                                    <span className="text-red-500">#</span> {box.title}
                                </h4>

                                {/* Image for the first card */}
                                {box.image && (
                                    <div className="mb-6 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                                        <img src={box.image} alt={box.title} className="w-full h-auto object-cover" />
                                    </div>
                                )}

                                <ul className="space-y-4 flex-grow">
                                    {box.items.map((item, j) => (
                                        <li key={j} className="flex gap-3 text-sm text-slate-500 font-medium leading-relaxed">
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-200 mt-2 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* The Solution & Map */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
                    <div className="lg:col-span-5 space-y-10 text-balance">
                        <div>
                            <h3 className="text-3xl lg:text-4xl font-black text-brand-black mb-6 tracking-tight">The Solution: A Centralized Operating Layer</h3>
                            <p className="text-lg text-slate-500 leading-relaxed font-medium">
                                Instead of expanding entity by entity, the company adopted KOMP as a unified operating layer for global employment.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                'Hire full-time employees through EOR without local entities',
                                'Engage contractors compliantly through Agent of Record (AOR)',
                                'Centralize payroll, statutory benefits, and compliance management'
                            ].map((text, i) => (
                                <div key={i} className="flex gap-4 items-center p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                                    <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 shrink-0">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-bold text-slate-700">{text}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-sm text-slate-400 italic">
                            All workforce data - contracts, payroll, benefits, and compliance documentation - was consolidated into a single system accessible by HR, Finance, and Legal teams.
                        </p>
                    </div>

                    <div className="lg:col-span-7 relative">
                        <div className="bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-300 h-[500px] flex flex-col items-center justify-center shadow-inner p-8 text-center">
                            <h4 className="text-gray-400 font-bold text-2xl mb-2">MAP VISUALIZATION</h4>
                            <p className="text-gray-400">Interactive Map & Markers Placeholder</p>
                        </div>
                    </div>
                </div>

                {/* Execution Framework - Redesigned to be unique/light */}
                <div className="mb-32">
                    <div className="bg-white border-2 border-slate-50 rounded-[4rem] p-12 lg:p-20 relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)]">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 blur-[100px]" />
                        <h3 className="text-3xl lg:text-6xl font-black text-brand-black mb-16 tracking-tighter">Execution Framework</h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                            {[
                                {
                                    t: 'Market Entry',
                                    c: 'New hires onboarded within days. No incorporation, banking setup, or local advisory dependency.',
                                    accent: 'bg-orange-50 text-brand-orange'
                                },
                                {
                                    t: 'Compliance Management',
                                    c: 'Jurisdiction-specific contracts issued and maintained. Liability transferred away from clients.',
                                    accent: 'bg-blue-50 text-brand-blue'
                                },
                                {
                                    t: 'Payroll & Reporting',
                                    c: 'One consolidated payroll workflow. Single funding event with real-time visibility into global costs.',
                                    accent: 'bg-emerald-50 text-emerald-600'
                                }
                            ].map((item, i) => (
                                <div key={i} className="space-y-6 group">
                                    <div className={`w-14 h-14 ${item.accent} rounded-2xl flex items-center justify-center font-black text-xl shadow-inner group-hover:scale-110 transition-transform`}>
                                        0{i + 1}
                                    </div>
                                    <h4 className="text-2xl font-black text-brand-black">{item.t}</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.c}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Final Outcome */}
                <div className="text-center">
                    <div className="inline-flex gap-8 mb-16">
                        {[
                            { v: '10x', l: 'Faster Entry' },
                            { v: '70%', l: 'Less Overhead' },
                            { v: 'Zero', l: 'Compliance Fines' }
                        ].map((res, i) => (
                            <div key={i} className="text-center">
                                <p className="text-4xl lg:text-6xl font-black text-brand-orange leading-none mb-2">{res.v}</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{res.l}</p>
                            </div>
                        ))}
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-2xl lg:text-3xl font-bold text-brand-black mb-8 italic">"Expansion shifted from a legal bottleneck to a repeatable operating model."</h3>
                        <p className="text-lg text-slate-500 leading-relaxed font-medium">
                            By replacing fragmented expansion with a centralized employment infrastructure, the company regained control over speed, cost, and risk. Global hiring became predictable, compliant, and scalable.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
