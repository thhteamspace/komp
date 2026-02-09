'use client';

import { motion } from 'framer-motion';
import { Download, BookText, CheckSquare, ArrowRight, Star, TrendingUp } from 'lucide-react';

const featuredResources = [
    {
        title: "2026 Global Payroll Guide: Avoiding the 5 Most Common Tax Traps",
        desc: "The definitive intelligence on cross-border tax logic. Navigate complex withholdings and multi-jurisdictional liability with our precision-engineered tax table updates for 150+ countries.",
        type: "Flagship Report",
        icon: <BookText className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", // Data dashboard for tax
        isMain: true,
        tag: "MUST READ"
    },
    {
        title: "Contractor vs Employee Checklist",
        desc: "A decision framework for executive teams to mitigate misclassification risk while scaling across international borders.",
        type: "Executive Tool",
        icon: <CheckSquare className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop", // Digital interface
        isMain: false
    },
    {
        title: "Global Expansion Playbook",
        desc: "A step-by-step masterclass on entering new markets with zero friction using EOR infrastructure.",
        type: "Masterclass",
        icon: <TrendingUp className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop", // Globe network
        isMain: false
    }
];

const FeaturedGuides = () => {
    const mainGuide = featuredResources.find(r => r.isMain);
    const secondaryGuides = featuredResources.filter(r => !r.isMain);

    return (
        <section className="py-32 bg-white overflow-hidden relative">
            {/* Background Decoration - Amplified for visibility */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/15 rounded-full blur-[100px] -z-10 pointer-events-none mix-blend-multiply" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-brand-orange/20 via-brand-orange/10 to-transparent blur-[60px] -z-10 pointer-events-none mix-blend-multiply" />

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {featuredResources.map((res, i) => {
                        // Define animations based on index (0: Left, 1: Middle, 2: Right)
                        const isMiddle = i === 1;
                        const isLeft = i === 0;
                        const isRight = i === 2;

                        return (
                            <motion.div
                                key={res.title}
                                initial={{
                                    opacity: 0,
                                    x: isLeft ? 100 : isRight ? -100 : 0,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.4, 0, 0.2, 1],
                                }}
                                className={`
                                    group bg-slate-50 border border-slate-100 rounded-[3rem] p-8 
                                    transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 hover:border-brand-orange/20 
                                    flex flex-col h-full relative
                                    ${isMiddle ? 'z-20' : 'z-10'}
                                `}
                            >
                                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-8 group-hover:shadow-2xl transition-all duration-500 bg-slate-100">
                                    {/* Brand Color Branding Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/40 via-transparent to-brand-orange/40 mix-blend-overlay z-10 opacity-100 group-hover:opacity-60 transition-opacity duration-700" />

                                    {/* Tech Scan Animation */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent z-20 translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-[1.5s] ease-in-out" />

                                    <img
                                        src={res.image}
                                        alt={res.title}
                                        className="w-full h-full object-cover grayscale-[0.4] contrast-[1.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 z-30">
                                        <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold shadow-lg uppercase tracking-wider">
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
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FeaturedGuides;
