import React from 'react';
import { Shield, User, FileText, Check } from 'lucide-react';

const CompetitiveKill = () => {
    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-8">
                <div className="bg-gray-900 rounded-3xl p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">

                    {/* Background Mesh */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[120px] opacity-20 pointer-events-none" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                The infrastructure <br /> of trust.
                            </h2>
                            <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-md">
                                We don't just provide software; we provide legal immunity. Our local entities absorb the risk so you don't have to.
                            </p>

                            <div className="flex gap-12 border-t border-gray-800 pt-8">
                                <div>
                                    <div className="text-4xl font-bold text-white mb-2">160+</div>
                                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Countries</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-white mb-2">100%</div>
                                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Compliance</div>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-6">
                            {[
                                { icon: User, title: "Human in the Loop", desc: "Expert legal teams review every edge case." },
                                { icon: Shield, title: "Liability Transfer", desc: "We become the legal employer. You retain direction." },
                                { icon: FileText, title: "Audit Defense", desc: "Real-time logs generated for every transaction." }
                            ].map((item, i) => (
                                <div key={i} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl flex items-start gap-6 hover:bg-gray-800 transition-colors">
                                    <div className="p-3 bg-gray-700 rounded-lg text-blue-400">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                        <p className="text-gray-400 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CompetitiveKill;
