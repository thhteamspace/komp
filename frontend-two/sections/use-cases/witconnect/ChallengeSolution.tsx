'use client';
import { X, Check } from 'lucide-react';

const ChallengeSolution = () => {
    return (
        <section className="py-32 bg-brand-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* The Challenge */}
                    <div className="flex-1">
                        <div className="mb-10">
                            <h3 className="text-3xl font-bold mb-4 text-slate-900">The Challenge</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Rapid expansion often brings administrative chaos. TechFlow faced a choice: slow down to build infrastructure or risk compliance failures.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {[
                                { title: 'Fragmented Local Compliance', desc: 'Managing 12 different legal frameworks manually.' },
                                { title: 'High Setup Overhead', desc: '$150k+ sunk cost per entity before first hire.' },
                                { title: 'Risk of Misclassification', desc: 'Potential fines up to 4% of global revenue.' }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                                        <X size={14} className="text-red-500" strokeWidth={3} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                        <p className="text-sm text-slate-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* The Komp Solution */}
                    <div className="flex-1 bg-slate-900 rounded-[2rem] p-10 lg:p-12 text-white relative overflow-hidden">
                        {/* Background Gradient */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 blur-[100px] -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10">
                            <div className="mb-10">
                                <h3 className="text-3xl font-bold mb-4">The Komp Solution</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    A Unified Operating Layer that abstracts the complexity of global employment into a single digital interface.
                                </p>
                            </div>

                            <div className="space-y-8">
                                {[
                                    { title: 'Unified Operating Layer', desc: 'One dashboard to hire, pay, and manage globally.' },
                                    { title: 'Instant Entity Structure', desc: 'Leverage Komp\'s pre-existing entities instantly.' },
                                    { title: 'Automated Visa Processing', desc: 'Streamlined mobility for relocating talent.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="h-6 w-6 rounded-full bg-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                                            <Check size={14} className="text-white" strokeWidth={3} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">{item.title}</h4>
                                            <p className="text-sm text-slate-400">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChallengeSolution;
