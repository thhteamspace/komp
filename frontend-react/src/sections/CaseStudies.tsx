

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, AlertCircle, Zap, ShieldCheck, Globe } from 'lucide-react';
import Button from '@/components/Button';

const cases = [
    {
        id: 'tech-scaling',
        company: 'CloudStream SaaS',
        sector: 'Tech / SaaS',
        title: 'Rapid Engineering Expansion.',
        problem: 'Needed to hire 45 senior engineers across Brazil, India, and Poland in under 60 days without local entities.',
        solution: 'KOMP Activate & Workforce enabled compliant onboarding and IP protection within 48 hours per hire.',
        result: 'Saved $1.2M in legal setup costs and achieved 100% hiring target ahead of schedule.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop',
        icon: Zap,
        color: '#f97316'
    },
    {
        id: 'healthcare-compliance',
        company: 'VitalsGlobal',
        sector: 'Healthcare',
        title: 'Global Compliance Shield.',
        problem: 'Faced potential misclassification penalties while managing remote medical consultants across 15 countries.',
        solution: 'Implemented KOMP Governance to audit every contract and transition consultants to compliant EOR/Contractor models.',
        result: 'Zero compliance gaps identified during annual audit; reduced legal risk exposure by 100%.',
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop',
        icon: ShieldCheck,
        color: '#10b981'
    },
    {
        id: 'professional-mobility',
        company: 'Strata Partners',
        sector: 'Professional Services',
        title: 'Unlimited Mobility.',
        problem: 'Consultants needed to move between client sites in London, Singapore, and Dubai with urgent visa requirements.',
        solution: 'KOMP PayOps & Mobility handled multi-currency payroll and relocation logistics without requiring direct entities.',
        result: 'Average visa turnaround reduced from 3 months to 3 weeks; 99% employee satisfaction rate.',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2932&auto=format&fit=crop',
        icon: Globe,
        color: '#3b82f6'
    }
];

const CaseStudies = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-32 bg-slate-50 relative overflow-hidden scroll-mt-40">
            <div className="w-full max-w-7xl mx-auto px-6 relative z-10">

                <div className="flex flex-col items-center text-center mb-20 gap-8">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="text-brand-blue font-bold text-base mb-6 inline-block"
                        >
                            Expansion Stories
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="font-black text-slate-950 tracking-tighter leading-[0.9]"
                            style={{ fontSize: '4vw' }}
                        >
                            Human Impact. <span className="text-brand-orange">Technical Precision.</span>
                        </motion.h2>
                    </div>
                    <div className="flex gap-4">
                        {cases.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={`w-12 h-2 rounded-full transition-all duration-500 ${activeIndex === i ? 'bg-brand-orange w-24' : 'bg-slate-200'}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 0.98, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 1.02, y: -20 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white rounded-[3rem] border border-slate-200 overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.05)] flex flex-col lg:flex-row min-h-[500px]"
                        >
                            {/* Left: Content Area */}
                            <div className="flex-1 p-10 md:p-14 flex flex-col justify-between order-2 lg:order-1">
                                <div>
                                    <div className="flex items-center gap-4 mb-10">
                                        <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-950">
                                            {(() => {
                                                const Icon = cases[activeIndex].icon;
                                                return <Icon size={24} />;
                                            })()}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-slate-950 tracking-tight">{cases[activeIndex].company}</h3>
                                            <p className="text-[10px] font-bold tracking-wider text-slate-400">{cases[activeIndex].sector}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-10">
                                        <div>
                                            <div className="flex items-center gap-2 text-rose-500 mb-2">
                                                <AlertCircle size={16} />
                                                <span className="text-[10px] font-bold tracking-wider">The Problem</span>
                                            </div>
                                            <p className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                                                "{cases[activeIndex].problem}"
                                            </p>
                                        </div>

                                        <div>
                                            <div className="flex items-center gap-2 text-brand-blue mb-2">
                                                <Zap size={16} />
                                                <span className="text-[10px] font-bold tracking-wider">KOMP Solution</span>
                                            </div>
                                            <p className="text-lg font-medium text-slate-600">
                                                {cases[activeIndex].solution}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
                                    <div>
                                        <div className="flex items-center gap-2 text-emerald-500 mb-2">
                                            <CheckCircle2 size={16} />
                                            <span className="text-[10px] font-bold tracking-wider">Verified Result</span>
                                        </div>
                                        <p className="text-2xl font-black text-slate-950 tracking-tight italic">
                                            {cases[activeIndex].result}
                                        </p>
                                    </div>
                                    <Button variant="premium" className="rounded-full px-10 h-14">
                                        View Full Story
                                    </Button>
                                </div>
                            </div>

                            {/* Right: Visual Area */}
                            <div className="w-full lg:w-[40%] relative overflow-hidden min-h-[300px] lg:min-h-full order-1 lg:order-2">
                                <img
                                    src={cases[activeIndex].image}
                                    alt={cases[activeIndex].company}
                                    className="absolute inset-0 w-full h-full object-cover saturate-0 opacity-40 group-hover:saturate-100 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/5 to-white pointer-events-none" />

                                {/* Overlay Accent */}
                                <div className="absolute top-12 right-12 bottom-12 left-12 border-2 border-white/20 rounded-[3rem] pointer-events-none" />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
