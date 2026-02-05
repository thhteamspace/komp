'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const resources = [
    {
        title: "2026 Global Payroll Guide",
        category: "Flagship Report",
        // Abstract Tech/Globe image
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
        desc: "The definitive guide to paying teams in 150+ countries. Updated tax tables."
    },
    {
        title: "The Expansion Playbook",
        category: "Strategy Masterclass",
        // High-rise/Scale abstract
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        desc: "A step-by-step framework for entering new markets. Entity setup vs EOR."
    }
];

const KnowledgeCenter = () => {
    return (
        <section className="py-32 bg-slate-50 relative overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center justify-center text-center mb-20"
                >
                    <h2
                        className="font-black text-slate-950 tracking-tighter mb-8"
                        style={{ fontSize: '4vw', lineHeight: '1' }}
                    >
                        Insights <span className="text-slate-300 italic">& Intelligence.</span>
                    </h2>
                    <button className="hidden md:flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 hover:text-brand-orange hover:border-brand-orange transition-all">
                        View All Resources <ArrowUpRight size={14} />
                    </button>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {resources.map((res, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                            className="group cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-[2rem] mb-8 border border-white/10">
                                <div className="absolute inset-0 bg-brand-orange/20 mix-blend-color group-hover:opacity-0 transition-opacity duration-700 z-10" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

                                <motion.img
                                    src={res.image}
                                    alt={res.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />

                                <div className="absolute top-6 left-6 z-20">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full">
                                        <span className="text-[10px] font-black text-white uppercase tracking-widest">{res.category}</span>
                                    </div>
                                </div>

                            </div>

                            {/* Text Content */}
                            <div className="pl-4 border-l-2 border-slate-200 group-hover:border-brand-orange transition-colors duration-500">
                                <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-brand-orange transition-colors">
                                    {res.title}
                                </h3>
                                <p className="text-slate-500 text-lg leading-relaxed max-w-md">
                                    {res.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Final Knowledge CTA - Lead Gen Hub */}
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                    className="mt-40 p-12 md:p-16 rounded-[4rem] bg-slate-950 text-white relative overflow-hidden group shadow-2xl"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/20 blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue/10 blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
                        <div className="max-w-2xl">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                                <span className="text-brand-orange text-[10px] font-black uppercase tracking-[0.4em]">Ready to Execute?</span>
                            </motion.div>

                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: 0.3 }}
                                className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[0.95]"
                            >
                                Get the Global Expansion <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-[#FFB366]">Playbook (2026 Edition).</span>
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: 0.4 }}
                                className="text-slate-400 text-xl font-medium leading-relaxed"
                            >
                                Everything you need to know about EOR vs. Entities, localized taxes, and hiring speed across 150+ markets.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                            className="flex flex-col gap-6 w-full lg:w-auto text-center"
                        >
                            <button className="px-14 py-6 rounded-2xl bg-white text-slate-950 font-black uppercase tracking-widest text-sm transition-all hover:scale-105 hover:shadow-[0_20px_40px_rgba(255,255,255,0.15)] active:scale-95">
                                Download Playbook
                            </button>
                            <div className="flex flex-col gap-1">
                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em]">Sent instantly to your inbox</p>
                                <div className="h-[1px] w-12 bg-slate-800 mx-auto mt-2" />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
export default KnowledgeCenter;
