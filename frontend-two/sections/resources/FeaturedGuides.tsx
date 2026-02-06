'use client';

import { motion } from 'framer-motion';
import { Download, BookText, CheckSquare, ArrowRight, Star, TrendingUp } from 'lucide-react';

const featuredResources = [
    {
        title: "2026 Global Payroll Guide: Avoiding the 5 Most Common Tax Traps",
        desc: "The definitive intelligence on cross-border tax logic. Navigate complex withholdings and multi-jurisdictional liability with our precision-engineered tax table updates for 150+ countries.",
        type: "Flagship Report",
        icon: <BookText className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop",
        isMain: true,
        tag: "MUST READ"
    },
    {
        title: "Contractor vs Employee Checklist",
        desc: "A decision framework for executive teams to mitigate misclassification risk while scaling across international borders.",
        type: "Executive Tool",
        icon: <CheckSquare className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
        isMain: false
    },
    {
        title: "Global Expansion Playbook",
        desc: "A step-by-step masterclass on entering new markets with zero friction using EOR infrastructure.",
        type: "Masterclass",
        icon: <TrendingUp className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        isMain: false
    }
];

const FeaturedGuides = () => {
    const mainGuide = featuredResources.find(r => r.isMain);
    const secondaryGuides = featuredResources.filter(r => !r.isMain);

    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="mb-8 self-center"
                    >
                        <span className="text-base font-bold text-brand-blue">Intelligence Selection</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="font-black text-slate-950 tracking-tighter leading-tight mb-6"
                        style={{ fontSize: '4vw' }}
                    >
                        Featured <span className="text-brand-orange">Intelligence.</span>
                    </motion.h2>
                    <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
                        A curated selection of the most vital global hiring and payroll intelligence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredResources.map((res, i) => (
                        <motion.div
                            key={res.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group bg-slate-50 border border-slate-100 rounded-[3rem] p-8 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 hover:border-brand-orange/20 flex flex-col h-full"
                        >
                            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-8">
                                <img
                                    src={res.image}
                                    alt={res.title}
                                    className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-slate-900 to-slate-700 group-hover:from-brand-orange group-hover:to-orange-600 text-white text-[10px] font-semibold shadow-lg transition-all duration-500">
                                        {res.type}
                                    </span>
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col justify-between">
                                <div className="space-y-4 mb-8">
                                    <h3 className="text-xl font-black text-slate-950 tracking-tight leading-tight group-hover:text-brand-orange transition-colors">
                                        {res.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                        {res.desc}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between mt-auto">
                                    <button className="text-sm font-semibold text-slate-950 border-b border-slate-200 pb-1 group-hover:border-brand-orange group-hover:text-brand-orange transition-all">
                                        View Resource
                                    </button>
                                    <ArrowRight size={14} className="text-slate-300 group-hover:text-brand-orange group-hover:translate-x-1 transition-all" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedGuides;
