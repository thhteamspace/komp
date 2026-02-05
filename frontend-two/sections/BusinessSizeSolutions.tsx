'use client';

import { motion } from 'framer-motion';
import { Rocket, Building2, Globe2, CheckCircle2, ArrowRight } from 'lucide-react';
import Button from '@/components/Button';

const sizeSolutions = [
    {
        title: 'Startups',
        icon: <Rocket className="w-8 h-8 text-brand-orange" />,
        description: 'Move fast, break nothing. Hire worldwide without the entity headaches.',
        benefits: [
            'Hire in 48 hours',
            'No local entity required',
            'Beat competitors to talent',
            'Avoid 6-month legal setup'
        ],
        cta: 'Get Started Fast',
        preview: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
        color: 'from-orange-50 to-orange-100/50'
    },
    {
        title: 'Mid-Market',
        icon: <Building2 className="w-8 h-8 text-brand-blue" />,
        description: 'Consolidate and scale. Professionalize your global operations with ease.',
        benefits: [
            'Consolidate contractors + employees',
            'Avoid the "entity trap"',
            'Unified system for 5+ payroll tools',
            'CFO-friendly operations'
        ],
        cta: 'Scale Efficiently',
        preview: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop',
        color: 'from-blue-50 to-blue-100/50'
    },
    {
        title: 'Enterprise',
        icon: <Globe2 className="w-8 h-8 text-indigo-600" />,
        description: 'Complex hiring, simplified. The single source of truth for global HRIS.',
        benefits: [
            'Centralized global payroll',
            'HRIS + Finance integrations',
            'Advanced Security & permissions',
            'Single source of truth'
        ],
        cta: 'Modernize Operations',
        preview: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
        color: 'from-indigo-50 to-indigo-100/50'
    }
];

const BusinessSizeSolutions = () => {
    return (
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="w-full max-w-7xl mx-auto relative z-10 px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-brand-black mb-6"
                    >
                        Built for where you are today <br />
                        <span className="text-slate-400 font-medium">(and where you’re going tomorrow).</span>
                    </motion.h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Whether you’re a 10-person startup or a 10,000-person enterprise, KOMP adapts to your scale.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {sizeSolutions.map((solution, index) => (
                        <motion.div
                            key={solution.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`group flex flex-col rounded-[2.5rem] border border-slate-100 bg-gradient-to-b ${solution.color} p-8 hover:shadow-2xl transition-all duration-500`}
                        >
                            <div className="mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                                {solution.icon}
                            </div>

                            <h3 className="text-3xl font-black text-brand-black mb-4">{solution.title}</h3>
                            <p className="text-slate-600 mb-8 font-medium">{solution.description}</p>

                            <div className="space-y-4 mb-10 flex-grow">
                                {solution.benefits.map((benefit) => (
                                    <div key={benefit} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-brand-blue mt-0.5 shrink-0" />
                                        <span className="text-slate-700 font-semibold">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video border border-white/50 shadow-sm">
                                <img
                                    src={solution.preview}
                                    alt={solution.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-brand-black/10 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            <Button variant="premium" className="w-full h-14 font-black tracking-wide">
                                {solution.cta} <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BusinessSizeSolutions;
