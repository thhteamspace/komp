'use client';
import { Share2, Globe, Zap } from 'lucide-react';

const ExecutionFramework = () => {
    return (
        <section className="py-32 bg-brand-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <h2 className="text-[2.5rem] font-black text-slate-900 tracking-tighter uppercase relative inline-block">
                        The Execution Framework
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-brand-orange rounded-full" />
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {[
                        {
                            title: 'Unified Data Layer',
                            desc: 'Replacing fragmented spreadsheets with a single source of truth. Every team accesses the same real-time metrics, eliminating debate and accelerating action.',
                            icon: Share2
                        },
                        {
                            title: 'Global Compliance',
                            desc: 'Automated regulatory adherence across 150+ countries. Scale into new markets instantly without the legal bottlenecks or administrative overhead.',
                            icon: Globe
                        },
                        {
                            title: 'Automated Workflows',
                            desc: 'Trigger-based actions that handle the mundane. From onboarding to invoicing, the platform handles the 80% of repetitive tasks so humans focus on strategy.',
                            icon: Zap
                        }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-start group">
                            <div className="w-full h-64 bg-slate-100 rounded-3xl flex items-center justify-center mb-10 overflow-hidden relative border border-slate-200/50">
                                <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-transparent opacity-50" />
                                <item.icon size={80} className="text-slate-300 group-hover:text-brand-orange transition-all duration-500 scale-100 group-hover:scale-110" strokeWidth={1} />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h3>
                            <p className="text-slate-500 leading-relaxed text-[16px] font-medium">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExecutionFramework;
