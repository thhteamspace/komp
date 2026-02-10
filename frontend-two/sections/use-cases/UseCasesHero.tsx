'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from '@/components/Button';
import { Rocket, Shield, Users, Landmark, Sparkles, CheckCircle2 } from 'lucide-react';

const personas = [
    {
        id: 'startup',
        name: 'Startup',
        icon: <Rocket className="w-5 h-5" />,
        headline: 'Hire the best talent in 48 hours.',
        sub: 'Entity-free onboarding for rapid scaling.',
        metrics: [
            { label: 'Time to Hire', value: '48h', sub: 'Global Average' },
            { label: 'Entity Cost', value: '$0', sub: 'Zero Setup Required' }
        ]
    },
    {
        id: 'hr',
        name: 'HR Team',
        icon: <Users className="w-5 h-5" />,
        headline: 'Automate global compliance.',
        sub: 'Streamlined lifecycle management.',
        metrics: [
            { label: 'Onboarding', value: 'Instant', sub: '150+ Countries' },
            { label: 'Admin Work', value: '-85%', sub: 'Automated Workflows' }
        ]
    },
    {
        id: 'finance',
        name: 'Fintech',
        icon: <Landmark className="w-5 h-5" />,
        headline: 'Unified financial operating layer.',
        sub: 'Transparent rails and automated taxes.',
        metrics: [
            { label: 'Tax Liability', value: 'Safe', sub: 'Auto-Calculated' },
            { label: 'Consolidated Spend', value: '100%', sub: 'Real-time Visibility' }
        ]
    }
];

const partners = [
    { name: 'Zoom', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Zoom_Communications_Logo.svg/2560px-Zoom_Communications_Logo.svg.png' },
    { name: 'Siemens', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/2560px-Siemens-logo.svg.png' },
    { name: 'Airbnb', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_Bélo.svg/2560px-Airbnb_Logo_Bélo.svg.png' },
    { name: 'Snowflake', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Snowflake_Logo.svg/2560px-Snowflake_Logo.svg.png' },
    { name: 'Asana', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Asana_logo.svg/2560px-Asana_logo.svg.png' },
    { name: 'N26', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/N26_logo.svg/2560px-N26_logo.svg.png' }
];

export default function UseCasesHero() {
    const [activePersona, setActivePersona] = useState(personas[0]);

    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-white min-h-[85vh] flex items-center">
            {/* Enhanced Background Architecture */}
            <div className="absolute inset-0 z-0 opacity-[0.1] pointer-events-none">
                <img
                    src="/images/hero_bg.png"
                    alt=""
                    className="w-full h-full object-cover grayscale brightness-110"
                />
            </div>
            {/* Distinct Mesh Accents */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50">
                <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-blue-100/30 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-orange-100/30 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-brand-blue font-bold text-sm mb-4 block"
                        >
                            The Infrastructure for Global Ambition
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="font-black text-brand-black mb-6 tracking-tighter leading-[1.05] text-balance"
                            style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}
                        >
                            Global hiring solutions for <span className="text-brand-orange">every stage of your journey.</span>
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="space-y-4 mb-8"
                        >
                            <p className="text-lg text-brand-black leading-relaxed max-w-xl font-medium">
                                Whether you are a founder hiring your first developer or a CFO managing a team of 500, KOMP provides the infrastructure you need to stay compliant and scale fast.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-wrap gap-4 mb-10"
                        >
                            <Button size="lg" className="bg-brand-orange text-white hover:bg-orange-600 rounded-full px-8 h-14 font-bold shadow-lg shadow-orange-200">
                                Talk to an Expert
                            </Button>
                            <Button size="lg" variant="outline" className="border-slate-200 text-brand-black hover:bg-white rounded-full px-8 h-14 bg-white shadow-sm font-bold">
                                View the Platform
                            </Button>
                        </motion.div>

                        <div className="flex flex-wrap gap-3">
                            {['Entity Delays', 'Compliance Risk', 'Misclassification Fines'].map((tag, i) => (
                                <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50/50 border border-blue-100 text-[11px] font-bold text-brand-blue">
                                    <div className="w-1 h-1 rounded-full bg-brand-orange" />
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hero Visual - Dashboard Image (Slightly larger now) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative lg:-mr-20 lg:-mt-32"
                    >
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-brand-blue/10 rounded-full blur-[120px] -z-10 scale-150" />

                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange/20 to-brand-blue/20 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-white rounded-[3rem] p-2 shadow-2xl border border-white/50 overflow-hidden">
                                <img
                                    src="/images/Gemini_Generated_Image_31xqed31xqed31xq.png"
                                    alt="KOMP Unified Dashboard"
                                    className="w-full h-auto rounded-[2.5rem] transform transition-transform duration-700 group-hover:scale-[1.02]"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-32 pt-16">
                    <p className="text-center text-[10px] font-black text-slate-950 uppercase tracking-[0.3em] mb-12">
                        Loved by next-generation teams
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12">
                        {partners.map((p) => (
                            <img
                                key={p.name}
                                src={p.logo}
                                alt={p.name}
                                className="h-6 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-none"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
