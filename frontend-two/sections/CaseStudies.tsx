'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, AlertCircle, Zap, ShieldCheck, Globe } from 'lucide-react';
import Button from '@/components/Button';

const cases = [
    {
        id: 'tech-scaling',
        company: 'CloudStream SaaS',
        sector: 'Tech / SaaS',
        title: 'Fast Engineering Scale.',
        problem: 'Needed 45 engineers in 3 countries without local offices.',
        solution: 'KOMP Activate enabled compliant hiring in under 48 hours.',
        result: 'Saved $1.2M and hit hiring goals early.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop',
        icon: Zap,
        color: '#f97316'
    },
    {
        id: 'healthcare-compliance',
        company: 'VitalsGlobal',
        sector: 'Healthcare',
        title: 'Global Risk Shield.',
        problem: 'Managing remote specialists across 15 countries was a legal risk.',
        solution: 'KOMP Governance fixed all compliance gaps and updated contracts.',
        result: 'Zero legal issues and 100% risk reduction.',
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop',
        icon: ShieldCheck,
        color: '#10b981'
    },
    {
        id: 'professional-mobility',
        company: 'Strata Partners',
        sector: 'Professional Services',
        title: 'Global Staff Mobility.',
        problem: 'Fast visa needs for staff moving between London and Dubai.',
        solution: 'KOMP Mobility handled relocation and payroll without local entities.',
        result: 'Visa time cut by 70%; 99% satisfaction rate.',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2932&auto=format&fit=crop',
        icon: Globe,
        color: '#3b82f6'
    }
];

const CaseStudies = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Results That Matter</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col justify-between min-h-[400px]"
                    >
                        <div>
                            <div className="text-brand-orange mb-6">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="opacity-20"><path d="M14.017 21L14.017 18C14.017 16.896 14.352 15.938 15.022 15.126C15.692 14.314 16.73 13.626 18.136 13.062L18.665 14.28C17.657 14.544 17.033 14.938 16.793 15.462C16.553 15.986 16.433 16.669 16.433 17.511L16.433 21L14.017 21ZM5.09705 21L5.09705 18C5.09705 16.896 5.43205 15.938 6.10205 15.126C6.77205 14.314 7.81005 13.626 9.21605 13.062L9.74505 14.28C8.73705 14.544 8.11305 14.938 7.87305 15.462C7.63305 15.986 7.51305 16.669 7.51305 17.511L7.51305 21L5.09705 21Z"></path></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-brand-orange mb-4">Prevented $200k Exposure</h3>
                            <p className="text-xl text-slate-500 font-medium leading-relaxed">
                                "KOMP identified critical misclassification risks in our EU pilot before we signed. Their legal infrastructure saved us from a massive regulatory fine."
                            </p>
                        </div>
                        <div className="flex items-center gap-4 mt-8">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-100">
                                <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="Sarah Chen" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <div className="font-bold text-slate-900">Sarah Chen</div>
                                <div className="text-xs font-bold text-brand-orange uppercase">CFO, TechFlow</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col justify-between min-h-[400px]"
                    >
                        <div>
                            <div className="text-brand-orange mb-6">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="opacity-20"><path d="M14.017 21L14.017 18C14.017 16.896 14.352 15.938 15.022 15.126C15.692 14.314 16.73 13.626 18.136 13.062L18.665 14.28C17.657 14.544 17.033 14.938 16.793 15.462C16.553 15.986 16.433 16.669 16.433 17.511L16.433 21L14.017 21ZM5.09705 21L5.09705 18C5.09705 16.896 5.43205 15.938 6.10205 15.126C6.77205 14.314 7.81005 13.626 9.21605 13.062L9.74505 14.28C8.73705 14.544 8.11305 14.938 7.87305 15.462C7.63305 15.986 7.51305 16.669 7.51305 17.511L7.51305 21L5.09705 21Z"></path></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-brand-orange mb-4">Zero Audit Findings</h3>
                            <p className="text-xl text-slate-500 font-medium leading-relaxed">
                                "We expanded into 3 new markets in 60 days. KOMP handled every tax filing and localized contract clause perfectly. We passed due diligence with flying colors."
                            </p>
                        </div>
                        <div className="flex items-center gap-4 mt-8">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-100">
                                <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Mike Reeves" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <div className="font-bold text-slate-900">Mike Reeves</div>
                                <div className="text-xs font-bold text-brand-orange uppercase">VP People, ScaleApi</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};


export default CaseStudies;
