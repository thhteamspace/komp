'use client';
import { motion } from 'framer-motion';
import { RefreshCw, ShieldCheck, Layout } from 'lucide-react';

const SolutionSection = () => {
    return (
        <section className="grid lg:grid-cols-2 min-h-screen bg-white">
            <div className="bg-brand-orange text-white flex flex-col justify-center p-12 lg:p-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative z-10"
                >
                    <span className="inline-block py-2 px-4 border border-white/30 rounded-full text-xs font-bold tracking-tight mb-10">
                        The Solution
                    </span>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-10 leading-[0.9]">
                        One Shared <br />Operating Layer.
                    </h2>
                    <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed mb-16 max-w-lg">
                        Komp unified the data stream, replacing 7 legacy systems with a single source of truth accessible by all departments in real-time.
                    </p>

                    <div className="flex flex-col gap-8">
                        {[
                            { icon: <RefreshCw size={24} />, text: "Real-time Bi-directional Sync" },
                            { icon: <ShieldCheck size={24} />, text: "Global Compliance Guardrails" },
                            { icon: <Layout size={24} />, text: "Unified Command Center" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-md group-hover:bg-white/30 transition-colors">
                                    {item.icon}
                                </div>
                                <span className="text-xl font-bold tracking-tight">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <div className="bg-[#f8f6f5] p-12 lg:p-24 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    className="w-full max-w-xl aspect-[4/3] bg-white rounded-3xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-200 p-2 flex flex-col relative transform lg:-translate-x-12 lg:hover:translate-x-0 transition-transform duration-500 ease-out"
                >
                    <div className="h-14 border-b border-slate-100 flex items-center justify-between px-6">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="w-40 h-2 bg-slate-100 rounded-full"></div>
                    </div>

                    <div className="flex-1 p-8 flex flex-col gap-8">
                        <div className="grid grid-cols-3 gap-6">
                            {[1, 2, 3].map((n) => (
                                <div key={n} className="h-28 bg-brand-orange/5 rounded-2xl border border-brand-orange/10 p-4">
                                    <div className="w-10 h-10 bg-white rounded-lg mb-3 shadow-sm"></div>
                                    <div className="w-20 h-2 bg-slate-200 rounded-full"></div>
                                </div>
                            ))}
                        </div>

                        <div className="flex-1 bg-slate-50 rounded-3xl border border-dashed border-slate-200 flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                                    <RefreshCw className="text-brand-orange animate-spin-slow" size={32} />
                                </div>
                                <p className="text-xs text-slate-400 font-bold tracking-tight">Live Data Stream</p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute -right-8 top-1/3 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 max-w-[240px]">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-xs font-bold text-slate-700 tracking-tight">System Sync</span>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed font-medium">All regional nodes connected successfully. Infrastructure stabilized.</p>
                    </div>
                </motion.div>
            </div>

            <style jsx>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default SolutionSection;
