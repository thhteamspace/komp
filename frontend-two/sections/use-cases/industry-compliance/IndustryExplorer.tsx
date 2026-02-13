'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cloud, Landmark, ShieldPlus, UserCheck, BarChart3, ShieldAlert, CheckCircle2 } from 'lucide-react';

const industries = [
    {
        id: 'saas',
        name: 'SaaS',
        icon: <Cloud className="w-5 h-5" />,
        title: 'The SaaS Risk: Data Sovereignty',
        desc: 'Cross-border user bases trigger conflicting GDPR and CCPA requirements, often leaving data residency non-compliant by default settings.',
        practiceTitle: 'Practice Detail: IP Ownership',
        practiceDesc: 'We implemented granular role-based access control (RBAC) tied directly to IP ownership logs. This ensured that no contractor code could be merged without a secondary compliance signature, creating a firewall around core IP assets while maintaining SOC 2 Type II audit trails.',
        resultValue: 'Zero IP Leakage',
        resultLabel: 'Recorded',
        guardrailTitle: 'Sovereignty Map Active',
        guardrailSubtitle: 'SaaS Guardrail',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
        status: '100% COMPLIANT',
        enclave: 'ENCLAVE_STATUS: ENCRYPTED'
    },
    {
        id: 'fintech',
        name: 'Fintech',
        icon: <Landmark className="w-5 h-5" />,
        title: 'The Fintech Risk: Velocity',
        desc: 'High-frequency trading algorithms often bypass standard AML checks during peak loads, creating silent audit failures that compound over time.',
        practiceTitle: 'Practice Detail: Financial Logic',
        practiceDesc: 'We deployed real-time transaction monitoring hooked into the immutable ledger. By isolating payment flow logic into secure enclaves, we ensured that even during 10x traffic spikes, AML checks were processed synchronously rather than batched.',
        resultValue: '100% Audit',
        resultLabel: 'Pass Rate',
        guardrailTitle: 'AML Sync: Real-time',
        guardrailSubtitle: 'Fintech Guardrail',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
        status: 'ACTIVE',
        enclave: 'LEDGER_SYNC: IMMUTABLE'
    },
    {
        id: 'healthcare',
        name: 'Healthcare',
        icon: <ShieldPlus className="w-5 h-5" />,
        title: 'The Healthcare Risk: PHI Fragmentation',
        desc: 'Patient data moving between legacy EHR systems and modern cloud apps creates "shadow copies" of PHI that traditional scanners miss entirely.',
        practiceTitle: 'Practice Detail: Data Privacy',
        practiceDesc: 'We implemented a data loss prevention (DLP) protocol that automatically tags any data packet containing PHI identifiers. This allows for persistent encryption that travels with the data, regardless of where it resides.',
        resultValue: 'HIPAA Certified',
        resultLabel: 'Workflow',
        guardrailTitle: 'PHI Trace-and-Tag',
        guardrailSubtitle: 'Healthcare Guardrail',
        image: 'https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80',
        status: 'PROTECTED',
        enclave: 'DLP_ACTIVE: 100% TAGGED'
    }
];

const IndustryExplorer = () => {
    const [activeTab, setActiveTab] = useState('saas');

    const current = industries.find(i => i.id === activeTab)!;

    return (
        <section className="py-24 bg-white border-y border-slate-100 scroll-mt-20" id="explore">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter">
                        The Challenge: <br />
                        <span className="text-slate-400">Industry risk doesn't scale evenly.</span>
                    </h2>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
                        Generic compliance tools apply a "one-size-fits-all" logic that crumbles under the weight of sector-specific regulations. For high-growth enterprises in regulated spaces, a generic checkbox is a liability, not a safeguard.
                    </p>
                    <div className="h-1.5 w-24 bg-brand-orange rounded-full mb-12"></div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Select a vertical to reveal the solution</h3>
                </div>

                <div className="flex flex-wrap gap-4 mb-16">
                    {industries.map((ind) => (
                        <button
                            key={ind.id}
                            onClick={() => setActiveTab(ind.id)}
                            className={`px-8 py-4 rounded-full font-bold transition-all flex items-center gap-3 border h-auto ${activeTab === ind.id
                                ? 'bg-brand-orange border-brand-orange text-white shadow-xl shadow-brand-orange/20 scale-105 z-10'
                                : 'bg-[#f8f6f5] border-slate-200 text-slate-600 hover:border-brand-orange/50'
                                }`}
                        >
                            <span className={activeTab === ind.id ? 'text-white' : 'text-brand-orange'}>
                                {ind.icon}
                            </span>
                            {ind.name}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-16"
                    >
                        <div className="grid lg:grid-cols-12 gap-12 items-start">
                            <div className="lg:col-span-5">
                                <div className="p-10 bg-[#f8f6f5] rounded-3xl border border-slate-100 mb-8 overflow-hidden relative group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                    <h4 className="text-2xl font-black text-slate-950 mb-4 tracking-tight">{current.title}</h4>
                                    <p className="text-slate-500 font-medium leading-relaxed">
                                        {current.desc}
                                    </p>
                                </div>

                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="p-10 bg-brand-orange rounded-3xl text-white shadow-2xl shadow-brand-orange/30 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                                    <h4 className="text-xl font-black mb-6 flex items-center gap-3">
                                        <UserCheck className="w-6 h-6 text-white/80" />
                                        {current.practiceTitle}
                                    </h4>
                                    <p className="text-white/90 font-medium leading-relaxed mb-8">
                                        {current.practiceDesc}
                                    </p>
                                    <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/60 mb-2">Key Result</div>
                                    <div className="text-3xl font-black">{current.resultValue} <span className="opacity-40">{current.resultLabel}</span></div>
                                </motion.div>
                            </div>

                            <div className="lg:col-span-7 lg:mt-12">
                                <div className="relative bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-800 aspect-[16/10] shadow-2xl group">
                                    <img
                                        alt={current.guardrailTitle}
                                        className="w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-110"
                                        src={current.image}
                                    />
                                    <div className="absolute inset-0 flex flex-col p-10">
                                        <div className="flex justify-between items-start mb-auto">
                                            <div>
                                                <div className="text-[10px] font-bold text-brand-orange uppercase tracking-[0.2em] mb-2">{current.guardrailSubtitle}</div>
                                                <div className="text-3xl font-black text-white tracking-tight">{current.guardrailTitle}</div>
                                            </div>
                                            <div className="px-4 py-1.5 bg-green-500/20 text-green-400 rounded-lg text-xs font-bold border border-green-500/30 backdrop-blur-sm">
                                                {current.status}
                                            </div>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="text-[10px] text-white/50 font-bold tracking-widest">{current.enclave}</div>
                                                <CheckCircle2 className="text-green-400 w-4 h-4" />
                                            </div>
                                            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: '100%' }}
                                                    transition={{ duration: 2, delay: 0.5 }}
                                                    className="h-full bg-brand-orange"
                                                ></motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default IndustryExplorer;
