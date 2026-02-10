'use client';

import { motion } from 'framer-motion';
import { Users, CreditCard, ShieldCheck, CheckCircle2, Search, Settings, FileText, ArrowRight } from 'lucide-react';

const teams = [
    {
        name: 'HR Operations',
        icon: <Users className="w-6 h-6" />,
        image: '/images/image copy.png', // HR specific cropped image
        problemShort: 'Operational Overload: HR becomes the middleman for legal paperwork.',
        problemDetails: [
            'HR teams became intermediaries between legal advisors and local managers',
            'Onboarding timelines varied significantly by country',
            'Benefits administration and employee data lived across disconnected tools'
        ],
        solution: 'Automate onboarding, contracts, benefits, and lifecycle management across countries from one screen.',
        framework: 'Centralized employee records across jurisdictions. Consistent employee experience regardless of location.',
        ui: [
            { label: 'Emily Grace', status: 'Onboarded', date: '48h' },
            { label: 'Benito Reeser', status: 'Pending', date: 'In Progress' }
        ]
    },
    {
        name: 'Finance Operations',
        icon: <CreditCard className="w-6 h-6" />,
        image: '/images/image copy 2.png', // Finance dashboard
        problemShort: 'Fragmented Cost Control: Multi-currency transfers and hidden FX leakage.',
        problemDetails: [
            'Payroll processed through multiple vendors and currencies',
            'Invoices arrived at different times with inconsistent reporting',
            'FX exposure and reconciliation work inflated workforce costs'
        ],
        solution: 'Fund one invoice. We handle taxes, social contributions, and local filings for you. Unified cost control.',
        framework: 'One consolidated payroll workflow. Unified invoicing with transparent breakdowns and real-time visibility.',
        ui: [
            { label: 'Total Funding', status: '$420,000', date: 'Confirmed' },
            { label: 'FX Savings', status: '4.2%', date: 'Real-time' }
        ]
    },
    {
        name: 'Legal Oversight',
        icon: <ShieldCheck className="w-6 h-6" />,
        image: '/images/image copy 3.png', // Legal/Compliance widgets
        problemShort: 'Compliance Exposure: Contracts and labor laws change constantly.',
        problemDetails: [
            'Employment contracts differed by jurisdiction with limited oversight',
            'Regulatory changes required manual reviews country by country',
            'Legal teams lacked real-time visibility into workforce risk'
        ],
        solution: 'Our AI-risk engine monitors law changes globally. Standardize contracts and maintain audit-ready documentation.',
        framework: 'Jurisdiction-aware employment contracts. Continuous monitoring of labor law obligations.',
        ui: [
            { label: 'GDPR Compliance', status: 'Verified', date: 'Active' },
            { label: 'IP Assignment', status: 'Secure', date: 'Universal' }
        ]
    }
];

export default function TeamSolutions() {
    return (
        <section className="py-32 bg-transparent relative overflow-hidden z-10">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-brand-blue font-bold tracking-[0.3em] text-[10px] mb-4 block uppercase font-black">Role-Based Operating Layer</motion.span>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl lg:text-7xl font-black text-brand-black mb-10 tracking-tighter leading-[1.1]">
                        Unifying HR, Finance, and <span className="text-brand-orange">Legal.</span>
                    </motion.h2>
                    <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                        <p className="text-[10px] font-black text-brand-blue uppercase tracking-widest mb-4">Summary</p>
                        <p className="text-xl text-slate-500 font-medium leading-relaxed">
                            Global growth created internal friction. HR, Finance, and Legal each operated with different tools. KOMP was implemented to unify workforce operations across teams, creating shared visibility, clear ownership, and consistent execution.
                        </p>
                    </div>
                </div>

                <div className="space-y-12">
                    {teams.map((team, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-white rounded-[3.5rem] p-8 lg:p-16 border border-slate-200 flex flex-col lg:flex-row gap-16 items-start hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] transition-all duration-700 group">
                            <div className="flex-1 space-y-10">
                                <div className="flex items-center gap-5">
                                    <div className="w-16 h-16 rounded-[1.5rem] bg-brand-black flex items-center justify-center text-brand-orange shadow-xl group-hover:scale-110 transition-transform duration-500">
                                        {team.icon}
                                    </div>
                                    <h3 className="text-4xl font-black text-brand-black leading-tight">{team.name}</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-6">
                                        <div>
                                            <p className="text-[11px] font-black text-red-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-red-500 pulse" /> Pain Point
                                            </p>
                                            <p className="text-xl font-semibold text-slate-700 leading-tight mb-4">"{team.problemShort}"</p>
                                            <ul className="space-y-3">
                                                {team.problemDetails.map((detail, d) => (
                                                    <li key={d} className="flex gap-3 text-sm text-slate-500 font-medium">
                                                        <ArrowRight className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="space-y-6 pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-slate-100 md:pl-10">
                                        <div>
                                            <p className="text-[11px] font-black text-brand-blue uppercase tracking-widest mb-4">KOMP Solution</p>
                                            <p className="text-xl font-black text-brand-black leading-snug mb-6">
                                                {team.solution}
                                            </p>
                                            <div className="p-5 bg-blue-50/50 border border-blue-100 rounded-3xl">
                                                <p className="text-[10px] font-semibold text-brand-blue uppercase mb-2">Execution Framework</p>
                                                <p className="text-xs text-slate-600 font-medium leading-relaxed">{team.framework}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-[450px] relative shrink-0">
                                <div className="absolute inset-0 bg-brand-orange/5 blur-[80px] -z-10 rounded-full scale-125" />
                                <div className="bg-slate-50/50 rounded-[3.5rem] border border-slate-100 p-6 shadow-inner overflow-hidden group/img h-[500px] flex items-center justify-center">
                                    <img
                                        src={team.image || '/images/Gemini_Generated_Image_ac3v9wac3v9wac3v.png'}
                                        alt={team.name}
                                        className={`w-full h-full object-contain rounded-[2rem] transform transition-transform duration-1000 group-hover/img:scale-105`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/5 to-transparent pointer-events-none" />
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-brand-orange p-6 rounded-[2rem] shadow-2xl shadow-orange-200 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <FileText className="w-8 h-8 text-white" />

                                    {/* Status Overlay Badge */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        className="absolute top-12 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 backdrop-blur-md bg-white/90"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                                        <span className="text-[10px] font-black text-brand-black uppercase tracking-widest">Unified Protocol Active</span>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-32 text-center max-w-3xl mx-auto">
                    <p className="text-[11px] font-black text-slate-400 mb-8 tracking-[0.4em] uppercase">The Results After 90 Days</p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { l: 'Onboarding handoffs', v: 'Faster' },
                            { l: 'FX Leakage', v: '-4.2%' },
                            { l: 'Audit readiness', v: 'Instant' },
                            { l: 'Internal Alignment', v: '100%' }
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="text-2xl font-black text-brand-black mb-1">{stat.v}</div>
                                <div className="text-[9px] font-bold text-slate-400 uppercase">{stat.l}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
