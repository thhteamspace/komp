'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { Briefcase, Building2, Globe2 } from 'lucide-react';
import Card from '@/components/Card';

const useCases = [
    {
        category: 'By Business Size',
        items: [
            { title: 'Startups', desc: 'Hire your first international engineer without legal overhead.' },
            { title: 'Mid-Market', desc: 'Expand into new markets efficiently with controlled costs.' },
            { title: 'Enterprise', desc: 'Consolidate 1,000+ global employees onto one compliance platform.' }
        ]
    },
    {
        category: 'By Team Function',
        items: [
            { title: 'HR Teams', desc: 'Automate onboarding, contracts, and benefits administration.' },
            { title: 'Finance Teams', desc: 'One invoice for all global payroll. Eliminate FX headaches.' },
            { title: 'Legal Teams', desc: 'Stay compliant with changing labor laws in 150+ jurisdictions.' }
        ]
    },
    {
        category: 'By Industry',
        items: [
            { title: 'Technology', desc: 'Access global engineering talent pools instantly.' },
            { title: 'Fintech', desc: 'Bank-level security and compliance for sensitive operations.' },
            { title: 'Healthcare', desc: 'Compliant hiring for medical professionals worldwide.' },
            { title: 'Services', desc: 'Deploy consultants globally with compliant AOR structures.' }
        ]
    }
];

export default function UseCasesPage() {
    return (
        <div className="bg-brand-black min-h-screen">
            <section className="pt-32 pb-20 container mx-auto px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-4xl md:text-6xl font-bold text-brand-white mb-6"
                >
                    Global Hiring for <br />
                    <span className="text-brand-orange">Every Stage.</span>
                </motion.h1>
            </section>

            {useCases.map((section, sIndex) => (
                <section key={sIndex} className="py-16 container mx-auto px-6 border-t border-brand-white/10 last:border-b">
                    <h2 className="text-2xl font-bold text-brand-white mb-10 pl-4 border-l-4 border-brand-blue">{section.category}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {section.items.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card hoverEffect className="h-full bg-brand-white/5 border border-brand-white/10 p-8">
                                    <h3 className="text-xl font-bold text-brand-white mb-3">{item.title}</h3>
                                    <p className="text-brand-white/60">{item.desc}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>
            ))}

            <section className="py-24 text-center">
                <Button size="lg">Find Your Solution</Button>
            </section>
        </div>
    );
}
