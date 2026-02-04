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
            </div>
        </section>
    );
};
export default KnowledgeCenter;
